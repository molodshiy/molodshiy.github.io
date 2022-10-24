import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import * as S from "./styles";

function Intro(props) {
  const [showSlides, setShowSlides] = useState(true);
  const { header, headerColor, textBlack, textBlackColor, textGray, textGrayColor, textGrayColorStart, buttons, buttonsColor, isTextBlackForwardLink } = props.data;
  const { setNextPage,  setPrevPage, isVisible } = props;

  useEffect(() => {
    if(isVisible){
        setShowSlides(false);
    }
  }, [isVisible]);

  return (
      <S.Container isVisible={isVisible}>
        <Header title={header} color={headerColor} isVisible={isVisible}/>

        <S.TextContainer className={"setResizeText"}>
          { isVisible && !showSlides ?
          <>
            <S.TextGray textGrayColorStart={textGrayColorStart} textBlackColor={textBlackColor} textGrayColor={textGrayColor}>{textGray}</S.TextGray>
            {
              isTextBlackForwardLink ?
                  <S.TextBlack isTextBlackForwardLink={isTextBlackForwardLink} onClick={setNextPage} textBlackColor={textBlackColor}>{textBlack}</S.TextBlack>
                : <S.TextBlack textBlackColor={textBlackColor}>{textBlack}</S.TextBlack>
            }

            <Navigation isDelay={true} buttonsColor={buttonsColor} textButton={buttons[0]} textAnimationButton={buttons[1]} setNextPage={setNextPage} setPrevPage={setPrevPage}/>
          </> : null
        }
        </S.TextContainer>
      </S.Container>
  );
}

export default Intro;
