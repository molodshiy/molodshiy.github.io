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
  // ${props => props.isVisible ? 'opacity: 1; z-index: 1; transition: opacity 1s ease-in 0.3s;' : 'opacity: 0; z-index: -1; transition: opacity 0.3s ease-in;'};
  //transition: opacity 0.5s ease-in-out;
`;

const Slides = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Slide = styled.div`
  opacity: 0;
  position: absolute;
  
  @keyframes fadeInSlide {
    0% { opacity: 0; }
    70% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

const SlideFirst = styled(Slide)`
  animation: fadeInSlide 1s ease-in-out 0.5s forwards;
`;

const SlideSecond = styled(Slide)`
  animation: fadeInSlide 1s ease-in-out 1.5s forwards;
`;

const SlideThird = styled(Slide)`
  animation: fadeInSlide 1s ease-in-out 2.5s forwards;
`;

const TextContainer = styled.div`
  max-width: 1600px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  margin-bottom: 85px;
  width: 78.125vw;
  

  @media screen and (min-width: 1919px) {
    width: clamp(200px, 69vw, 1330px);
    margin-bottom: 130px;
  }

  @media screen and (min-width: 1024px) {
    width: max(750px, 73.242vw);
  }

  @media screen and (min-width: 768px) {
    width: max(600px, 78.125vw);
    margin-bottom: 100px;
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
