import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';


import { MY_LINKS_URL } from '../constants.js';
import Link from '../components/Link.js';
import NewShorten from '../components/NewShorten.js';

export default function MyLinks() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [links, setLinks] = useState([]);

  const token = '720800a3-7c2a-4203-93b1-38fad3d84f16';

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
        setLoading(false);
        setError(true);
      });
  }, []);


  return (
    <Container>
      <NewShorten />
      <Links>
        {links.map(link =>
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