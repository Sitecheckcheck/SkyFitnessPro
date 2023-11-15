import styles from "./Form.module.css"

export const ProgressCheck = () => {
  return (
    <div className={styles.page}>
      <div className={styles.progressCheckForm}>
        <div className={styles.headerProgress}>
          Ваш прогресс засчитан!
        </div>
        <div className={styles.imgBox}>
          <img src="img/hand.svg" alt="logo" />
        </div>
      </div>
    </div>
  )
}