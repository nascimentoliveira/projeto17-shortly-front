import styled from 'styled-components';


export default function RankingUser({ user, position }) {
  console.log(user)
  return (
    <Container>
      {position}. {user.name} - {user.linksCount} links - {user.visitCount} visualizações
    </Container>
  );
}

const Container = styled.li`
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  margin: 7px 0px;
`;
