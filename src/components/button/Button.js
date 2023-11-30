import styles from "./Button.module.css";

export const Button = ({ text, onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
