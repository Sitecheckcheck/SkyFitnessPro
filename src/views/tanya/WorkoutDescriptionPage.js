import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../lesia/Modal";
import { Button } from "../lesia/Button";
import { Appointment } from "../lesia/Appointment";
import styles from "./WorkoutDescriptionPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAllCoursesQuery } from "../../store/coursesApi";
import CourseBanner from "../../components/courseBanner/courseBanner";

export const WorkoutDescriptionPage = () => {
  const [isOpen, setIsOpen] = useState("");
  const params = useParams();
  const pageId = params.id;

  const { data } = useGetAllCoursesQuery();
  const allCourses = [];
  if (data) {
    const keys = Object.keys(data);
    keys.forEach((key) => allCourses.push(data[key]));
  }

  const coursePage = allCourses.filter((el) => el._id === pageId)[0];

  const getModalForm = () => {
    return (
      isOpen === "open" && <Appointment onFormClose={() => setIsOpen("")} />
    );
  };
  const navigate = useNavigate();

  const directions = coursePage?.directions;

  const list = directions?.map((element, index) => (
    <li key={index}>{element}</li>
  ));

  return (
    <div className={`container`}>
      <div onClick={() => navigate("/")}>
        <img src="/img/logoblack.svg" alt="logo" />
      </div>
      <br />
      <br />
      <br />
      <CourseBanner name={coursePage?.name} />
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
            <ul>{list}</ul>
          </div>
        </div>
      </div>
      <p className={`${styles.text} small-text`}>
        {coursePage ? coursePage.description : ""}
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
