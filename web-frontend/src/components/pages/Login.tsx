import React from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import background from "../../assets/images/loginbackground.jpg";
import logo from "../../assets/images/logo.png";

const Login = () => {
    return (
        <Row className='login-page'>
            <Col xs={12} className='p-0'>
                <Image src={background} />
            </Col>
            <Col>
                <Row className='login-content px-4 pt-3 pb-5'>
                    <Image src={logo} />
                    <Form>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Control type="password" placeholder="Password" />

                        <h6>Forgot Your Password</h6>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Col>
        </Row>
    );
}
export default Login;