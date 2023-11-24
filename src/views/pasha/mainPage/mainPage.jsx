import styles from "./mainPage.module.css";
import { NavLink, useNavigate } from "react-router-dom";

export const MainPage = () => {

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();
  const allCourses = [
    { name: "Стретчинг" },
    { name: "Бодифлекс" },
    { name: "Йога" },
    { name: "Танцевальный фитнес" },
    { name: "Степ-аэробика" },
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

  return (
    <section className={`${styles.main}`}>
      <div className={styles.header}>
        <NavLink to="/">
          <div>
            <img src="img/logo.svg" alt="logo" />
          </div>
        </NavLink>

        {/* {isAllowed ? (
        <UserItem userName={getUserName(email)} color={color} />
      ) : ( */}
        <NavLink className="link" to="/login">
          <button className={styles.buttonLogin}>Войти</button>
        </NavLink>
      {/* )} */}
      </div>
      <div className={styles.content}>
        <div className={styles.content_header}>
          <div>
            <p className={styles.title}>Онлайн-тренировки для занятий дома</p>
            <p className={styles.subtitle}>
              Начните заниматься спортом и улучшите качество жизни
            </p>
          </div>
          <div>
            <img src="img/Sale_sticker_1.svg" alt="sale" />
          </div>
        </div>
        <div className={styles.content_main}>
          {allCourses?.map((item, index) => (
            <div
              className={styles.img_box}
              onClick={() => {
                navigate(`/course/${item._id}`);
              }}
              key={index}
            >
              <p className={styles.img_title}>{item.name}</p>
              <img className={styles.img} src={handleImg(item)} alt="fitness" />
            </div>
          ))}
        </div>
      </div>
      <footer className={styles.footer}>
        <div onClick={() => handleTop()}>
          <div className={styles.box}>
            <button className={styles.button}>Наверх ↑</button>
          </div>
        </div>
      </footer>
    </section>
  );
};
