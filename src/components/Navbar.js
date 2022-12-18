import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  button {
    background-color: transparent;
    outline: none;
    border: none;
  }
`;
