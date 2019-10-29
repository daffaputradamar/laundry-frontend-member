import React from "react";

import axios from "axios";

import { serviceTransact } from "../config";

import { Header, Container, Table } from "semantic-ui-react";

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: []
    };
  }

  componentDidMount() {
    Promise.all([axios.get(`${serviceTransact}/api/v1/service/show_service/`)])
      .then(([res6]) => Promise.all([res6.data]))
      .then(([data6]) =>
        this.setState({
          service: data6
        })
      );
  }

  render() {
    return (
      <div>
        <Container>
          <br />

          <Header textAlign="center">
            <h1>Layanan Kami</h1>
            <Table singleLine color="teal" inverted>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Paket Layanan</Table.HeaderCell>
                  <Table.HeaderCell>Tarif</Table.HeaderCell>
                  <Table.HeaderCell>Durasi</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.service.map(dt => (
                  <Table.Row>
                    <Table.Cell>{dt.serviceName}</Table.Cell>
                    <Table.Cell>
                      Rp {new Intl.NumberFormat(["ban", "id"]).format(dt.tarif)}{" "}
                      / {dt.unit}
                    </Table.Cell>
                    <Table.Cell>{dt.days} hari</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Header>
        </Container>
      </div>
    );
  }
}
