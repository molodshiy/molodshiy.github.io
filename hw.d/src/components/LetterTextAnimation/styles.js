import styled from 'styled-components';

const ButtonText = styled.p`
  font-size: max(12px, 2.1vh);
  line-height: 1.2;
  text-transform: uppercase;
  color: ${ props => props.textColor};
  text-align: center;
  width: 100%;
  padding-right: 40px;

  @media screen and (min-width: 768px) {
    padding-right: 56px;
    font-size: max(14px, 2.1vh);
  }

  @media screen and (min-width: 1024px) {
    padding-right: 88px;
    font-size: max(24px, 2.1vh);
  }
`;

export {ButtonText};
