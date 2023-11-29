export const ProgressBar = ({ color, bgcolor, progress }) => {
  let progressRightBorderRadius;
  let progressAlign;
  let progressPaddingRight;

  if (progress === "100") {
    progressAlign = "center";
    progressRightBorderRadius = "22px";
    progressPaddingRight = "0px";
  } else if (progress > 0 && progress < 100) {
    progressAlign = "right";
    progressRightBorderRadius = "22px";
    progressPaddingRight = "15px";
  } else {
    progressAlign = "center";
    progressRightBorderRadius = "22px";
    progressPaddingRight = "0px";
  }

  const Parentdiv = {
    height: "36px",
    width: "278px",
    backgroundColor: bgcolor,
    borderRadius: "22px",
    border: `2px solid ${color}`,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: color,
    borderTopLeftRadius: "22px",
    borderBottomLeftRadius: "22px",
    borderTopRightRadius: progressRightBorderRadius,
    borderBottomRightRadius: progressRightBorderRadius,
    alignItems: "center",
    textAlign: progressAlign,
  };

  const progresstext = {
    color: "#FFF",
    fontVariantNumeric: "lining-nums proportional-nums",
    fontFamily: "StratosSkyeng",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "32px",
    paddingRight: progressPaddingRight,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};
