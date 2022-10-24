import React, {useEffect, useState} from "react";
import * as S from './styles';

function Navigation(props) {
  const {textAnimationButton, textButton, setNextPage, setPrevPage, buttonsColor, isDelay} = props;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
      setIsActive(true);
  }, []);

  return <S.Navigation>
            {textButton?.length ? <S.Button color={buttonsColor[0]} onClick={setPrevPage}>{textButton}</S.Button> : null}

            {textAnimationButton ? <S.ButtonRight color={buttonsColor[buttonsColor.length -1]} onClick={setNextPage} className={`${isDelay ? 'text-animButtonInfo' : 'text-animButton'} ${isActive ? 'animateButton' : ''}`}>
              {textAnimationButton.split('').map((symbol, index) => <span key={index}>{symbol}</span>)}
            </S.ButtonRight> : null}
          </S.Navigation>
}

export default Navigation;
