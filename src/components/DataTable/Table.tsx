import styles from "./Table.module.scss";
import editIcon from "../../assets/editIcon.svg";
import deleteIcon from "../../assets/deleteIcon.svg";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sortByField,
  deleteEmployee,
  updateEmployee,
} from "../../features/employee/employeeSlice";
import { RootState } from "../../app/store";
import { Employee, Status } from "../../types/types";

interface Props {
  searchQuery: string;
}

const Table: React.FC<Props> = ({ searchQuery }) => {
  const [activeTriangle, setActiveTriangle] = useState<number>(0);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedEmployee, setEditedEmployee] = useState<Partial<Employee>>({});
  const employees = useSelector((state: RootState) => state.employee);
  const dispatch = useDispatch();

  const statusColor: Status = {
    ["Free"]: styles.table__statusFree,
    ["Busy"]: styles.table__statusBusy,
    ["Working"]: styles.table__statusWorking,
    ["On Vacation"]: styles.table__statusOnVacation,
  };

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleTriangleClick = (
    index: number,
    field: keyof (typeof employees)[0]
  ) => {
    setActiveTriangle((prevIndex) => (prevIndex === index ? 0 : index));
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);
    dispatch(sortByField({ field, direction: newSortDirection }));
  };

  const handleDeleteEmployee = (id: number) => {
    dispatch(deleteEmployee(id));
    setEditingId(null);
  };

  const handleEditEmployee = (id: number) => {
    setEditingId(id);
    const employee = filteredEmployees.find((emp) => emp.id === id);
    if (employee) {
      const editedEmployee = { ...employee };
      setEditedEmployee(editedEmployee);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof Employee
  ) => {
    setEditedEmployee((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  const handleSaveChanges = () => {
    if (editingId !== null) {
      dispatch(updateEmployee(editedEmployee));
      setEditingId(null);
      setEditedEmployee({});
    }
  };

  return (
    <div className={styles.table__wrapper}>
      <table className={styles.table}>
        <thead className={styles.table__head}>
          <tr className={styles.table__row}>
            <th className={styles.table__headerCell}>
              <div className={styles.table__columnName}>
                <span className={styles.table__text}>Name</span>
                <button
                  className={styles.table__button}
                  onClick={() => handleTriangleClick(1, "name")}>
                  <span
                    className={
                      activeTriangle === 1
                        ? styles.triangleUp
                        : styles.triangleDown
                    }></span>
                </button>
              </div>
            </th>
            <th className={styles.table__headerCell}>
              <div className={styles.table__columnName}>
                <span className={styles.table__text}>Email</span>
                <button
                  className={styles.table__button}
                  onClick={() => handleTriangleClick(2, "email")}>
                  <span
                    className={
                      activeTriangle === 2
                        ? styles.triangleUp
                        : styles.triangleDown
                    }></span>
                </button>
              </div>
            </th>
            <th className={styles.table__headerCell}>
              <div className={styles.table__columnName}>
                <span className={styles.table__text}>Status</span>
                <button
                  className={styles.table__button}
                  onClick={() => handleTriangleClick(3, "status")}>
                  <span
                    className={
                      activeTriangle === 3
                        ? styles.triangleUp
                        : styles.triangleDown
                    }></span>
                </button>
              </div>
            </th>
            <th className={styles.table__headerCell}>
              <div className={styles.table__columnName}>
                <span className={styles.table__text}>Role</span>
                <button
                  className={styles.table__button}
                  onClick={() => handleTriangleClick(4, "role")}>
                  <span
                    className={
                      activeTriangle === 4
                        ? styles.triangleUp
                        : styles.triangleDown
                    }></span>
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className={styles.table__body}>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id} className={styles.table__row}>
              <td className={styles.table__dataCell}>
                <img src={employee.profileImage} alt="User's image" />
                {editingId === employee.id ? (
                  <input
                    type="text"
                    value={editedEmployee.name || ""}
                    className={styles.table__inputName}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                ) : (
                  <span className={styles.table__text}>{employee.name}</span>
                )}
              </td>
              <td className={styles.table__dataCell}>
                {editingId === employee.id ? (
                  <input
                    type="text"
                    value={editedEmployee.email || ""}
                    className={styles.table__inputEmail}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                ) : (
                  <span className={styles.table__text}>{employee.email}</span>
                )}
              </td>
              <td className={styles.table__dataCell}>
                {editingId === employee.id ? (
                  <select
                    value={editedEmployee.status}
                    className={styles.table__selectStatus}
                    onChange={(e) => handleInputChange(e, "status")}>
                    <option value="Free">Free</option>
                    <option value="Busy">Busy</option>
                    <option value="Working">Working</option>
                    <option value="On Vacation">On Vacation</option>
                  </select>
                ) : (
                  <span className={statusColor[employee.status]}>
                    {employee.status}
                  </span>
                )}
              </td>
              <td className={styles.table__dataCell}>
                <div className={styles.table__roleWrapper}>
                  {editingId === employee.id ? (
                    <input
                      type="text"
                      value={editedEmployee.role || ""}
                      className={styles.table__inputRole}
                      onChange={(e) => handleInputChange(e, "role")}
                    />
                  ) : (
                    <span className={styles.table__text}>{employee.role}</span>
                  )}
                  <div className={styles.table__buttonsWrapper}>
                    {editingId === employee.id ? (
                      <button
                        className={styles.table__buttonSave}
                        onClick={() => handleSaveChanges()}>
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          className={styles.table__button}
                          onClick={() => handleEditEmployee(employee.id)}>
                          <img src={editIcon} alt="Edit user" />
                        </button>
                        <button
                          className={styles.table__button}
                          onClick={() => handleDeleteEmployee(employee.id)}>
                          <img src={deleteIcon} alt="Delete user" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
