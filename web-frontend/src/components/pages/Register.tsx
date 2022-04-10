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
                <Row className='login-content px-4 pt-3 pb-5'>
                    <Image src={logo} />
                    <Form>
                        <Form.Control type="email" placeholder="email" />
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Control type="password" placeholder="Retype Password" />
                        <Button variant="primary" type="submit" className='code1'>
                            Send Code
                        </Button>
                        <Form.Control type="text" placeholder="code" />
                        <Button variant="primary" type="submit" className='code'>
                            Verify
                        </Button>
                        <Button variant="primary" type="submit" className='submit'>
                            Reset Password
                        </Button>
                    </Form>
                </Row>
            </Col>
        </Row>
    );
}
export default Register;