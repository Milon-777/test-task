import Cards from "./Cards";
import Header from "./Header";
import Table from "./Table";
import styles from "./DataTable.module.scss";
import { useState } from "react";
import Modal from "./Modal";
import { createEmployee } from "../../features/employee/employeeSlice";
import { useDispatch } from "react-redux";
import { Employee } from "../../types/types";
import useModal from "../../hooks/useModal";

const DataTable = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();
  const { isOpen, open, close } = useModal();

  const openModal = () => {
    open();
  };

  const closeModal = () => {
    close();
  };

  const handleSaveEmployee = (newEmployee: Omit<Employee, "id">) => {
    dispatch(createEmployee(newEmployee));
    closeModal();
  };

  return (
    <div className={styles.dataTable__container}>
      <Header
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        openModal={openModal}
      />
      <div className={styles.dataTable__searchResult}>
        <span className={styles.dataTable__searchResultType}>Employee</span>
        <span className={styles.dataTable__searchResultAmount}>
          18 results found
        </span>
      </div>
      <Cards />
      <Table searchQuery={searchQuery} />
      <Modal isOpen={isOpen} onClose={closeModal} onSave={handleSaveEmployee} />
    </div>
  );
};

export default DataTable;
