import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Swal from "sweetalert2";

import { UserContext } from "../context/UserContext.js";
import Link from "../components/Link.js";
import NewShorten from "../components/NewShorten.js";
import Spinner from "../components/Spinner.js";

export default function MyLinks() {

  const { token } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/urls`, config)
      .then(res => {
        setLinks(res.data.shortenedURLs);
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.error
        });
        if (err.response.status === 404) {
          navigate("/");
        }
        setLoading(false);
      });
  }, [refresh]);

  if (loading) {
    return (
      <Container loading={loading}>
        <Spinner color="#80CC74" />
      </Container>
    );
  } else {
    return (
      <Container loading={loading}>
        <NewShorten setRefresh={setRefresh} />
        <Links>
          {links?.map(link =>
            <Link
              key={link.id}
              link={link}
              setRefresh={setRefresh}
            />
          )}
        </Links>
      </Container>
    );
  }
}

const Container = styled.section`
  width: 100%;
  margin-top: 80px;
  display: ${props => props.loading ? "flex" : "default"};
  justify-content: ${props => props.loading ? "center" : "default"};
  align-items: ${props => props.loading ? "center" : "default"};
`;

const Links = styled.ul`
  width: 100%;
`;