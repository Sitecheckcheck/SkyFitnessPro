import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../store/slices/userSlice";
import { Progress } from "../lesia/Progress";
import { ProgressCheck } from "../lesia/ProgressCheck";
import { Modal } from "../lesia/Modal";
import "./workout-video-page.css";
//
export const WorkoutVideoPage = ({ login }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [progress, setProgress] = useState("");

  const [visibleFilter, setVisibleFilter] = useState(null);
  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter);
  };

  const getModalForm = () => {
    switch (progress) {
      case "progress":
        return (
          <Progress
            onFormClose={() => setProgress("")}
            onFormSubmited={() => setProgress("progresscheck")}
          />
        );
      case "progresscheck":
        return <ProgressCheck onFormClose={() => setProgress("")} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="logo-wrapper">
          <div className="logo" />
          <div
            className="user-wrapper"
            onClick={() => toggleVisibleFilter("popup")}
          >
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
            {visibleFilter === "popup" && (
              <ul className="popup" $popup>
                <div className="popup-box" $popup>
                  <li className="popup-line">На главную</li>
                  <li className="popup-line">Профиль</li>
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
        </div>
        <div className="content-wrapper">
          <h1 className="header">Йога</h1>
          <div className="categories">
            <span className="categorie">Красота и здоровье /</span>
            <span className="categorie">Йога на каждый день /</span>
            <span className="categorie">2 день</span>
          </div>
          <div className="video">
            <div className="play-video"></div>
          </div>
          <div className="footer-wrapper">
            <div className="exercises-wrapper">
              <h1 className="exercises-header">Упражнения</h1>
              <ul className="exercises">
                <li className="exercise">Наклон вперед (10 повторений)</li>
                <li className="exercise">Наклон назад (10 повторений)</li>
                <li className="exercise">
                  Поднятие ног, согнутых в коленях (5 повторений)
                </li>
              </ul>
              <button
                className="button"
                onClick={() => setProgress("progress")}
              >
                Заполнить свой прогресс
              </button>
            </div>
            <div className="progress-wrapper">
              <div className="progress-header">
                Мой прогресс по тренировке 2:
              </div>
              <br />
              <br />
              <div className="progress-line">
                <div className="progress-text">Наклоны вперед</div>
                <div className="progress-one"></div>
              </div>
              <div className="progress-line">
                <div className="progress-text">Наклоны назад</div>
                <div className="progress-two"></div>
              </div>
              <div className="progress-line">
                <div className="progress-text">
                  Поднятие ног,
                  <br />
                  согнутых в коленях
                </div>
                <div className="progress-three"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {createPortal(
        <Modal isOpen={progress}>{getModalForm()}</Modal>,
        document.body
      )}
    </div>
  );
};
