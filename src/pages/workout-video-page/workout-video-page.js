import { useState } from "react";
import { createPortal } from "react-dom";
import { Progress } from "../../components/workoutProgressForms/Progress";
import { ProgressCheck } from "../../components/workoutProgressForms/ProgressCheck";
import { Modal } from "../../components/modal/Modal";
import { Popupmenu } from "../../components/popup-menu/popup-menu";
import { useNavigate, useParams } from "react-router-dom";
import { ProgressBar } from "../../components/progressBar/progressbar";
import "./workout-video-page.css";
import { useGetAllWorkoutsQuery } from "../../store/workoutsApi";
import { useSelector } from "react-redux";
//
export const WorkoutVideoPage = ({ login }) => {
  const { course } = useSelector((state) => state.course);
  const params = useParams();
  const pageId = params.id;
  const [progress, setProgress] = useState("");
  const [formValues, setFormValues] = useState(Array(10).fill("0"));

  const workoutsAll = useGetAllWorkoutsQuery().data;
  const allWorkouts = [];
  if (workoutsAll) {
    const keys = Object.keys(workoutsAll);
    keys.forEach((key) => allWorkouts.push(workoutsAll[key]));
  }

  const workout = allWorkouts?.filter((el) => el._id === pageId)[0];

  const [error, setError] = useState("");
  const validateValues = (inputValues) => {
    inputValues.forEach((el) =>
      Number.isInteger(Number(el))
        ? el
        : setError("Количество выполненных упражнений должно быть целым числом")
    );
  };

  const getModalForm = () => {
    switch (progress) {
      case "progress":
        return (
          <Progress
            onFormClose={() => setProgress("")}
            onFormSubmited={() => setProgress("progresscheck")}
            formValues={formValues}
            setFormValues={setFormValues}
            validateValues={validateValues}
            setError={setError}
            error={error}
          />
        );
      case "progresscheck":
        return <ProgressCheck onFormClose={() => setProgress("")} />;
      default:
        return null;
    }
  };

  const navigate = useNavigate();

  function createValidVideoUrl(url) {
    const lastPath = url?.slice(url.lastIndexOf("/"));
    return `https://www.youtube.com/embed${lastPath}`;
  }

  const quantityExercises = (item) => {
    return Number(item.substring(item.indexOf("(") + 1, item.indexOf("(") + 3));
  };

  return (
    <div>
      <div className="wrapper">
        <div className="logo-wrapper">
          <div className="logo" onClick={() => navigate("/")} />
          <Popupmenu login={login} />
        </div>
        <div className="content-wrapper">
          <h1 className="header">{course}</h1>
          <div className="categories">
            <span className="categorie">{workout?.name}</span>
          </div>
          <iframe
            className="video"
            src={createValidVideoUrl(workout?.video)}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder={0}
          ></iframe>
          <div className="footer-wrapper">
            <div className="exercises-wrapper">
              <h1 className="exercises-header">Упражнения</h1>
              <ul className="exercises">
                {workout?.exercises ? (
                  workout?.exercises.map((item, index) => (
                    <li key={index} className="exercise">
                      {item}
                    </li>
                  ))
                ) : (
                  <div className="exercise">Нет доступных упражнений</div>
                )}
              </ul>
              {workout?.exercises ? (
                <button
                  className="button"
                  onClick={() => setProgress("progress")}
                >
                  Заполнить свой прогресс
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="progress-wrapper">
              <div className="progress-header">
                Мой прогресс по тренировке {workout?.name[0]}:
              </div>

              {workout?.exercises ? (
                workout?.exercises?.map((item, index) => (
                  <div key={index} className="progress-line">
                    <div className="progress-text">
                      {item.substring(0, item.indexOf("("))}
                    </div>
                    <ProgressBar
                      color="#565EEF"
                      bgcolor="#EDECFF"
                      progress={
                        error
                          ? "0"
                          : formValues[index] < quantityExercises(item)
                          ? Math.round(
                              (formValues[index] / quantityExercises(item)) *
                                100
                            )
                          : 100
                      }
                    />
                  </div>
                ))
              ) : (
                <div className="exercise">Нет доступных упражнений</div>
              )}
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
