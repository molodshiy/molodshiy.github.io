import styled from 'styled-components';

const Header = styled.header`
  width: 100vw;
  max-width: 1920px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  letter-spacing: 0.22em;
`;


const Logo = styled.div`
  width: 40px;
  min-width: 40px;
  
  @media screen and (min-width: 768px) {  
    width: 56px;
    min-width: 56px;
  }
  
  @media screen and (min-width: 1920px) {
    width: 88px;
    min-width: 88px;
  }
`;


export {Logo, Header };
