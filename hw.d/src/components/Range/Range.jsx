import React, { useState } from 'react';
import {Range} from 'react-range';
import * as S from './styles';

const settings = {
  min: 0,
  max: 9
};

function RangeLine(props) {
  const [values, setValues] = useState([0]);
  const {color, isVisible} = props;

  const getBackground = () => {
    const progress = (values[0] / settings.max) * 100;
    return "linear-gradient(to right, transparent 0%".concat(', ', color, ' ', progress, '%').concat(', transparent ', progress, '%').concat(', transparent ', '100%').concat(')');
  }

  const handleOnChange = (values) => {
    setValues(values);
  }

  return (
    <Range
      step={1}
      min={settings.min}
      max={settings.max}
      values={values}
      onChange={handleOnChange}
      renderTrack={({ props, children }) => (
        <S.Line color={color} background={getBackground()} {...props} className={isVisible ? 'animateLine' : null}>{children}</S.Line>
      )}
      renderThumb={({ props }) => (
        <S.Slider {...props}><S.SliderDot color={color}/></S.Slider>
      )}
    />
  );
}

export default RangeLine;
