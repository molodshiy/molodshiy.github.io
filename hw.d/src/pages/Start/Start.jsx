import React, {useEffect, useState} from "react";
import * as S from "./styles";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

function Start(props) {
  const { header, headerColor, banner, bannerPolicy, job, buttons, buttonsColor } = props.data;
  const { setNextPage, isVisible } = props;
  const [width, setWidth] = useState([]);

  useEffect(() => {
    const anim = document.getElementsByClassName('anim');

    setTimeout(() => {
      const animWidth = [];
      for (let element of anim) {
        animWidth.push(element.clientWidth);
      }
      setWidth(animWidth);
    }, 2000);

     setTimeout(() => {
       for (let element of anim) {
         element.style.width = 0;
       }
    }, 3500);


  }, []);

  return (
      <S.Container isVisible={isVisible}>
        <Header title={header} color={headerColor} isVisible={isVisible}/>

        <S.BannerWrapper>
          <S.Banner className={"setResizeText"}>
            {banner.split(' ').map((element, index) =>
              <S.BannerWord key={index + element} index={index}>
                <S.BannerAbbreviation>{element[0]}</S.BannerAbbreviation>
                <S.BannerLetter width={width[index]} className={'anim'}>{element.slice(1)}&nbsp;</S.BannerLetter>
              </S.BannerWord>)}
            <S.BannerPolicy>{bannerPolicy}</S.BannerPolicy>
          </S.Banner>

          <S.Job className={"setResizeText"}>
            {job}
          </S.Job>

          <Navigation isVisible={isVisible} buttonsColor={buttonsColor} textAnimationButton={buttons[0]} setNextPage={setNextPage} />
        </S.BannerWrapper>
      </S.Container>
  );
}

export default Start;
