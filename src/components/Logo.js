import styled from 'styled-components';

import logo from '../assets/images/shorts.png';

export default function Logo() {
  return (
    <Container>
      <Content title='Shortly'>
        Shortly
        <img src={logo} alt='Shortly' />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 130px;
  width: 100%;
  background-color: #FFFFFF;
  position: fixed;
  display: flex;
  justify-content: center;
  top: 90px;
  z-index: 1;
  padding-bottom: 30px;
`;

const Content = styled.section`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  font-size: 64px;
  line-height: 80px;

  > img { 
    max-width: 102px;
    max-height: 102px;
  }

  &:hover {
    transform: scale(1.05);
    cursor: default;
  }
`;