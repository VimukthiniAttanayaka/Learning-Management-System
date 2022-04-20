import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import background from "../../../assets/images/homebackground2.jpg";
import Courses from './Courses';

const Home = () => {

    return (
        <Row className='home-page px-0'>
            <Col xs={12} className='px-0'>
                <Image src={background} alt='home backgroung' />
            </Col>
            <Col xs={12} className='my-courses my-3'>
                <h2>My Courses</h2>
            </Col>
            <Col xs={12} className='ps-5'>
                <Row>
                    <Courses />
                    <Courses />
                    <Courses />
                    <Courses />
                </Row>
            </Col>
        </Row>
    );
}
export default Home;