import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../context/UserContext.js";

export default function Navbar() {

  const { user, setUser, setToken } = useContext(UserContext);

  const location = useLocation();

  return (
    <Container>
      <Content>
        <Welcome>
          {user ? `Seja bem-vindo(a), ${user}!` : ""}
        </Welcome>
        {user ?
          <div>
            <Link to="/urls">
              <HomeButton currentPath={location.pathname === "/users/me"}>
                Home
              </HomeButton>
            </Link>
            <Link to="/ranking">
              <RankingButton currentPath={location.pathname === "/ranking"}>
                Ranking
              </RankingButton>
            </Link>
            <Link to="/auth">
              <LogOutButton onClick={() => {
                setUser();
                setToken();
              }}>
                Sair
              </LogOutButton>
            </Link>
          </div>
          :
          <div>
            <Link to="/auth">
              <SignInButton currentPath={location.pathname === "/signin"}>
                Entrar
              </SignInButton>
            </Link>
            <Link to="/users">
              <SignUpButton currentPath={location.pathname === "/signup"}>
                Cadastrar
              </SignUpButton>
            </Link>
          </div>
        }
      </Content>
    </Container >
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
  }
`;

const Welcome = styled.div`
  color: #5D9040;
`;

const HomeButton = styled.button`
  color: ${props => props.currentPath ? "#5D9040" : "#9C9C9C"};
  
  &:hover {
    transform: ${props => props.currentPath ? "none" : "scale(1.1)"};
    cursor: ${props => props.currentPath ? "default" : "pointer"};
  }
`;

const RankingButton = styled.button`
  color: ${props => props.currentPath ? "#5D9040" : "#9C9C9C"};
  
  &:hover {
    transform: ${props => props.currentPath ? "none" : "scale(1.1)"};
    cursor: ${props => props.currentPath ? "default" : "pointer"};
  }
`;

const LogOutButton = styled.button`
  color: ${props => props.currentPath ? "#5D9040" : "#9C9C9C"};
  
  &:hover {
    transform: ${props => props.currentPath ? "none" : "scale(1.1)"};
    cursor: ${props => props.currentPath ? "default" : "pointer"};
  }
`;

const SignInButton = styled.button`
  color: ${props => props.currentPath ? "#5D9040" : "#9C9C9C"};
  
  &:hover {
    transform: ${props => props.currentPath ? "none" : "scale(1.1)"};
    cursor: ${props => props.currentPath ? "default" : "pointer"};
  }
`;

const SignUpButton = styled.button`
  color: ${props => props.currentPath ? "#5D9040" : "#9C9C9C"};
  
  &:hover {
    transform: ${props => props.currentPath ? "none" : "scale(1.1)"};
    cursor: ${props => props.currentPath ? "default" : "pointer"};
  }
`;