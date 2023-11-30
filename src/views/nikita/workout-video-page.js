import { useState } from "react";
import { createPortal } from "react-dom";
import { Progress } from "../../components/workoutProgressForms/Progress";
import { ProgressCheck } from "../../components/workoutProgressForms/ProgressCheck";
import { Modal } from "../../components/modal/Modal";
import { Popupmenu } from "../../components/popup-menu/popup-menu";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../../components/progressBar/progressbar";
import "./workout-video-page.css";
//
export const WorkoutVideoPage = ({ login }) => {
  const [progress, setProgress] = useState("");
  // const [formValues, setFormValues] = useState({
  //   first: "0",
  //   second: "0",
  //   third: "0",
  // });
  const [formValues, setFormValues] = useState(["0", "0", "0"]);

  const getModalForm = () => {
    switch (progress) {
      case "progress":
        return (
          <Progress
            onFormClose={() => setProgress("")}
            onFormSubmited={() => setProgress("progresscheck")}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        );
      case "progresscheck":
        return <ProgressCheck onFormClose={() => setProgress("")} />;
      default:
        return null;
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="wrapper">
        <div className="logo-wrapper">
          <div className="logo" onClick={() => navigate("/")} />
          <Popupmenu login={login} />
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
                <ProgressBar
                  color="#565EEF"
                  bgcolor="#EDECFF"
                  progress={
                    formValues[0] < 10 ? (formValues[0] / 10) * 100 : 100
                  }
                />
              </div>
              <div className="progress-line">
                <div className="progress-text">Наклоны назад</div>
                <ProgressBar
                  color="#FF6D00"
                  bgcolor="#FFF2E0"
                  progress={
                    formValues[1] < 10 ? (formValues[1] / 10) * 100 : 100
                  }
                />
              </div>
              <div className="progress-line">
                <div className="progress-text">
                  Поднятие ног,
                  <br />
                  согнутых в коленях
                </div>
                <ProgressBar
                  color="#9A48F1"
                  bgcolor="#F9EBFF"
                  progress={formValues[2] < 5 ? (formValues[2] / 5) * 100 : 100}
                />
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
