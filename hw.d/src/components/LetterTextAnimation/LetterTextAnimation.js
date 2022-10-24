import React, {useEffect, useState} from "react";
import * as S from "./styles";
import "./textFade.scss";

function LetterTextAnimation(props) {
  const { textAnimation, color, isVisible } = props;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if(isVisible){
      setIsActive(true);
    }
  }, [isVisible]);

  return (
      <S.ButtonText textColor={color} className={`text-anim ${isActive ? 'animate' : ''}`}>
        {textAnimation.split('').map((symbol, index) => <span key={index}>{symbol}</span>)}
      </S.ButtonText>
  );
}

export default LetterTextAnimation;
