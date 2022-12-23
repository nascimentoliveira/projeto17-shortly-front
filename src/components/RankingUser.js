import styled from 'styled-components';

export default function RankingUser({ user, position }) {
  return (
    <Container>
      {position}. {user.name} - 
      {user.linksCount} {user.linksCount > 1 ? 'links': 'link'} - 
      {user.visitCount} {user.visitCount > 1 ? 'visualizações': 'visualização'}
    </Container>
  );
}

const Container = styled.li`
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  margin: 7px 0px;
  word-break: break-word;
`;
