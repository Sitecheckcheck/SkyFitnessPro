import styles from "./SelectWorkout.module.css"

export const SelectWorkout = () => {
const workouts = [
  {id: 'morning', title: 'Утренняя практика',description: 'Йога на каждый день / 1 день', isDone: true},
  {id: 'beauty', title: 'Утренняя практика',description: 'Йога на каждый день / 1 день', isDone: true},
  {id: 'asans', title: 'Утренняя практика',description: 'Йога на каждый день / 1 день', isDone: false},
  {id: 'stretching', title: 'Утренняя практика',description: 'Йога на каждый день / 1 день', isDone: false},
  {id: 'mobility', title: 'Утренняя практика',description: 'Йога на каждый день / 1 день', isDone: false},
  {},
];



return (
  <div className={styles.page}>
    <div className={styles.workoutForm}>
      <h1 className={styles.heading}>Выберите тренировку</h1>
      <div className={styles.workouts}>
        {
          workouts.map((workout) => {
            return (
              <div className={workout.isDone ? (styles.workoutActive) : (styles.workout)}>
                <div className={styles.workoutBox}>
                  <h2 className={workout.isDone ? (styles.workoutNameActive) : (styles.workoutName)}>{workout.title}</h2>
                  {workout.isDone && <img className={styles.workoutSelected} src="img/check.svg" alt="check" />}
                </div>
                <div className={workout.isDone ? (styles.courseNameActive) : (styles.courseName)}>{workout.description}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  </div>
)
}