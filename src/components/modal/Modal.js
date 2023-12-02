import styles from "./Modal.module.css";

export const Modal = ({ children, isOpen }) => {
  return (
    <div className={isOpen ? styles.modalOpen : styles.modalHidden}>
      {children}
    </div>
  );
};
