import React, {useEffect, useState} from "react";
import Card from '../../components/Card/Card';
import * as S from './styles';
import RangeLine from "../../components/Range/Range";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";

function Slide(props) {
  const [activeSlide, setActiveSlide] = useState(-1);
  const [isActive, setIsActive] = useState(false);
  const { setNextPage, setPrevPage, setBgImgSize, data, isVisible } = props;
  const {header, headerColor, color, darkColor, buttons, buttonsColor, slides, textRangeAnimationLeft, textRangeAnimationRight} = props.data;

  useEffect(() => {
    if(!isVisible) return;

    if(activeSlide === -1) {
      setActiveSlide(0);
      setIsActive(true);
    } else {
      setBgImgSize(slides[activeSlide].circleSize);
    }
  }, [isVisible, activeSlide]);

  const handleBackClick = () => {
    if(activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
      setBgImgSize(slides[activeSlide -1].circleSize);
    }

    if(activeSlide === 0) {
      setPrevPage();
    }
  }

  const handleForwardClick = () => {
    if(activeSlide < data.slides.length - 1) {
      setBgImgSize(slides[activeSlide + 1].circleSize);
      setActiveSlide(activeSlide + 1);
    }

    if(activeSlide === data.slides.length - 1) {
      setNextPage();
    }
  }

  return (
    <S.SlideBg isVisible={isVisible}>
      <Header title={header} color={headerColor} isVisible={isVisible} />

      {slides.map(({ type, description, question, criteria }, index) => (
          <S.Slide key={index} visible={activeSlide === index}>
              <Card
                index={index + 1}
                color={color}
                darkColor={darkColor}
                isActiveSlide={activeSlide === index}
                paginationLength={data.slides.length}
                key={index}
                description={description}
                question={question}
                criteria={criteria}
              />

            <S.Range>
              <S.RangeLabel color={color} className={`text-animRangeLabelLeft ${isActive ? 'animateRangeLabelLeft' : ''}`}>
                {textRangeAnimationLeft.split('').map((symbol, index) => <span key={index}>{symbol}</span>)}
              </S.RangeLabel>
              <RangeLine color={color} isVisible={isVisible}/>
              <S.RangeLabelRight color={color} className={`text-animRangeLabel ${isActive ? 'animateRangeLabel' : ''}`}>
                {textRangeAnimationRight.split('').map((symbol, index) => <span key={index}>{symbol}</span>)}
              </S.RangeLabelRight>
            </S.Range>

            <Navigation buttonsColor={buttonsColor} textButton={buttons[0]} textAnimationButton={buttons[1]} setNextPage={handleForwardClick} setPrevPage={handleBackClick} />
          </S.Slide>
      ))}
    </S.SlideBg>
  );
}

export default Slide;
