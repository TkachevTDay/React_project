import React, {Component} from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, Row, Col } from "react-bootstrap";
import logo from './dota-2-logo.png'

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                         <img
                            src={logo}
                            height={30}
                            width={30}
                            className="d-inline-block align-top"
                            alt="logo"
                         /> 
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                        </Nav>
                        <Form inline>
                            <Row>
                                <Col xs={7}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className="me-sm-2"
                                    />
                                </Col>
                                <Col>
                                    <Button variant="outline-info">Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}