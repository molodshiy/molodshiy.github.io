import React from "react";
import * as S from "./styles";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

function Chart(props) {
  const {setPrevPage, isVisible} = props;
  const {header, buttons, buttonsColor, headerColor} = props.data;

  const settings = {
    grid: 3,
    axiosAnimation: '3s',
    gridAnimation: '3s',
    VeticalLine: 3,
    axiosColor: 'black',
    gridFillImage: '',
    arrowY:  './assets/arrow_up.svg',
    arrowX: './assets/arrow_right.svg',
    circleGray: './assets/circle_gray.svg',
    circleBlack: './assets/circle_black.svg',
  }

  return (<S.WrapperGlobal isVisible={isVisible}>
          { isVisible ? <S.BgWrapper>
            <Header title={header} color={headerColor} isVisible={isVisible} />

            <S.Wrapper>
              <S.Description><b>Auswertungstext</b> — sollte nicht länger als 450 Zeichen sein. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</S.Description>

              <S.Container>
                <S.AxiosYTitle>Nachhaltigkeit</S.AxiosYTitle>

                <S.Chart>
                  <S.Dots>
                    <S.DotGray src={settings.circleGray} />
                    <S.Dot src={settings.circleBlack} />
                  </S.Dots>

                  <S.AxiosY>
                    <S.ArrowY src={settings.arrowY} />
                  </S.AxiosY>

                  <S.HorizontalGrid>
                    {Array(settings.grid).fill(<S.HorizontalLine />)}
                  </S.HorizontalGrid>

                  <S.AxiosX>
                    <S.ArrowX src={settings.arrowX} />
                  </S.AxiosX>

                  <S.VerticalGrid>
                    {Array(settings.grid).fill(<S.VerticalLine />)}
                  </S.VerticalGrid>

                  <S.AxiosXTitle>Faszination</S.AxiosXTitle>
                </S.Chart>
              </S.Container>

              <S.Text>
                <S.DescriptionDesktop><b>Auswertungstext</b> — sollte nicht länger als 450 Zeichen sein. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</S.DescriptionDesktop>

                <S.Marks>
                  <S.MarkGray>Internes Potenzial /<br/><b>Selbstbild</b></S.MarkGray>
                  <S.Mark>Externe Wahrnehmung /<br/><b>Selbstbild</b></S.Mark>
                </S.Marks>
              </S.Text>

              <S.Hint>
                <b>Hinweis:</b> Die Einordung der Vergleichsunternehmen erfolgte auf Grundlage einer Analyse des jeweiligen digitalen Markenauftritts.
              </S.Hint>
            </S.Wrapper>

            <Navigation buttonsColor={buttonsColor} textButton={buttons[0]} textAnimationButton={buttons[1]} setPrevPage={setPrevPage} />

          </S.BgWrapper> : null
          }
        </S.WrapperGlobal>);
}

export default Chart;
