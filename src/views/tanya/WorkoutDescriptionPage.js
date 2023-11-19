import { Button } from "../lesia/Button";
import styles from "./WorkoutDescriptionPage.module.css";

export const WorkoutDescriptionPage = () => {





  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.logoBox}>
          <img src="img/logoblack.svg" alt="logo" />
        </div>
      <div name={styles.banner}>
        <img src="img/skillcard.svg" alt="banner" />
        </div> 
      <div>
        <div className={styles.heading}>Подойдет для вас, если:</div> 
        <ol className={styles.reasons}>
            <div className={styles.number}>1</div>
            <li className={styles.reasons}>Давно хотели попробовать йогу, но не решались начать. </li>
            <div className={styles.number}>2</div>
            <li className={styles.reasons}>Хотите укрепить позвоночник, избавиться от болей в спине и суставах.</li>
            <div className={styles.number}>3</div>
            <li className={styles.reasons}>Ищете активность, полезную для тела и души.</li>
          </ol>
      </div>
      <div>
      <div className={styles.heading}>Направления:</div>
      <div className={styles["content-container"]}>
        <div className={`${styles.directions} small-text`}>
        <ul>
              <li className={styles.direction}>Йога для новичков</li>
              <li className={styles.direction}>Классическая йога</li>
              <li className={styles.direction}>Йогатерапия</li>
            </ul>
          </div>
          <div className="small-text">
            <ul>
              <li>Кундалини-йога</li>
              <li>Хатха-йога</li>
              <li>Аштанга-йога</li>
            </ul>
            </div>
        </div>
      </div>
      <p className={`${styles.text} small-text`}>
        Благодаря комплексному воздействию упражнений происходит проработка всех
        групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме
        того, упражнения дарят отличное настроение, заряжают бодростью и
        помогают противостоять стрессам.
      </p>
      <div className={styles.left}>
        <p className={styles.lefttext}>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </p>
        <Button color={"purple"} text={"Записаться на тренировку"} />
      </div>
      
    </div>
  )
}