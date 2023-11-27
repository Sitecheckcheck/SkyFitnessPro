import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/slices/userSlice";
import "./popup-menu.css";

export const Popupmenu = ({ login }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [visibleFilter, setVisibleFilter] = useState(null);
  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter);
  };

  return (
    <div className="user-wrapper" onClick={() => toggleVisibleFilter("popup")}>
      <div className="user-avatar" />
      <div className="user-name">{login}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
      >
        <path
          d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      {visibleFilter && (
        <ul className="popup">
          <div className="popup-box">
            <li className="popup-line" onClick={() => navigate("/")}>
              На главную
            </li>
            <li className="popup-line" onClick={() => navigate("/profile")}>
              Профиль
            </li>
            <li
              className="popup-line"
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
