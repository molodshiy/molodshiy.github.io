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
  
`;

const BannerWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 140px;
`;

const Banner = styled.span`
  text-align: center;
  padding: 8px;
  box-sizing: border-box;
  position: relative;
`;

const BannerWord = styled.span`
  position: relative;
  opacity: 0;
  width: 230px;
  transition: width 1s ease-in-out 2s;
  
  @keyframes fadeInBannerWord {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  animation: fadeInBannerWord 1s ease-in-out ${props => 1 + props.index * 0.5}s forwards;
`;

const BannerAbbreviation = styled.span`
  display: inline-block;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: black;
`;

const BannerLetter = styled.span`
  display: inline-block;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: #0000004D;
  opacity: 1;
  width: auto;
  ${props => props.width ? 'width: ' + props.width + 'px' : ''};
  transition: width 1s ease-in-out;
  
  @keyframes fadeInBannerLetter {
    0% {   opacity: 1; }
    100% {   opacity: 0; }
  }

  animation: fadeInBannerLetter 1s ease-in-out 3s forwards;
`;

const BannerPolicy = styled.span`
  width: max-content;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  opacity: 0;
  position: absolute;
  top: 11px;
  margin-left: 2px;

 @keyframes fadeInBannerPolicy {
    0% {   opacity: 0; }
    100% {   opacity: 1; }
  }

  animation: fadeInBannerPolicy 1s ease-in-out 4s forwards;
  
  @media screen and (min-width: 1919px) {
    font-size: 24px;
    top: 21px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    top: 15px;
  }
`;

const Job = styled.div`
  width: 100%;
  max-width: 800px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-align: center;
  color: black;
  padding: 8px;
  box-sizing: border-box;
  opacity: 0;

  @keyframes fadeInJob {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  animation: fadeInJob 1s linear 3s forwards;

`;

export {Container, BannerWrapper, Banner, BannerWord, BannerAbbreviation, BannerLetter, BannerPolicy, Job};
