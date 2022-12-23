import axios from 'axios';
import styled from 'styled-components';
import { useContext, useState, useEffect } from 'react';
import { ImTrophy } from 'react-icons/im';

import { RANKING_URL } from '../constants.js';
import { UserContext } from '../context/UserContext.js';
import RankingUser from '../components/RankingUser.js';
import Spinner from '../components/Spinner.js';

export default function Ranking() {

  const { token } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [ranking, setRanking] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  useEffect(() => {
    setLoading(true);
    axios.get(RANKING_URL, token ? config : null)
      .then(res => {
        setRanking(res.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <Spinner color='#80CC74' />
      </Container>
    );
  } else {
    return (
      <Container>
        <TitleFooter>
          <ImTrophy />
          Ranking
        </TitleFooter>
        <RankingList>
          {ranking.map((user, index) =>
            <RankingUser
              key={user.id}
              user={user}
              position={index + 1}
            />
          )}
        </RankingList>
        {token ? `` :
          <TitleFooter>
            Crie sua conta para usar nosso serviço!
          </TitleFooter>
        }
      </Container>
    );
  }
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

const RankingList = styled.ul`
  margin: 57px 0px;
  width: 100%;
  padding: 20px 40px;
  background: #FFFFFF;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
`;