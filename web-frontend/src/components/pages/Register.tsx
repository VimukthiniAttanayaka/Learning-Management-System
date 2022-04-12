import React from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import background from "../../assets/images/loginbackground.jpg";
import logo from "../../assets/images/logo.png";

const Register = () => {
    return (
        <Row className='login-page'>
            <Col xs={12} className='p-0'>
                <Image src={background} />
            </Col>
            <Col>
                <Row className='login-content px-4 pt-3 pb-5 register'>
                    <Image src={logo} />
                    <Form>
                        <Row>
                            <Col xs={6}>
                                <Form.Control type="text" placeholder="First Name" />
                                <Form.Control type="text" placeholder="User ID" />
                                <Form.Control type="password" placeholder="Password" />
                                <Form.Select>
                                    <option>Student</option>
                                    <option>Teacher</option>
                                </Form.Select>
                            </Col>
                            <Col xs={6}>
                                <Form.Control type="text" placeholder="Last Name" />
                                <Form.Control type="email" placeholder="email" />
                                <Form.Control type="password" placeholder="Retype Password" />
                                <Form.Control type="number" placeholder="Mobile" />
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit" className='submit mt-2'>
                            Regitster
                        </Button>
                        <Form.Control type="text" placeholder="code" />
                        <Button variant="primary" type="submit" className='code'>
                            Verify
                        </Button>

                    </Form>
                </Row>
            </Col>
        </Row>
    );
}
export default Register;