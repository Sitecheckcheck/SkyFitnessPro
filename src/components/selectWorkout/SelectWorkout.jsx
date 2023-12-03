import { useGetAllCoursesQuery } from "../../store/coursesApi";
import { useGetAllWorkoutsQuery } from "../../store/workoutsApi";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styles from "./SelectWorkout.module.css";
import { useNavigate } from "react-router-dom";

export const SelectWorkout = ({ onFormClose }) => {
  const { course } = useSelector((state) => state.course);

  const { data } = useGetAllCoursesQuery();
  const allCourses = [];
  if (data) {
    const keys = Object.keys(data);
    keys.forEach((key) => allCourses.push(data[key]));
  }

  const workoutsAll = useGetAllWorkoutsQuery().data;
  const allWorkouts = [];
  if (workoutsAll) {
    const keys = Object.keys(workoutsAll);
    keys.forEach((key) => allWorkouts.push(workoutsAll[key]));
  }

  const userCourse = allCourses.filter((el) => el.name === course);
  const workoutsId = userCourse[0]?.workout;

  const workoutsUnSort = [];
  if (allWorkouts && workoutsId) {
    for (let i = 0; i < allWorkouts.length; i++) {
      for (let j = 0; j < workoutsId.length; j++) {
        if (allWorkouts[i]._id === workoutsId[j]) {
          workoutsUnSort.push(allWorkouts[i]);
        }
      }
    }
  }

  const workouts = workoutsUnSort?.sort(function (a, b) {
    return parseFloat(a.name) - parseFloat(b.name);
  });

  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.workoutForm}>
        <svg
          className={styles.closeButton}
          onClick={onFormClose}
          width="20px"
          height="20px"
          viewBox="0 0 25 25"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          // xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
          fill="#000000"
        >
          <g
            id="SVGRepo_bgCarrier"
            // strokeWidth="0"
          ></g>
          <g
            id="SVGRepo_tracerCarrier"
            // strokeLinecap="round"
            // strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>cross</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              // strokeWidth="1"
              fill="none"
              // fillRule="evenodd"
              // sketchtype="MSPage"
            >
              <g
                id="Icon-Set-Filled"
                // sketchtype="MSLayerGroup"
                transform="translate(-469.000000, -1041.000000)"
                fill="#b1aaaa"
              >
                <path
                  d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"
                  id="cross"
                  // sketchtype="MSShapeGroup"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <h1 className={styles.heading}>Выберите тренировку</h1>
        <div className={styles.workouts}>
          {workouts?.map((workout) => {
            return (
              <div
                className={
                  workout.isDone ? styles.workoutActive : styles.workout
                }
                onClick={() => navigate(`/workout-video/${workout._id}`)}
                key={workout._id}
              >
                <div className={styles.workoutBox}>
                  <h2
                    className={
                      workout.isDone
                        ? styles.workoutNameActive
                        : styles.workoutName
                    }
                  >
                    {workout.name}
                  </h2>
                  {workout.isDone && (
                    <img
                      className={styles.workoutSelected}
                      src="img/check.svg"
                      alt="check"
                    />
                  )}
                </div>
                <div
                  className={
                    workout.isDone ? styles.courseNameActive : styles.courseName
                  }
                >
                  {workout.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
