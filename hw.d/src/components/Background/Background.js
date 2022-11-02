import React, {useRef} from "react";
import * as S from './styles';
import {useResizeText} from "../../hooks/useResizeText";

function Background(props) {
  const {bgImg, bgGradient, bgColor, size, opacity} = props;
  const cards = useRef(null);
  useResizeText(cards);

  return (
    <S.BackgroundWrapper ref={cards} bgColor={bgColor}>
      <S.BackgroundGradient bgGradient={bgGradient} opacity={bgColor ? 0 : 1}/>
      <S.Background opacity={opacity} bgImg={bgImg} size={size}/>
        {props.children}
    </S.BackgroundWrapper>
  );
}

export default Background;
