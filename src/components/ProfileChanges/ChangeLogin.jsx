import { getAuth, updateEmail } from "firebase/auth";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { updateUser } from "../../store/slices/userSlice";
import styles from "../../styles/Form.module.css";

export const ChangeLogin = ({ onFormClose, onFormError, onFormSubmited }) => {
  const auth = getAuth();

  const dispatch = useDispatch();

  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  const newLogin = (email) => {
    if (!email) {
      setError("Укажите новую почту");
      return;
    } else if (email.length < 3) {
      setError("Введенный E-mail слишком короткий");
      return;
    }

    setIsSubmiting(true);

    updateEmail(auth.currentUser, email)
      .then(() => {
        setIsSubmiting(false);
        const user = auth.currentUser;
        localStorage.setItem("email", user.email);
        localStorage.setItem("id", user.uid);
        localStorage.setItem("token", user.accessToken);
        dispatch(
          updateUser({
            email: user.email,
          })
        );
        onFormSubmited();
      })
      .catch((error) => {
        setIsSubmiting(false);
        if (error.message.includes("requires-recent-login")) {
          onFormError();
        } else if (error.message.includes("auth/invalid-email")) {
          setError("Введен некорректный email");
        } else {
          setError(error.message);
        }
        // if (error.message.includes('auth/requires-recent-login')) {
        //   const credential = promptForCredentials();
        //   reauthenticateWithCredential(user, credential).then(() => {
        //     // User re-authenticated.
        //   }).catch((error) => {
        //     // An error ocurred
        //     // ...
        //   });
        // }
      });
  };

  useEffect(() => {
    setError(null);
  }, [newEmail]);

  return (
    <div className={styles.authForm}>
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
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
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
      <div className={styles.logoBox}>
        <img src="img/logoblack.svg" alt="logo" />
      </div>
      <div className={styles.textForm}>Новый логин:</div>
      <div className={styles.inputBox}>
        <input
          className={styles.inputForm}
          type="text"
          name="login"
          placeholder="Логин"
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />
      </div>
      <Button
        text={isSubmiting ? "Сохраняем" : "Сохранить"}
        onClick={() => newLogin(newEmail)}
      />
      {error && <div className={styles.inputError}>{error}</div>}
    </div>
  );
};
