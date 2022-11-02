import styled from 'styled-components';

const SlideBg = styled.div`
  height: 100vh;
  position: absolute;
  opacity: ${props => props.isVisible ? 1 : 0};
  z-index: ${props => props.isVisible ? 1 : -1};
  //transition: opacity 0.5s ease-in-out;
 `;

const Slide = styled.div`
  height: calc(100% - 140px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  opacity: 0;
  z-index: -1;
  // ${props => props.visible ? `
  //   @keyframes fadeInSlide {
  //     0% { opacity: 0; z-index: -1; }
  //     50% { opacity: 0; }
  //     100% { opacity: 1;  z-index: 1 }
  //   }
  //   animation: fadeInSlide 1s linear 1s forwards;
  //   ` : `
  //   @keyframes fadeOutSlide {
  //       0% { opacity: 1; z-index: 1; }
  //     50% { opacity: 0; }
  //     100% { opacity: 0;  z-index: -1 }
  //   }
  //   animation: fadeOutSlide 1s linear 1s forwards;
  //   ` };
   ${props => props.visible ? 'opacity: 1; z-index: 1; transition: opacity 1s ease-in 0.3s;' : 'opacity: 0; z-index: -1; transition: opacity 0.3s ease-in;'};
 `;

const Range = styled.div`
  width: calc(100vw - 2 * 6.25vw);
  margin: 0.8vh 6.25vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RangeLabel = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.1875;
  text-align: right;
  letter-spacing: 0.02em;
  color:  ${props => props.color};
  border: none;
  background: none;
  margin-right: 4vw;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

const RangeLabelRight = styled(RangeLabel)`
  color:  ${props => props.color};
  text-align: left;
  margin-left: 4vw;
`;


export { Range, SlideBg, Slide, RangeLabel, RangeLabelRight };
