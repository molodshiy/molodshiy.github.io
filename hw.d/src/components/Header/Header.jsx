import React from "react";
import * as S from "./styles";
import {ReactComponent as Icon} from '../../assets/logo.svg';
import LetterTextAnimation from "../LetterTextAnimation/LetterTextAnimation";

function Header(props) {
  const { title, color, isVisible } = props;

  return (
      <S.Header>

        <S.Logo>
          <Icon fill={color} width={'inherit'} height={'auto'} />
        </S.Logo>

        { title ? <LetterTextAnimation color={color} textAnimation={title} isVisible={isVisible}/> : null}

      </S.Header>
  );
}

export default Header;
