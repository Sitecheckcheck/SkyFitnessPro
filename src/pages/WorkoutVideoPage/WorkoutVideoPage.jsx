import { useState } from "react";
import { createPortal } from "react-dom";
import { Progress } from "../../components/WorkoutProgressForms/Progress";
import { ProgressCheck } from "../../components/WorkoutProgressForms/ProgressCheck";
import { Modal } from "../../components/Modal/Modal";
import { PopupMenu } from "../../components/PopupMenu/PopupMenu";
import { useNavigate, useParams } from "react-router-dom";
import { ProgressBar } from "../../components/ProgressBar/PogressBar";
import styles from "./WorkoutVideoPage.module.css";
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

  function createValidVideoUrl(url) {
    const lastPath = url?.slice(url.lastIndexOf("/"));
    return `https://www.youtube.com/embed${lastPath}`;
  }

  const quantityExercises = (item) => {
    return Number(item.substring(item.indexOf("(") + 1, item.indexOf("(") + 3));
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo} onClick={() => navigate("/")} />
          <PopupMenu login={login} userNameColor={"black"} />
        </div>
        <div className={styles.contentWrapper}>
          <h1 className={styles.header}>{course}</h1>
          <div className={styles.categories}>
            <span className={styles.categorie}>{workout?.name}</span>
          </div>
          <iframe
            className={styles.video}
            src={createValidVideoUrl(workout?.video)}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder={0}
          ></iframe>
          <div className={styles.footerWrapper}>
            <div className={styles.exercisesWrapper}>
              <h1 className={styles.exercisesHeader}>Упражнения</h1>
              <ul className={styles.exercises}>
                {workout?.exercises ? (
                  workout?.exercises.map((item, index) => (
                    <li key={index} className={styles.exercise}>
                      {item}
                    </li>
                  ))
                ) : (
                  <div className={styles.exercise}>Нет доступных упражнений</div>
                )}
              </ul>
              {workout?.exercises ? (
                <button
                  className={styles.button}
                  onClick={() => setProgress("progress")}
                >
                  Заполнить свой прогресс
                </button>
              ) : (
                ""
              )}
            </div>
            <div className={styles.progressWrapper}>
              <div className={styles.progressHeader}>
                Мой прогресс по тренировке {workout?.name[0]}:
              </div>

              {workout?.exercises ? (
                workout?.exercises?.map((item, index) => (
                  <div key={index} className={styles.progressLine}>
                    <div className={styles.progressText}>
                      {item.substring(0, item.indexOf("("))}
                    </div>
                    <ProgressBar
                      color="#565EEF"
                      bgcolor="#EDECFF"
                      progress={
                        formValues[index] < quantityExercises(item)
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
                <div className={styles.exercise}>Нет доступных упражнений</div>
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
