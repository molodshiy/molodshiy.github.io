import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  opacity: ${props => props.isVisible ? 1 : 0};
  z-index: ${props => props.isVisible ? 1 : -1};
`;

const Slides = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const SlideFirst = styled.div`
  opacity: 0;
  position: absolute;
  @keyframes fadeInSlide1 {
    0% { opacity: 0; }
    70% { opacity: 1; }
    100% { opacity: 0; }
  }

  animation: fadeInSlide1 1s ease-in-out 0.5s forwards;
`;

const SlideSecond = styled.div`
  opacity: 0;
  position: absolute;
  @keyframes fadeInSlide2 {
    0% { opacity: 0; }
    70% { opacity: 1; }
    100% { opacity: 0; }
  }

  animation: fadeInSlide2 1s ease-in-out 1.5s forwards;
`;

const SlideThird = styled.div`
  opacity: 0;
  position: absolute;
  @keyframes fadeInSlide3 {
    0% { opacity: 0; }
    70% { opacity: 1; }
    100% { opacity: 0; }
  }

  animation: fadeInSlide3 1s ease-in-out 2.5s forwards;
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 20px 140px;
  box-sizing: border-box;
  
  .slick-slider {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 40px 140px;
  }
  
  @media screen and (min-width: 1919px) {
    margin: 0 160px 140px;
  }
`;

const Text = styled.p`
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 1.5vh;
  color: black;
  opacity: 0;

  @keyframes fadeInText {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  @keyframes fadeInTextColor {
    0% { color: black; }
    100% { color: #0000004D; }
  }

  animation: fadeInText 0.5s linear 0.5s forwards, fadeInTextColor 0.5s linear 1s forwards;
`;

const TextGray = styled.p`
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 1.5vh;
  color: black;
  opacity: 0;

  @keyframes fadeInText {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes fadeInTextColorGray {
    0% { color: black; }
    100% { color: #00000080; }
  }

  animation: fadeInText 0.5s linear 1.5s forwards, fadeInTextColorGray 0.5s linear 3s forwards;
`;

const TextBlack = styled.p`
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 1.5vh;
  opacity: 0;

  @keyframes fadeInText {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  animation: fadeInText 0.5s linear 3s forwards;
`;


export {Container, Slides, SlideFirst, SlideSecond, SlideThird, TextContainer, Text, TextGray, TextBlack};