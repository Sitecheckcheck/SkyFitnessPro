// import styled, { createGlobalStyle } from "styled-components";
// import logo from "./nikitaImg/logo.png";
// import avatar from "./nikitaImg//avatar.png";
// // import StratosSkyeng from "../fonts/StratosSkyeng.woff2";
// import video from "./nikitaImg/video.png";
// import play from "./nikitaImg//play.png";
// import progressOnePic from "./nikitaImg/progressOne.png";
// import progressTwoPic from "./nikitaImg/progressTwo.png";
// import progressThreePic from "./nikitaImg/progressThree.png";

// export const El = styled.div``

// export const GlobalStyle = createGlobalStyle`
// @font-face {
//   font-family: 'StratosSkyeng';
//   src:
//     local('StratosSkyeng'),
//     url(${StratosSkyeng}) format('woff2');
//   font-weight: 400;
//   font-style: normal;
// }
// `;

// export const Wrapper = styled.div`
//   width: 1440px;
//   height: 1460px;
//   padding-left: calc(50% - 580px);
//   padding-right: calc(50% - 580px);
//   background: #fafafa;
// `;

// export const LogoWrapper = styled.div`
//   height: 60px;
//   padding-top: 20px;
//   display: flex;
//   flex-direction: row;
//   gap: 20px;
// `;

// export const Logo = styled.div`
//   width: 100%;
//   height: auto;
//   background-image: url(${logo});
//   background-repeat: no-repeat;
//   padding-left: 0px;
// `;

// export const UserWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   width: 169px;
//   height: 50px;
// `;

// export const UserAvatar = styled.div`
//   width: 100%;
//   height: 100%;
//   background-image: url(${avatar});
//   background-repeat: no-repeat;
// `;

// export const UserName = styled.div`
//   /* font-family: StratosSkyeng; */
//   font-size: 24px;
//   font-weight: 400;
//   line-height: 32px;
//   letter-spacing: -0.10000000149011612px;
// `;

// export const ContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   row-gap: 30px;
// `;

// export const Header = styled.h1`
//   /* font-family: StratosSkyeng; */
//   font-size: 48px;
//   font-weight: 400;
//   line-height: 56px;
//   letter-spacing: 0em;
//   align-self: flex-start;
// `;

// export const Categories = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 10px;
// `;
// export const Categorie = styled.span`
//   /* font-family: StratosSkyeng; */
//   font-size: 32px;
//   font-weight: 400;
//   line-height: 40px;
//   letter-spacing: 0em;
//   text-align: left;
// `;

// export const Video = styled.div`
//   width: 1160px;
//   height: 639px;
//   flex-shrink: 0;
//   background-image: url(${video});
//   background-repeat: no-repeat;
//   display: flex;
//   justify-content: center;
// `;

// export const PlayVideo = styled.div`
//   width: 156px;
//   height: 156px;
//   flex-shrink: 0;
//   fill: #fafafa;
//   opacity: 0.75;
//   position: relative;
//   align-self: center;
//   background-image: url(${play});
//   background-repeat: no-repeat;
// `;

// export const FooterWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// export const ExercisesWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const ExercisesHeader = styled.h1`
//   /* font-family: StratosSkyeng; */
//   font-size: 32px;
//   font-weight: 400;
//   line-height: 40px;
//   letter-spacing: 0em;
//   text-align: left;
// `;

// export const Exercises = styled.ul`
//   list-style: inside;
// `;

// export const Exercise = styled.li`
//   /* font-family: StratosSkyeng; */
//   font-size: 24px;
//   font-weight: 400;
//   line-height: 32px;
//   letter-spacing: 0em;
//   text-align: left;
//   padding-right: 100px;
// `;

// export const Button = styled.button`
//   width: 275px;
//   height: 52px;
//   border-radius: 46px;
//   flex-shrink: 0;
//   background-color: rgba(88, 14, 162, 1);
//   color: rgba(250, 250, 250, 1);
//   margin-top: 30px;
//   /* font-family: StratosSkyeng; */
//   font-size: 18px;
//   font-weight: 400;
//   line-height: 24px;
//   letter-spacing: -0.05000000074505806px;
//   cursor: pointer;
// `;

// export const ProgressWrapper = styled.div`
//   width: 638px;
//   height: 336px;
//   border-radius: 30px;
//   background-color: rgba(242, 242, 242, 1);
//   display: flex;
//   flex-direction: column;
//   /* align-content: center; */
//   margin-top: 30px;
//   /* align-content: space-between; */
// `;

// export const ProgressHeader = styled.div`
//   /* font-family: StratosSkyeng; */
//   font-size: 32px;
//   font-weight: 400;
//   line-height: 40px;
//   letter-spacing: 0em;
//   padding-top: 30px;
//   text-align: center;
// `;

// export const ProgressLine = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   justify-content: space-around;
//   align-items: center;
// `;

// export const ProgressText = styled.div`
//   /* font-family: StratosSkyeng; */
//   font-size: 24px;
//   font-weight: 400;
//   line-height: 32px;
//   letter-spacing: 0em;
// `;

// export const ProgressOne = styled.div`
//   width: 100%;
//   height: 100%;
//   background-image: url(${progressOnePic});
//   background-repeat: no-repeat;
// `;

// export const ProgressTwo = styled.div`
//   width: 100%;
//   height: 100%;
//   background-image: url(${progressTwoPic});
//   background-repeat: no-repeat;
// `;

// export const ProgressThree = styled.div`
//   width: 100%;
//   height: 100%;
//   background-image: url(${progressThreePic});
//   background-repeat: no-repeat;
// `;
