import { Button } from "./Button"
import styles from "./WorkotVideoPage.module.css"

export const WorkoutVideoPage = () => {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.logoBox}>
          <img src="img/logoblack.svg" alt="logo" />
        </div>
      <div name={course?.name}>
        <img src="img/skill card 17.svg" alt="banner" />
        </div> 
      <div>
        <div text={"Подойдет для вас, если:"} />
        <ul className="reasons">
            <li className="reason">Давно хотели попробовать йогу, но не решались начать. /</li>
            <li className="reason">Хотите укрепить позвоночник, избавиться от болей в спине и суставах./</li>
            <li className="reason">Ищете активность, полезную для тела и души.</li>
          </ul>
      </div>
      <div>
        <div text={"Направления:"} />
        <div className={`${styles.directions} small-text`}>
        <ul>
              <li>Йога для новичков</li>
              <li>Классическая йога</li>
              <li>Йогатерапия</li>
            </ul>
          </div>
          <div className="small-text">
            <ul>
              <li>Кундалини-йога</li>
              <li>Хатха-йога</li>
              <li>Аштанга-йога</li>
            </ul>
        </div>
      </div>
      <p className={`${styles.text} small-text`}>
        Благодаря комплексному воздействию упражнений происходит проработка всех
        групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме
        того, упражнения дарят отличное настроение, заряжают бодростью и
        помогают противостоять стрессам.
      </p>
      <div className={styles.left}>
        <p className={styles.text}>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </p>
        <Button color={"purple"} text={"Записаться на тренировку"} />
      </div>
      <div>
        <img src="img/Group 48096487.svg" />
      </div>
    </div>
  )
}

