import React, {useEffect, useRef} from "react";
import * as S from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./styles.css";

function Card(props) {
  const { index, color, darkColor, isActiveSlide, paginationLength, description, question, criteria } = props;
  const swiperRef = useRef();

  useEffect(() => {
   if(isActiveSlide){
     swiperRef.current.autoplay.start();
   } else {
     swiperRef.current.autoplay.stop();
   }
  }, [isActiveSlide]);

  return (
    <S.Card>
      <S.Pagination color={darkColor}>
        <S.PaginationIndex color={color}>{index}</S.PaginationIndex>/{paginationLength}
      </S.Pagination>

      <S.Container>
        <S.Description color={darkColor} visible={isActiveSlide}>
          <S.Text className={"resizeText setResizeText"} dangerouslySetInnerHTML={{__html: description}} />
        </S.Description>

        <S.Question color={color} className={"setResizeHeight"} visible={isActiveSlide}>
          <S.Text className={"resizeText setResizeText"} dangerouslySetInnerHTML={{__html: question}} />
        </S.Question>

        <S.WrapperSwiper className={"setResizeText"}>
            <S.Wrapper color={color} darkColor={darkColor} visible={isActiveSlide}>
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                effect={"fade"}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: false,
                  stopOnLastSlide: true,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
              >
                {criteria.map((item, index) => <SwiperSlide key={index} data-swiper-autoplay={index === 0 ? 3500 : 500}>
                  <S.Criteria key={item} color={darkColor} className={"textSwiper"}>{item}</S.Criteria>
                </SwiperSlide>)}
              </Swiper>
            </S.Wrapper>
        </S.WrapperSwiper>
      </S.Container>
    </S.Card>
  );
}

export default Card;
