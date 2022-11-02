import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.bgColor};
  position: relative;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background 2s ease-in-out;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => "url(" + props.bgImg + ")"};
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${props => props.opacity};
  background-size: ${props => props.size}vh;
  transition: background 2s ease-in-out, opacity 2s ease-in-out;
  position: absolute;
`;

const BackgroundGradient = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.bgGradient};
  opacity: ${props => props.opacity};
  transition: opacity 2s ease-in-out;
  position: absolute;
`;

export { BackgroundWrapper, Background, BackgroundGradient };
