import { useEffect } from "react";
import { Button } from "../button/Button";
import styles from "../../styles/Form.module.css";
import { useGetAllWorkoutsQuery } from "../../store/workoutsApi";
import { useParams } from "react-router-dom";

export const Progress = ({
  onFormClose,
  onFormSubmited,
  formValues,
  setFormValues,
  validateValues,
  setError,
  error,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index] = e.target.value;
    setFormValues(values);
  };

  const params = useParams();
  const pageId = params.id;

  const workoutsAll = useGetAllWorkoutsQuery().data;
  const allWorkouts = [];
  if (workoutsAll) {
    const keys = Object.keys(workoutsAll);
    keys.forEach((key) => allWorkouts.push(workoutsAll[key]));
  }

  const workout = allWorkouts?.filter((el) => el._id === pageId)[0];

  useEffect(() => {
    console.log("errors", error);
    validateValues(formValues);
    // if (!error) {
    //   setError("");
    // }
  }, [formValues, error, validateValues]);

  return (
    <div className={styles.page}>
      <div className={styles.progressForm}>
        <svg
          className={styles.closeButton}
          onClick={onFormClose}
          width="20px"
          height="20px"
          viewBox="0 0 25 25"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokwidth={"0"}></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>cross</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              sketchtype="MSPage"
            >
              <g
                id="Icon-Set-Filled"
                sketchtype="MSLayerGroup"
                transform="translate(-469.000000, -1041.000000)"
                fill="#b1aaaa"
              >
                <path
                  d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"
                  id="cross"
                  sketchtype="MSShapeGroup"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <form onSubmit={handleSubmit}>
          <div className={styles.headerForm}>Мой прогресс</div>
          {workout?.exercises.map((item, index) => (
            <div key={index}>
              <div className={styles.textForm}>
                Сколько раз вы сделали:{" "}
                {item.substring(0, item.indexOf("(") - 1).toLowerCase()}?
              </div>
              <div className={styles.inputBox}>
                <input
                  key={index + 1}
                  className={styles.inputForm}
                  type="text"
                  name="quantity"
                  placeholder="Введите значение"
                  onInput={(e) => {
                    handleChange(e, index);
                    validateValues(formValues);
                  }}
                ></input>
              </div>
            </div>
          ))}
          <div className={styles.buttonForm}>
            {error ? (
              <>
                <div style={{ color: "red" }}>{error}</div>
                <Button
                  text="Отправить"
                  disabled={true}
                  style={{ color: "grey" }}
                  onClick={() => {
                    console.log("error");
                  }}
                />
              </>
            ) : (
              <Button
                text="Отправить"
                onClick={() => {
                  console.log("send");
                  onFormSubmited();
                }}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
