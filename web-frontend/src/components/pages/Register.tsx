import React, { useState } from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import background from "../../assets/images/loginbackground.jpg";
import logo from "../../assets/images/logo.png";

const Register = () => {

    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");
    const [userType, setUserType] = useState<string>("");
    const [degree, setDegree] = useState<string>("");
    const [mobile, setMobile] = useState<string>("");

    const handleOnFirstNameChanged = (name: string) => {
        setFirstName(name);
    };
    const handleOnLastNameChanged = (name: string) => {
        setLastName(name);
    };
    const handleOnEmailChanged = (name: string) => {
        setEmail(name);
    };
    const handleOnPasswordChanged = (name: string) => {
        setPassword(name);
    };
    const handleOnRePasswordChanged = (name: string) => {
        setRePassword(name);
    };
    const handleOnDegreeChanged = (name: string) => {
        setDegree(name);
    };
    const handleOnMobileChanged = (name: string) => {
        setMobile(name);
    };

    async function requestdata() {
        console.log("hi");

        let data = {
            first_name: firstName,
            middle_name: "chathuranga",
            last_name: lastName,
            home_address: "kadugaammulla",
            degree_program: degree,
            phone: mobile,
            user_type: "student",
            email: email,
            password: password
        }
        const response = await fetch("http://localhost:8080/sign_up", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status === 200) {
            console.log(response);
            alert("correct")
        } else {
            alert("Something goes wrong. Please try again.")
        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (!firstName || !lastName || !email || !degree || !password || !rePassword) {
            alert("feilds can not be null");
            setValidated(false);
        }
        else if (password !== rePassword) {
            alert("password need to be same value");
            setValidated(false);
        }
        else {
            requestdata();
            setValidated(false);
        }
    }

    return (
        <Row className='login-page'>
            <Col xs={12} className='p-0'>
                <Image src={background} />
            </Col>
            <Col>
                <Row className='login-content px-4 pt-3 pb-5 register'>
                    <Image src={logo} />
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col xs={6}>
                                <Form.Control type="text" placeholder="First Name" required value={firstName}
                                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                                        handleOnFirstNameChanged(ev.target.value)
                                    } />
                                <Form.Control type="text" placeholder="Degree" required value={degree}
                                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                                        handleOnDegreeChanged(ev.target.value)
                                    } />
                                <Form.Control type="password" placeholder="Password" required value={password}
                                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                                        handleOnPasswordChanged(ev.target.value)
                                    } />
                                <Form.Select>
                                    <option>Student</option>
                                    <option>Teacher</option>
                                </Form.Select>
                            </Col>
                            <Col xs={6}>
                                <Form.Control type="text" placeholder="Last Name" required value={lastName}
                                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                                        handleOnLastNameChanged(ev.target.value)
                                    } />
                                <Form.Control type="email" placeholder="email" required value={email}
                                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                                        handleOnEmailChanged(ev.target.value)
                                    } />
                                <Form.Control type="password" placeholder="Retype Password" required value={rePassword}
                                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                                        handleOnRePasswordChanged(ev.target.value)
                                    } />
                                <Form.Control type="number" placeholder="Mobile" required value={mobile}
                                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                                        handleOnMobileChanged(ev.target.value)
                                    } />
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit" className='submit mt-2'>
                            Regitster
                        </Button>
                    </Form>
                    <Form>
                        <Form.Control type="text" placeholder="code" required />
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