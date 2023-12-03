import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../store/slices/userSlice";
import styles from "./PopupMenu.module.css";

export const PopupMenu = ({
  login,
  userNameColor,
  menuColor,
  popupLineTextColor,
}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [visibleFilter, setVisibleFilter] = useState(null);
  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter);
  };

  let loginShortened = login.slice(0, 5) + "...";

  return (
    <div className={styles.userWrapper} onClick={() => toggleVisibleFilter("popup")}>
      <div className={styles.userAvatar} />
      {login.length >= 5 ? (
        <div className={styles.userName} style={{ color: userNameColor }}>
          {loginShortened}
        </div>
      ) : (
        <div className={styles.userName} style={{ color: userNameColor }}>
          {login}
        </div>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
      >
        <path
          d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308"
          // stroke="black"
          stroke={userNameColor}
          strokeWidth="2"
        />
      </svg>
      {visibleFilter && (
        <ul className={styles.popup} style={{ background: menuColor }}>
          <div className={styles.popupBox}>
            <li
              className={styles.popupLine}
              style={{ color: popupLineTextColor }}
              onClick={() => navigate("/")}
            >
              На главную
            </li>
            <li
              className={styles.popupLine}
              style={{ color: popupLineTextColor }}
              onClick={() => navigate("/profile")}
            >
              Профиль
            </li>
            <li
              className={styles.popupLine}
              style={{ color: popupLineTextColor }}
              onClick={() => {
                dispatch(removeUser());
                localStorage.removeItem("email");
                localStorage.removeItem("id");
                localStorage.removeItem("token");
                navigate("/");
              }}
            >
              Выйти
            </li>
          </div>
        </ul>
      )}
    </div>
  );
};
