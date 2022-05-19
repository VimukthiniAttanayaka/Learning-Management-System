import React, { useState } from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import background from "../../assets/images/loginbackground.jpg";
import logo from "../../assets/images/logo.png";
import Swal from "sweetalert2";
import Select from "react-select";
import { DropDown } from '../types/LMSTypes';
import store, { selectCount } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { addEmail, isUserLogged } from '../../redux/user';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const navigate = useNavigate();

    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");
    const [userType, setUserType] = useState<string>("");
    const [degree, setDegree] = useState<string>("");
    const [mobile, setMobile] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [code, setCode] = useState<string>("");

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
    const handleOnUseTypeChanged = (name: DropDown | null) => {
        if (!name) {
            return;
          }
        setUserType(name.value);
    };
    const handleOnCodeChanged = (name: string) => {
        setCode(name);
    };

    const authors = [
        { value: "Student", label: "Student" },
        { value: "Teacher", label: "Teacher" }
    ];

    async function requestdata() {

        let data = {
            first_name: firstName,
            last_name: lastName,
            home_address: "kadugaammulla",
            degree_program: degree,
            phone: mobile,
            user_type: userType,
            email: email,
            password: password
        }
        axios.post('http://localhost:8080/registerNewUser',data).then(res=>{
            
            
            localStorage.setItem('role',res.data.user.role[0].roleName)
            localStorage.setItem('token',res.data.jwtToken)

            if (res.status === 200) {
                console.log(res);
                Swal.fire({
                    title: "You Successfully Register to system",
                    text: "",
                    icon: "success",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "white",
                    confirmButtonText: "Ok",
                }).then((result: any) => {
                    if (result.isConfirmed) {
                        dispatch(addEmail(email));
                        dispatch(isUserLogged(true));
                        navigate('/home');
                        //console.log(id);
                    }
                });
            } else {
                Swal.fire({
                    title: "Something goes wrong. Please try again.",
                    text: "",
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "white",
                    confirmButtonText: "Ok",
                }).then((result: any) => {
                    if (result.isConfirmed) {
                        //console.log(id);
                    }
                });
            }
    })
        // const response = await fetch("http://localhost:8080/sign_up", {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // });
    }

    async function requestdataCode() {

        let data = {
            code: code
        }
        const response = await fetch("http://localhost:8080/log_in", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status === 200) {
            //console.log(response);
        } else {
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
            setError("fields can not be empty");
        }
        else if (password !== rePassword) {
            setError("password and repassword need to be same");
        }
        else {
            requestdata();
            setValidated(false);
        }
    }

    const handleSubmitCode = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (!code) {
            setError("Enter code we send your email");
        } else {
            requestdataCode();
            setValidated(false);
        }
    }
    async function requestdataData() {

        let data = {
            code: code
        }
        const response = await fetch("http://localhost:8080/log_in", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status === 200) {
            //console.log(response);
        } else {
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
                                <Select
                                    options={authors}
                                    onChange={(selected: DropDown | null) => {
                                        handleOnUseTypeChanged(selected);
                                    }}
                                />
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
                        <p className='errors'>{error}</p>
                        <Button variant="primary" type="submit" className='submit mt-2 mb-3'>
                            Regitster
                        </Button>
                    </Form>
                    <Form noValidate validated={validated} onSubmit={handleSubmitCode}>
                        <Form.Control type="text" placeholder="code" required value={mobile}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                                handleOnCodeChanged(ev.target.value)
                            } />
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