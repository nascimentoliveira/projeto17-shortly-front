import styled from 'styled-components';
import { ImTrophy } from 'react-icons/im';

export default function Ranking() {
  return (
    <Container>
        <TitleFooter>
          <ImTrophy />
          Ranking
        </TitleFooter>
        <ul>

        </ul>
        <TitleFooter>
          Crie sua conta para usar nosso serviço!
        </TitleFooter>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TitleFooter = styled.span`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
  display: flex;
  align-items: center;

  svg {
    width: 58px;
    height: 50px;
    color: #FFD233;
  }
`;