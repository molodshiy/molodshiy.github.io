import React, {useEffect, useState} from 'react';
import Slide from '../Slide/Slide';
import data from '../../mocks/cards.json';
import Start from "../Start/Start";
import Chart from "../Chart/Chart";
import Info from "../Info/Info";
import Background from "../../components/Background/Background";
import Intro from "../Intro/Intro";

function Main() {
  const defaultStyles = data.cards[0].beforeStartBgStyles;

  const [activePage, setActivePage] = useState(0);
  const [bgImgSize, setBgImgSize] = useState(defaultStyles.circleSize);
  const [bgColor, setBgColor] = useState(defaultStyles.bgColor);
  const [opacity, setOpacity] = useState(defaultStyles.opacity);
  const [bgImg, setBgImg] = useState(defaultStyles.bgImg);

  useEffect(() => {
    setBgImg(data.cards[activePage].bgImg);

    if(activePage === 0) {
      //when click back reset styles
      setBgImgSize(defaultStyles.circleSize);
      setBgColor(defaultStyles.bgColor);
      setOpacity(defaultStyles.opacity);

      setTimeout(() => {
        setBgImgSize(data.cards[activePage].circleSize);
        setBgColor(data.cards[activePage].bgColor);
        setOpacity(1);
      }, 3000);
    } else if (data.cards[activePage].type === "slides") {
      setBgColor(data.cards[activePage].bgColor);
    } else {
      setBgImgSize(data.cards[activePage].circleSize);
      setBgColor(data.cards[activePage].bgColor);
    }

  }, [activePage]);

  const setNextPage = () => {
    setActivePage(activePage => activePage + 1);
  }

  const setPrevPage = () => {
    setActivePage(activePage => activePage - 1);
  }

  return (
    <Background size={bgImgSize} opacity={opacity} bgColor={bgColor} bgImg={bgImg} bgGradient={defaultStyles.bgGradient}>
      <Start isVisible={activePage === 0} setNextPage={setNextPage} setPrevPage={setPrevPage} data={data.cards[0]} />
      <Info isVisible={activePage === 1} setNextPage={setNextPage} setPrevPage={setPrevPage} data={data.cards[1]} />
      <Intro isVisible={activePage === 2} setNextPage={setNextPage} setPrevPage={setPrevPage} data={data.cards[2]} />
      <Slide isVisible={activePage === 3} setBgImgSize={setBgImgSize} setNextPage={setNextPage} setPrevPage={setPrevPage} data={data.cards[3]} />
      <Intro isVisible={activePage === 4} setNextPage={setNextPage} setPrevPage={setPrevPage} data={data.cards[4]} />
      <Slide isVisible={activePage === 5} setBgImgSize={setBgImgSize} setNextPage={setNextPage} setPrevPage={setPrevPage} data={data.cards[5]} />
      <Intro isVisible={activePage === 6} setNextPage={setNextPage} setPrevPage={setPrevPage} data={data.cards[6]} />
      <Chart isVisible={activePage === 7} setNextPage={setNextPage} setPrevPage={setPrevPage} data={data.cards[7]} />
    </Background>
  )
}

export default Main;
