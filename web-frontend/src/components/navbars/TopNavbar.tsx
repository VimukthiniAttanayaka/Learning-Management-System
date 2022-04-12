import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import logo from "../../assets/images/logo.svg";
import profile from "../../assets/images/profile.svg";

const TopNavbar = () => {
    return (
        <Row className='top-navbar px-0'>
            <Col xs={1} className="px-0">
                <Image src={logo} alt='logo' className='logo ms-2'/>
            </Col>
            <Col xs={9} className="px-0">
                <h1 className='logo-text'>Virtual Learning Environment</h1>
            </Col>
            <Col xs={2} className="px-0">
            <Image src={profile} alt='logo' className='profile'/>
            </Col>
        </Row>
    );
}
export default TopNavbar;