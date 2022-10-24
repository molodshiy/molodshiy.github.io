import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: 30px;
`;

const Button = styled.button`
  font-family: Agenda;
  background: none;
  border: none;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
  color: ${props => props.color};
  margin: 0 20px;
  letter-spacing: 0.02em;
  position: relative;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
    margin: 0 40px;
  }

  &:hover {
    cursor: pointer;

    &::after {
      width: 100%;
    }
  }
  
  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 16px;
    position: absolute;
    background-color: ${props => props.color};
    bottom: -1px;
    right: 0;
    transition: width 0.5s;

    @media screen and (min-width: 1024px) {
      width: 32px;
    }
    
    @media screen and (min-width: 1919px) {
      height: 2px;
    }
  }
`;

const ButtonRight = styled(Button)`
  color: ${props => props.color};

  &::after {
    background-color: ${props => props.color};
    left: 0;
    opacity: 0;

    @keyframes fadeInUnderline {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    animation: fadeInUnderline 0.2s linear 5s forwards;
  }
`;

export { Navigation, Button, ButtonRight };
