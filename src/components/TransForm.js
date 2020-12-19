import React, { useState } from  'react'
import { Col, Row, Button, Form, FormGroup, Label, Input,
  Modal, ModalHeader, ModalBody, ModalFooter, Container
} from 'reactstrap';

const TransForm = () => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

    return (
      <Container fluid={true}>
        <Form>
          <Row  className="mx-0" form>
            <Col className=" px-0" md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
            </Col>
            <Col className="px-0" md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
          </FormGroup>
          <Row form className="mx-0 px-0">
            <Col className=" px-0" md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity"/>
              </FormGroup>
            </Col>
            <Col className=" px-0" md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState"/>
              </FormGroup>
            </Col>
            <Col className=" px-0" md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip"/>
              </FormGroup>  
            </Col>
          </Row>
          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck"/>
            <Label for="exampleCheck" check>Check me out</Label>
          </FormGroup>
          <Button onClick={toggle}>Sign in</Button>
          {/*  */}
          <Modal isOpen={modal} toggle={toggle}  className="border-0"   style={{marginTop:"130px", backgroundColor:""}}>
        <ModalHeader className="text-center bg-white" toggle={toggle} style={{marginLeft:"35%"}}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter className="justify-content-between border-0" >
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
      </Modal>
        </Form>
        </Container>
      );
}

export default TransForm


