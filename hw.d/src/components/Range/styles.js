import styled from 'styled-components';

const Slider = styled.div`
  outline: none;
`;

const SliderDot = styled.div`
  height: 2.8vh;
  width: 2.8vh;
  outline: none;
  border-radius: 50%;
  background-color: ${props => props.color};
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.5);
  opacity: 0;
  top: -1vh;

  @keyframes fadeInSlider {
    0% {  opacity: 1; transform: scale(0);}
    100% {  opacity: 1; transform: scale(1);}
  }

  animation: fadeInSlider 0.5s linear 4s forwards;
`;

const Line = styled.div`
  height: 7px;
  width: 100%;
  max-width: 330px;
  border-radius: 0.7vh;
  opacity: 0;
  ${background => background};
  position: relative;
  background-color: rgba(10, 8, 195, 0.3);

  @keyframes fadeInLine {
    0% {  opacity: 1; transform: scaleX(0); }
    100% {  opacity: 1; transform: scaleX(1); }
  }

  animation: fadeInLine 1s linear 2s forwards;


  @media screen and (min-width: 1024px) {
    width: 100%;
    max-width: 620px;
    height: 12px;
  }
`;

export { Line, Slider, SliderDot };
