import styled from 'styled-components';

import logo from '../assets/images/shorts.png';

export default function Logo() {
  return (
    <Container title='Shortly'>
        Shortly
        <img src={logo} alt='Shortly' />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  font-weight: 200;
  font-size: 64px;
  line-height: 80px;
  color: #000000;

  > img { 
    max-width: 102px;
    max-height: 102px;
  }

  &:hover {
    transform: scale(1.05);
    cursor: default;
  }
`;