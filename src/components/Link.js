import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { useContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import { SHORTENED_LINKS_URL } from '../constants.js';
import { UserContext } from '../context/UserContext.js';
import Spinner from '../components/Spinner.js';

export default function Link({ link, setRefresh }) {

  const { user, token } = useContext(UserContext);
  
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  function deleteLink(id) {
    setLoading(true);
    axios.delete(`${SHORTENED_LINKS_URL}/${id}`, config)
      .then(res => {
        setLoading(false);
        setRefresh(Math.random());
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        });
        setLoading(false);
      });
  }

  return (
    <Container>
      <Item title={link.url}><p>{link.url}</p></Item>
      <Item><p>{link.shortUrl}</p></Item>
      <Item>{`Quantidade de visitantes: `+link.visitCount}</Item>
      <DeleteShortLink onClick={() => deleteLink(link.id)}>
        {loading ? <FaTrashAlt /> : <Spinner color='#EA4F4F'/>}
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