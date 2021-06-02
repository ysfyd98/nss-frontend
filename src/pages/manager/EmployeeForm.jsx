import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

class EmployeeForm extends Component {
  state = {
    roleData: [],
    positionData: [],
    departmentData: [],

  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">Add Employee Details</h2>
        <div id="role-form-outer-div">
          <Form id="form" onSubmit={this.props.onEmployeeSubmit}>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                First Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Last Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} >
              <Form.Label column sm={2}>
                  Username
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    required
                  />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Role
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" required>
                  <option value="0">Manager</option>
                  <option value="1">Worker</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} id="form-submit-button">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} id="form-cancel-button">
              <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
                <Button type="reset" onClick={this.props.onFormClose}>
                  cancel
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default EmployeeForm;
