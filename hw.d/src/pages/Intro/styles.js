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

const Slide1 = styled.div`
  opacity: 0;
  position: absolute;
  @keyframes fadeInSlide1 {
    0% { opacity: 0; }
    70% { opacity: 1; }
    100% { opacity: 0; }
  }

  animation: fadeInSlide1 1s ease-in-out 0.5s forwards;
`;

const Slide2 = styled.div`
  opacity: 0;
  position: absolute;
  @keyframes fadeInSlide2 {
    0% { opacity: 0; }
    70% { opacity: 1; }
    100% { opacity: 0; }
  }

  animation: fadeInSlide2 1s ease-in-out 1.5s forwards;
`;

const Slide3 = styled.div`
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 20px 140px;
  width: clamp(200px, 69vw, 1330px);

  @media screen and (max-width: 1919px) {
    margin: 0 160px 140px;
    width: max(750px, 73.242vw);
  }

  @media screen and (max-width: 1024px) {
    margin: 0 40px 140px;
    width: max(600px, 78.125vw);
  }

  @media screen and (max-width: 768px) {
    width: 78.125vw;
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
  color: ${props => props.textGrayColorStart};
  opacity: 0;

  @keyframes fadeInText {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes fadeInPreSlidesTextColorGray {
    0% { color: ${props => props.textGrayColorStart}; }
    100% { color: ${props => props.textGrayColor}; }
  }

  animation: fadeInText 0.5s linear 1.5s forwards, fadeInPreSlidesTextColorGray 0.5s linear 3s forwards;
`;

const TextBlack = styled.p`
  position: relative;
  //width: 100%;
  text-align: center;
  margin-bottom: 1.5vh;
  letter-spacing: 0.02em;
  opacity: 0;
  color: ${props => props.textBlackColor};
  
  ${props => props.isTextBlackForwardLink ? `
  &:hover {
    cursor: pointer;

    &::after {
      width: 91%;
    }
  }

  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 18%;
    position: absolute;
    background-color: ${props.textBlackColor};
    bottom: 3px;
    left: 0;
    transition: width 0.5s;
    
    @media screen and (min-width: 768px) {
      height: 2px;
    }
    
    @media screen and (min-width: 1919px) {
      height: 4px;
    }
  }` : ''};

  @keyframes fadeInText {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  animation: fadeInText 0.5s linear 3s forwards;
`;


export {Container, Slides, Slide1, Slide2, Slide3, TextContainer, Text, TextGray, TextBlack};
