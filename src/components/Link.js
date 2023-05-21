import { FaTrashAlt } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { MdCopyAll } from "react-icons/md";
import { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";

import { UserContext } from "../context/UserContext.js";
import Spinner from "../components/Spinner.js";

export default function Link({ link, setRefresh }) {

  const { token } = useContext(UserContext);

  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  async function deleteLink(id) {
    setLoading(true);
    await (Swal.fire({
      position: "center",
      icon: "warning",
      title: "Deseja realmente excluir este link encurtado?",
      showCancelButton: true,
      cancelButtonText: "Me enganei",
      confirmButtonText: "Sim, desejo excluir",
    })).then(result => {
      if (result.isConfirmed) {
        axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/urls/${id}`, config)
          .then(res => {
            setLoading(false);
            setRefresh(Math.random());
            Swal.fire({
              position: "center",
              icon: "success",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500
            });
          })
          .catch(err => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.response.data.error
            });
            setLoading(false);
          });
      }
    });
  }

  async function redirect(url) {
    await (Swal.fire({
      position: "center",
      icon: "warning",
      title: "Você está sendo redirecionado(a) para um link externo!",
      showCancelButton: true,
      cancelButtonText: "Ficar por aqui",
      confirmButtonText: "Confio neste link",
    })).then(result => {
      if (result.isConfirmed) {
        window.open(url, "_blank");
      }
    });
  }

  function copyLink(shortUrl) {
    navigator.clipboard.writeText(`${process.env.REACT_APP_API_BASE_URL}/${shortUrl}`);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Link copiado!",
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <Container>
      <Item title={link.bigURL}>
        <p>{link.bigURL}</p>
        <GoLinkExternal
          title={"Ir para este endereço"}
          onClick={() => redirect(link.bigURL)}
        />
      </Item>
      <Item>
        <p>{link.shortURL}
          <MdCopyAll
            title={"Copiar link encurtado"}
            onClick={() => copyLink(link.shortURL)}
          />
        </p>
      </Item>
      <Item>{`Quantidade de visitantes: ` + link.visitCount}</Item>
      <DeleteShortLink onClick={() => deleteLink(link.id)}>
        {loading ? <FaTrashAlt /> : <Spinner color="#EA4F4F" />}
      </DeleteShortLink>
    </Container>
  );
}

const Container = styled.li`
  width: 100%;
  height: 60px;
  background-color: #80CC74;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  padding: 0px 0px 0px 21px;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  word-break: break-word;
  width: 30%;
  height: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
  margin: auto 0px;
  padding: 0 5px;;

  > p {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    margin: 0px 5px;
    width: 22px;
    height: 22px;
    color: #FFFFFF;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const DeleteShortLink = styled.button`
  width: 15%;
  height: 100%;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 0px 12px 12px 0px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;

  svg {
    width: 22px;
    height: 26px;
    color: #EA4F4F;
  }

  &:hover {
    cursor: pointer;
  
    svg {
      transform: scale(1.2);
      color: #E01B1B;
    }
  }
`;