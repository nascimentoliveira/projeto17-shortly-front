import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import { MY_LINKS_URL } from '../constants.js';
import { UserContext } from '../context/UserContext.js';
import Link from '../components/Link.js';
import NewShorten from '../components/NewShorten.js';

export default function MyLinks() {

  const { user, token } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [links, setLinks] = useState([]);

  const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
  }

  useEffect(() => {
    setLoading(true);
    axios.get(MY_LINKS_URL, config)
      .then(res => {
        setLinks(res.data.shortenedUrls);
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
        setLoading(false);
        setError(true);
      });
  }, []);


  return (
    <Container>
      <NewShorten />
      <Links>
        {links?.map(link =>
          <Link
            key={link.id}
            link={link}
          />
        )}
      </Links>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  margin-top: 80px;
`;

const Links = styled.ul`
  width: 100%;
`;