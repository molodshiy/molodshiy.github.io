import styled from 'styled-components';

const bgUrlCircleBlack = "./assets/circle_black.svg";
const circleGray = "./assets/circle_gray.svg";

const Chart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 130px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    min-height: 260px;
    margin-bottom: 30px;
  }
  
  @media screen and (min-width: 1920px) {
    min-height: 530px;
  }
`;

const Dots = styled.div``;


const DotGray = styled.img`
  width: 16px;
  opacity: 0;

  @keyframes fadeInXTitle {
    0% { opacity: 0; }
    100% { opacity: 100%; }
  }

  animation: fadeInXTitle 0.5s linear 1.5s forwards;

  @media screen and (min-width: 768px) {
    width: 24px;
  }
`;

const Dot = styled.img`
  width: 16px;
  position: absolute;
  top: 30%;
  left: 30%;
  opacity: 0;

  @keyframes fadeInXTitle {
    0% { opacity: 0; }
    100% { opacity: 100%; }
  }

  animation: fadeInXTitle 0.5s linear 1.7s forwards;
  
  @media screen and (min-width: 768px) {
    width: 24px;
  }
`;

const WrapperGlobal = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  position: absolute;
  opacity: ${props => props.isVisible ? 1 : 0};
  z-index: ${props => props.isVisible ? 1 : -1};
`;

const BgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto; //not correct
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px 0 36px;
  box-sizing: border-box;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 0 100px 0 130px;
  }
  
  @media screen and (min-width: 1920px) {
    padding: 0;
    max-width: 1560px;
    flex-direction: row;
    height: calc(50vh + 40px);
    margin: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 1920px) {
    max-width: 1250px;
    display: flex;
    flex-direction: row;
  }
`;

const Description = styled.div`
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 0.02em;
  visibility: hidden;
  opacity: 0;

  @keyframes fadeInDescription {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes fadeInDescriptionDisplay {
    0% { visibility: visible; }
    100% { visibility: visible; }
  }

  animation: fadeInDescriptionDisplay 0s linear 1s forwards, fadeInDescription 0.5s linear 1s forwards;

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.25;
  }
  
  @media screen and (min-width: 1920px) {
    display: none;
    font-size: 32px;
    font-weight: 500;
  }
`;

const DescriptionDesktop = styled(Description)`
  display: none;

  @media screen and (min-width: 1920px) {
    display: block;
    visibility: collapse;
    min-height: 310px;
    
    @keyframes fadeInDescriptionDesktop {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes visibilityDescriptionDesktop {
      0% { visibility: collapse; }
      100% { visibility: visible; }
    }

    animation: visibilityDescriptionDesktop 0s linear 5s forwards, fadeInDescriptionDesktop 1s linear 1s forwards;
  }
`;


const Marks = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 16px;
  
  @keyframes fadeInXTitle {
    0% { opacity: 0; }
    100% { opacity: 100%; }
  }

  animation: fadeInXTitle 0.5s linear 1s forwards;

  @media screen and (min-width: 1920px) {
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 80px;
  }
`;

const Mark = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: black;
  position: relative;
  margin: 0 20px;
  
  &::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    position: absolute;
    top: 0;
    left: -13px;
    background-size: 6px;
    background-image: url(${bgUrlCircleBlack});
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    &::before {
      width: 12px;
      height: 12px;
      left: -20px;
      background-size: 12px;
    }
  }
  
  @media screen and (min-width: 1024px) {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: black;
    position: relative;
    margin-top: 16px;
  }
`;

const MarkGray = styled(Mark)`
  color: #00000080;
  &::before {
    background-image: url(${circleGray});
  }
`;

const Text = styled.div`
  @media screen and (min-width: 1920px) {
    padding-top: 12px;
    min-width: 250px;
    width: 250px;
    margin-left: 70px;
    display: flex;
    flex-direction: column;
    justify-content: start;

    @keyframes fadeInChartText {
      0% { width: 250px; }
      100% { width: 150%; }
    }

    animation: fadeInChartText 1s linear 3s forwards;
  }
`;

const AxiosY = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0;
  width: 1px;
  background-color: black;

  @keyframes fadeInY {
    0% { height: 0; }
    100% { height: 100%; }
  }

  animation: fadeInY 0.5s linear 0.5s forwards;

  @media screen and (min-width: 768px) {
    width: 2px;
  }
  
  @media screen and (min-width: 1920px) {
    width: 3px;
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: calc(100% / 3);
  border-top: 1px dotted #00000080;

  @media screen and (min-width: 1920px) {
    border-top: 2px dotted #00000080;
  }
`;

const VerticalLine = styled.div`
  width: calc(100% / 3);
  height: 100%;
  border-right: 1px dotted #00000080;

  @media screen and (min-width: 1920px) {
    border-top: 2px dotted #00000080;
  }
`;

const AxiosX = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 0;
  background-color: black;

  @keyframes fadeInX {
    0% { width: 0; }
    100% { width: 100%; }
  }

  animation: fadeInX 0.5s linear 0.5s forwards;

  @media screen and (min-width: 768px) {
    height: 2px;
  }
  
  @media screen and (min-width: 1920px) {
    height: 3px;
  }
`;

const AxiosYTitle = styled.div`
  position: absolute;
  top: 40%;
  left: -50px;
  transform: rotate(-90deg);
  font-size: 12px;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: 0.05em;
  
  @media screen and (min-width: 768px) {
    font-size: 20px;
    left: -80px;
  }
  
  @media screen and (min-width: 1920px) {
    transform: none;
    position: initial;
    width: 220px;
    opacity: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    text-align: right;
    letter-spacing: 0.05em;
    align-self: center;
    margin: 0 20px;

    animation: fadeInXTitle 0.5s linear 0.5s forwards;
  }
`;

const AxiosXTitle = styled.div`
  padding-top: 6px;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-align: center;
  position: absolute;
  bottom: -20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    bottom: -30px;
  }

  @media screen and (min-width: 1920px) {
    width: 100%;
    padding: 0 20px;
    text-align: center;
    opacity: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 0.05em;
    bottom: -50px;

    @keyframes fadeInXTitle {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 100%;
      }
    }

    animation: fadeInXTitle 0.5s linear 0.5s forwards;
  }
`;

const VerticalGrid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  opacity: 0;

  @keyframes fadeInXGrid {
    0% { opacity: 0; }
    100% { opacity: 100%; }
  }

  animation: fadeInXGrid 0.5s linear 1s forwards;
`;

const HorizontalGrid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  opacity: 0;

  @keyframes fadeInXGrid {
    0% { opacity: 0; }
    100% { opacity: 100%; }
  }

  animation: fadeInXGrid 0.5s linear 1s forwards;
`;


const ArrowY = styled.img`
  width: 5px;
  position: absolute;
  left: -2px;
  top: -3px;

  @media screen and (min-width: 768px) {
    width: 9px;
    left: -3px;
    top: -6px;
  }
  
  @media screen and (min-width: 1920px) {
    width: 15px;
    left: -6px;
    top: -13px;
  }
`;

const ArrowX = styled.img`
  width: 4px;
  position: absolute;
  top: -2px;
  right: -3px;

  @media screen and (min-width: 768px) {
    top: -3px;
    width: 7px;
    right: -7px;
  }
 
  @media screen and (min-width: 1920px) {
    width: 13px;
    top: -6px;
    right: -13px;
  }
`;

const Hint = styled.div`
  padding-top: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    font-size: 14px;
  }
  
  @media screen and (min-width: 1024px) {
    display: none;
    left: -6px;
    top: -13px;
  }
`;

export { Chart, BgWrapper, Wrapper, Dots, DotGray, Dot, Text, Marks, Mark, MarkGray, WrapperGlobal, Container, Description, DescriptionDesktop, AxiosY, AxiosX, ArrowY, ArrowX, HorizontalLine, VerticalLine, VerticalGrid, HorizontalGrid, AxiosYTitle, AxiosXTitle, Hint };
