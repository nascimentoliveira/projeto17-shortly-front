import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Container>
      <Content>
      <div>
      </div>
      <div>
        <Link to='/signin'>
          <button>
            Entrar
          </button>
        </Link>
        <Link to='/signup'>
          <button>
            Cadastrar
          </button>
        </Link>
      </div>
      </Content>
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
`;

const Content = styled.section`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  background-color: #FFFFFF;
  margin: 0px auto;

  button {
    background-color: transparent;
    outline: none;
    border: none;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;