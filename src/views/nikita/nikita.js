import "./nikita.css";
//
export default function Nikita() {
  return (
    <div>
      <div className="wrapper">
        <div className="logo-wrapper">
          <div className="logo" />
          <div className="user-wrapper">
            <div className="user-avatar" />
            <div className="user-name">Сергей</div>
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
              <button className="button">Заполнить свой прогресс</button>
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
    </div>
  );
}
