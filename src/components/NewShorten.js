import { useContext, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import { UserContext } from '../context/UserContext.js';
import Spinner from '../components/Spinner.js';

export default function NewShorten({ setRefresh }) {

  const { token } = useContext(UserContext);
  const [form, setForm] = useState({ bigURL: '' });
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function newShorten(e) {
    e.preventDefault();
    setLoading(true);
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/urls`, form, config)
      .then(res => {
        setLoading(false);
        setRefresh(Math.random());
        setForm({ bigURL: '' });
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
          text: err.response.data.error
        });
        setLoading(false);
        setForm({ bigURL: '' });
      });
  }
  return (
    <Container>
      <Form onSubmit={newShorten}>
        <Input
          type='url'
          placeholder='Links que cabem no bolso'
          name='bigURL'
          value={form.bigURL}
          onChange={handleForm}
          disabled={loading}
          required
        />

        <Button
          type='submit'
          title={loading ? 'aguarde...' : 'Encurtar link'}
          disabled={loading}
        >
          {loading ? <Spinner /> : 'Encurtar link'}
        </Button>
      </Form>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 73%;
  height: 60px;
  background-color: #FFFFFF;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  padding: 0px 22px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #9C9C9C;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9C9C9C;
  }

  &:focus {
    outline: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #474747;
  }

  &:disabled {
    color: #AFAFAF;
    background-color: #F2F2F2;
    -webkit-text-fill-color: #AFAFAF;
    -webkit-box-shadow: 0 0 0px 45px #F2F2F2 inset;
    box-shadow: 0 0 0px 45px #F2F2F2 inset;
  }
`;

const Button = styled.button`
  width: 20%;
  height: 60px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
  background-color: #5D9040;
  border-radius: 12px;
  border: none;
  outline: none;
  transition: 1s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #4A7333;
    transform: scale(1.05);
    cursor: pointer;
  }
`;