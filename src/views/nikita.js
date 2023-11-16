import * as S from "./nikita.style";

export default function Nikita() {
  const br = `\n`;
  return (
    <div>
      <S.Wrapper>
        <S.LogoWrapper>
          <S.Logo />
          <S.UserWrapper>
            <S.UserAvatar />
            <S.UserName>Сергей</S.UserName>
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
          </S.UserWrapper>
        </S.LogoWrapper>
        <S.ContentWrapper>
          <S.Header>Йога</S.Header>
          <S.Categories>
            <S.Categorie>Красота и здоровье /</S.Categorie>
            <S.Categorie>Йога на каждый день /</S.Categorie>
            <S.Categorie>2 день</S.Categorie>
          </S.Categories>
          <S.Video>
            <S.PlayVideo></S.PlayVideo>
          </S.Video>
          <S.FooterWrapper>
            <S.ExercisesWrapper>
              <S.ExercisesHeader>Упражнения</S.ExercisesHeader>
              <S.Exercises>
                <S.Exercise>Наклон вперед (10 повторений)</S.Exercise>
                <S.Exercise>Наклон назад (10 повторений)</S.Exercise>
                <S.Exercise style={{ whiteSpace: "pre-line" }}>
                  {"Поднятие ног, согнутых в коленях<br/>(5 повторений)"
                    .split("<br/>")
                    .join("\n")}
                </S.Exercise>
              </S.Exercises>
              <S.Button>Заполнить свой прогресс</S.Button>
            </S.ExercisesWrapper>
            <S.ProgressWrapper>
              <S.ProgressHeader>Мой прогресс по тренировке 2:</S.ProgressHeader>
              <br />
              <br />
              <S.ProgressLine>
                <S.ProgressText>Наклоны вперед</S.ProgressText>
                <S.ProgressOne></S.ProgressOne>
              </S.ProgressLine>
              <S.ProgressLine>
                <S.ProgressText>Наклоны назад</S.ProgressText>
                <S.ProgressTwo></S.ProgressTwo>
              </S.ProgressLine>
              <S.ProgressLine>
                <S.ProgressText style={{ whiteSpace: "pre-line" }}>
                  {"Поднятие ног,<br/>согнутых в коленях"
                    .split("<br/>")
                    .join("\n")}
                </S.ProgressText>
                <S.ProgressThree></S.ProgressThree>
              </S.ProgressLine>
            </S.ProgressWrapper>
          </S.FooterWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </div>
  );
}
