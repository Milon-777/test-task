import { useState } from "react";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";
import { Employee } from "../../types/types";
import { profileImages } from "../../initialData/initialData";

const modalRoot = document.getElementById("modal") as
  | Element
  | DocumentFragment;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newEmployee: Omit<Employee, "id">) => void;
}

interface FormData {
  profileImage: string;
  name: string;
  email: string;
  status: string;
  role: string;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, onSave }) => {
  const [selectedImage, setSelectedImage] = useState<string>(profileImages[0]);
  const [formData, setFormData] = useState<FormData>({
    profileImage: selectedImage,
    name: "",
    email: "",
    status: "Free",
    role: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearFormData = () => {
    setSelectedImage(profileImages[0]);
    setFormData({
      profileImage: profileImages[0],
      name: "",
      email: "",
      status: "Free",
      role: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...formData, profileImage: selectedImage });
    onClose();
    clearFormData();
  };

  const handleClose = () => {
    clearFormData();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal__wrapper}>
      <div className={styles.modal}>
        <span
          className={styles.modal__closeButton}
          onClick={() => handleClose()}>
          &times;
        </span>
        <h2 className={styles.modal__title}>Adding new employee</h2>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.modal__form}>
          <div className={styles.modal__formGroup}>
            <label className={styles.modal__formLabel}>Profile Picture:</label>
            <div className={styles.modal__formImages}>
              {profileImages.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={`Profile ${image}`}
                  data-name={"profileImage"}
                  className={`${styles.modal__formImage} ${
                    selectedImage === image
                      ? styles.modal__formImage_selected
                      : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
          <div className={styles.modal__formGroupWrapper}>
            <div className={styles.modal__formGroup}>
              <label htmlFor="name" className={styles.modal__formLabel}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoFocus
                className={styles.modal__formInput}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.modal__formGroup}>
              <label htmlFor="email" className={styles.modal__formLabel}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.modal__formInput}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.modal__formGroup}>
              <label htmlFor="status" className={styles.modal__formLabel}>
                Status:
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className={styles.modal__formSelect}>
                <option value="Free">Free</option>
                <option value="Busy">Busy</option>
                <option value="Working">Working</option>
                <option value="On Vacation">On Vacation</option>
              </select>
            </div>
            <div className={styles.modal__formGroup}>
              <label htmlFor="role" className={styles.modal__formLabel}>
                Role:
              </label>
              <input
                type="text"
                id="role"
                name="role"
                required
                className={styles.modal__formInput}
                value={formData.role}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={styles.modal__formSubmitButton}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
