import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 18vh;
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-align: center;
  color:  ${props => props.color};;
  margin-bottom: 2vh;
  opacity: 0;

  ${props => props.visible ? `
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    animation: fadeIn 0.5s linear 0.5s forwards;
    ` : '' };

  //@keyframes changeColor {
  //  0% { color: #0E15BA; }
  //  100% { color: #0a08c34d; }
  //}

  //animation: fadeIn 2s linear, changeColor 2s linear 2s;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 26vh;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-align: center;
  color:  ${props => props.color};
  opacity: 0;

  ${props => props.visible ? `
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    animation: fadeIn 2s linear 1s forwards;
    ` : '' };
`;

const Container = styled.div`
  width: clamp(200px, 69vw, 1330px);
  //margin-top: 2.23vh;

  @media screen and (max-width: 1919px) {
    width: max(750px, 73.242vw);
  }

  @media screen and (max-width: 1024px) {
    width: max(600px, 78.125vw);
  }

  @media screen and (max-width: 768px) {
    //margin: 2.817vh 6.25vw auto 15.625vw;
    width: 78.125vw;
  }
`;

const Pagination = styled.div`
  font-size: 2.1vh;
  color:  ${props => props.color};
`;

const PaginationIndex = styled.span`
  font-size: 4.2vh;
  color: ${props => props.color};
`;

const Text = styled.div`
  text-align: center;
  font-size: initial;
  
  @media screen and (max-width: 1920px) {
    line-height: 1.2;
    letter-spacing: 0.02em;
  }

  @media screen and (max-width: 1024px) {
    line-height: 1.2;
    letter-spacing: 0.02em;
  }

  @media screen and (max-width: 768px) {
    line-height: 1.16;
    letter-spacing: 0.02em;
  }
`;

const WrapperSwiper = styled.div``;

const Wrapper = styled(Text)`
  opacity: 0;
  font-size: inherit;

  ${props => props.visible ? `
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    animation: fadeIn 1s linear 2s forwards;
    ` : '' };

  .swiper-pagination {
    margin: 1vh auto 2vh;
    position: relative;
  }

  .textSwiper {
    font-size: inherit;
  }

  .swiper-slide {
    opacity: 0 !important;
  }

  .swiper-slide-visible {
    opacity: 1 !important;
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    padding: 1.3vh !important;
    cursor: pointer;
    opacity: 1;
    background: none;
    outline: none;
  }

  .swiper-pagination-bullet::after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    outline: none;
    background-color: ${props => props.darkColor};
  }

  @media screen and (min-width: 768px) {
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
    }
    
    .swiper-pagination-bullet::after {
      width: 8px;
      height: 8px;
    }
  }

  .swiper-pagination-bullet-active::after {
    background-color: ${props => props.color};
  }
`;


const Criteria = styled(Text)`
  font-size: inherit;
  color:  ${props => props.color};
`;

export { Card, Question, Container, Text, Description, Criteria, Wrapper, WrapperSwiper, Pagination, PaginationIndex };
