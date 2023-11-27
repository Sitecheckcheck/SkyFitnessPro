import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ProfilePage.module.css";
import { NavLink } from "react-router-dom";
import { ChangeLogin } from "../../lesia/ChangeLogin";
import { ChangePassword } from "../../lesia/ChangePassword";
import {SelectWorkout} from "../../lesia/SelectWorkout"
import { Modal } from "../../lesia/Modal";

export const ProfilePage = ({login}) => {
  const [changeData, setChangeData] = useState('');

  const usersCourses = [
    { name: "Йога" },
    { name: "Стретчинг" },
    { name: "Бодифлекс" },
  ];

  const handleImg = (item) => {
    switch (item.name) {
      case "Стретчинг":
        return "/img/stratching.png";
      case "Бодифлекс":
        return "/img/bodyflex.png";
      case "Йога":
        return "/img/yoga.png";
      case "Танцевальный фитнес":
        return "/img/dance.png";
      case "Степ-аэробика":
        return "/img/stap.png";
      default:
        return "/img/stap.png";
    }
  };

  // const navigate = useNavigate();

  const getModalForm = () => {
    switch (changeData) {
    case 'login':
      return <ChangeLogin onFormClose={() => setChangeData('')}/>
    case 'password':
      return <ChangePassword onFormClose={() => setChangeData('')}/>
    case 'workouts':
      return <SelectWorkout onFormClose={() => setChangeData('')}/>
    default:
      return null
    }
  } 

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <NavLink to="/">
          <div>
            <img src="img/logoblack.svg" alt="logo" />
          </div>
        </NavLink>
        <div>

          <NavLink className={styles.user} to="/profile">
            <img src="img/Ellipse.svg" alt="" />
            <p>{login}</p>
          </NavLink>
        </div>
      </div>
      <div className={styles.content_profile}>
        <p className={styles.content_title}>Мой профиль</p>
        <div className={styles.content_user}>
          <p className={styles.content_user_item}>Логин: {login}</p>
        </div>
        <div className={styles.content_buttons}>
          <button className={styles.button_edit} onClick={() => setChangeData('login')}>Редактировать логин</button>
          <button className={styles.button_edit} onClick={() => setChangeData('password')}>Редактировать пароль</button>
        </div>
      </div>
      <div className={styles.content_profile}>
        <p className={styles.content_title}>Мои курсы</p>
        <div className={styles.content_main}>
          {usersCourses.map((item, i) => (
            <div className={styles.img_box} key={i}>
              <p className={styles.img_title}>{item.name}</p>
              <img
                className={styles.img}
                src={handleImg(item)}
                alt="fitness_img"
              />
              <div
                // onClick={() => {
                //   //navigate(`/course/${item._id}`);
                // }}
                className={styles.button}
              >
                <div className={styles.box}>
                  <button
                    className={styles.button_courses}
                    onClick={() => setChangeData('workouts')}
                    >
                    Перейти →
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {createPortal(
        <Modal isOpen={changeData}>{getModalForm()}</Modal>, document.body
      )}
    </div>
  );
};