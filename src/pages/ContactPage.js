import React from "react";

import axios from "axios";

import { serviceTransact } from "../config";
import {
  Table,
  Form,
  Button,
  Input,
  Container,
  Header,
  Divider
} from "semantic-ui-react";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", details: [], method: "search" };

    this.changeValue = this.changeValue.bind(this);
    this.changeMethod = this.changeMethod.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeValue(event) {
    this.setState({ value: event.target.value });
  }

  changeMethod(event) {
    this.setState({ method: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        `${serviceTransact}/api/v1/detailTransaction/${this.state.method}/${this.state.value}`
      )
      .then(response => this.setState({ details: response.data }));
  }

  render() {
    return (
      <div>
        <Container text>
          <br />
          <Header as="h1" textAlign="center">
            Lihat Proses Laundry
          </Header>
          <Divider />
          <p>
            <Form>
              <Input
                type="text"
                placeholder="Search..."
                action
                value={this.state.value}
                onChange={this.changeValue}
              >
                <input />
                {/* <Select compact options={options} /> */}
                <select onChange={this.changeMethod}>
                  <option
                    value="search"
                    selected={this.state.method === "search"}
                  >
                    invoice
                  </option>
                </select>
                <Button
                  type="submit"
                  value="Submit"
                  onClick={this.handleSubmit}
                >
                  Search
                </Button>
              </Input>
            </Form>
          </p>
          <p>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>No</Table.HeaderCell>
                  <Table.HeaderCell>Invoice</Table.HeaderCell>
                  <Table.HeaderCell>Paket</Table.HeaderCell>
                  <Table.HeaderCell>jumlah</Table.HeaderCell>
                  <Table.HeaderCell>proses</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.state.details.map((detail, index) => (
                  <Table.Row key={detail._id}>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{detail.transaction.invoice}</Table.Cell>
                    <Table.Cell>{detail.service.serviceName}</Table.Cell>
                    <Table.Cell>
                      {detail.qty} {detail.service.unit}
                    </Table.Cell>
                    <Table.Cell>{detail.process.process_name}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </p>
        </Container>
      </div>
    );
  }
}
export default ContactPage;
