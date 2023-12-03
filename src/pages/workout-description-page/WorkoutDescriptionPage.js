import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../../components/modal/Modal";
import { Button } from "../../components/button/Button";
import { Appointment } from "../../components/appointment/Appointment";
import styles from "./WorkoutDescriptionPage.module.css";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { useGetAllCoursesQuery } from "../../store/coursesApi";
import CourseBanner from "../../components/courseBanner/courseBanner";
import { useAuth } from "../../hooks/use-auth";
import { Popupmenu } from "../../components/popup-menu/popup-menu";

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
    <ul key={index}>
      {element?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ));

  const { isAuth, email } = useAuth();

  return (
    <div className={`container`}>
      <br />
      <div className={styles.headerWrapper}>
        <div className={styles.logoBox} onClick={() => navigate("/")}>
          <img src="/img/logoblack.svg" alt="logo" />
        </div>
        {isAuth ? (
          <Popupmenu login={email} userNameColor={"black"} />
        ) : (
          <NavLink className="link" to="/login">
            <button className={styles.buttonLogin}>Войти</button>
          </NavLink>
        )}
      </div>

      <br />
      <br />
      <br />
      <CourseBanner name={coursePage?.name} />
      <div>
        <div className={styles.heading}>Подойдет для вас, если:</div>
        <div style={{ paddingTop: "40px" }}>
          <ol className={styles.reasons}>
            {coursePage?.reasons.map((item, index) => (
              <div key={index} className={styles.reasonsBlock}>
                <div className={styles.number}>{index + 1}</div>
                <li className={styles.reasons}>{item}</li>
              </div>
            ))}
          </ol>
        </div>
      </div>
      <div>
        <div className={styles.heading}>Направления:</div>
        {/* <div className={styles["content-container"]}> */}
        <div className={`${styles.directions} small-text`}>{list}</div>
        {/* </div> */}
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
