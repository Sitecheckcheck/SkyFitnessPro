import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../lesia/Modal";
import { Button } from "../lesia/Button";
import { Appointment } from "../lesia/Appointment";
import styles from "./WorkoutDescriptionPage.module.css";
import { useNavigate } from "react-router-dom";

export const WorkoutDescriptionPage = () => {
  const [isOpen, setIsOpen] = useState("");

  const getModalForm = () => {
    return (
      isOpen === "open" && <Appointment onFormClose={() => setIsOpen("")} />
    );
  };
  const navigate = useNavigate();

  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoBox} onClick={() => navigate("/")}>
          <img src="img/logoblack.svg" alt="logo" />
        </div>
        <button
          className={styles.buttonLogin}
          onClick={() => navigate("/login")}
        >
          Войти
        </button>
      </div>
      <br />
      <br />
      <br />
      <div name={styles.banner}>
        <img src="img/skillcard.svg" alt="banner" />
      </div>
      <div>
        <div className={styles.heading}>Подойдет для вас, если:</div>
        <div style={{ paddingTop: "40px" }}>
          <ol className={styles.reasons}>
            <div className={styles.number}>1</div>
            <li className={styles.reasons}>
              Давно хотели
              <br /> попробовать йогу, но
              <br /> не решались начать.{" "}
            </li>
            <div className={styles.number}>2</div>
            <li className={styles.reasons}>
              Хотите укрепить
              <br /> позвоночник,
              <br /> избавиться от болей
              <br /> в спине и суставах.
            </li>
            <div className={styles.number}>3</div>
            <li className={styles.reasons}>
              Ищете активность,
              <br /> полезную для тела
              <br /> и души.
            </li>
          </ol>
        </div>
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
        <div className={styles.lefttext}>
          Оставьте заявку на пробное занятие, мы свяжемся
          <br /> с вами, поможем с выбором направления и тренера,
          <br /> с которым тренировки принесут здоровье и радость!
        </div>
        <Button
          color={"purple"}
          text={"Записаться на тренировку"}
          onClick={() => setIsOpen("open")}
        />
      </div>
      {createPortal(
        <Modal isOpen={isOpen}>{getModalForm()}</Modal>,
        document.body
      )}
    </div>
  );
};
