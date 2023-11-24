import styles from "./ProfilePage.module.css";
import { NavLink, useNavigate } from "react-router-dom";

export const ProfilePage = ({login}) => {
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

  const navigate = useNavigate();

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
          <button className={styles.button_edit}>Редактировать логин</button>
          <button className={styles.button_edit}>Редактировать пароль</button>
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
                onClick={() => {
                  //navigate(`/course/${item._id}`);
                  navigate('/workout-video');
                }}
                className={styles.button}
              >
                <div className={styles.box}>
                  <button className={styles.button_courses}>Перейти →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
