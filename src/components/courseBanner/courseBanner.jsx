import styles from "./CourseBanner.module.css";

function CourseBanner({ name }) {
  const handleImg = (name) => {
    switch (name) {
      case "Стретчинг":
        return "/img/stratching_banner.png";
      case "Бодифлекс":
        return "/img/bodyflex_banner.png";
      case "Йога":
        return "/img/yoga_banner.png";
      case "Танцевальный фитнес ":
        return "/img/dance_banner.png";
      case "Степ-аэробика":
        return "/img/stap_banner.png";
      default:
        return "/img/stap_banner.png";
    }
  };
  return (
    <div className={styles.banner}>
      <div className={styles.text}>{name}</div>
      <img className={styles.img} src={handleImg(name)} alt="fitness" />
    </div>
  );
}

export default CourseBanner;
