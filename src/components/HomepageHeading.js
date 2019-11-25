import PropTypes from "prop-types";
import React, { Component } from "react";
import Logo from "../assets/logo.png";
import { Button, Container, Header, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HomepageHeading = ({ mobile }) => (
  <Container text>
    {/* <Header
      as="h1"
      color="teal"
      content="Laundry Pintar"
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "2em"
      }}
    /> */}
    <Image src={Logo} size="medium" centered />
    <Header
      as="h2"
      content="Cuci Gampang, Diskonnya Numpuk!"
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Header
      as="h5"
      content="Yuk Gabung jadi member Laundry Pintar buat dapatin diskon yang ga ada habis-habisnya!"
      style={{
        fontSize: mobile ? "1em" : "1.2em",
        fontWeight: "normal",
        marginTop: mobile ? "0.2em" : "1em",
        marginBottom: mobile ? "0.2em" : "2em"
      }}
    />
    <Button as={Link} to="/layanan" size="huge" color="teal">
      Cek Penawaran Kami
      <Icon name="right arrow" />
    </Button>

    <Button as={Link} to="/proses" basic size="huge" color="teal">
      <Icon name="left arrow" /> Cek Proses Laundry
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;
