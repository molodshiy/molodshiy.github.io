import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import * as S from "./styles";

function Info(props) {
  const [showSlides, setShowSlides] = useState(true);
  const { header, headerColor, textBlack, textGray, text, slides, slidesShowTime, buttons, buttonsColor } = props.data;
  const { setNextPage,  setPrevPage, isVisible } = props;

  useEffect(() => {
    if(isVisible){
      setTimeout(() => {
        setShowSlides(false);
      }, slidesShowTime);
    }
  }, [isVisible, slidesShowTime]);

  return (
      <S.Container isVisible={isVisible}>
        <Header title={header} color={headerColor} isVisible={isVisible}/>

        <S.TextContainer className={"setResizeText"}>
        {showSlides && isVisible ? <S.Slides>
            <S.SlideFirst className={"setResizeText"}>{slides[0]}</S.SlideFirst>
            <S.SlideSecond className={"setResizeText"}>{slides[1]}</S.SlideSecond>
            <S.SlideThird className={"setResizeText"}>{slides[2]}</S.SlideThird>
            </S.Slides> : null}
          { isVisible && !showSlides ?
          <>
            <S.Text>{text}</S.Text>
            <S.TextGray>{textGray}</S.TextGray>
            <S.TextBlack>{textBlack}</S.TextBlack>
            <Navigation isVisible={isVisible} isDelay={true} buttonsColor={buttonsColor} textAnimationButton={buttons[1]} setNextPage={setNextPage} setPrevPage={setPrevPage}/>
          </> : null
        }
        </S.TextContainer>
      </S.Container>
  );
}

export default Info;
