import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import home_course from '../../../assets/images/home-course.jpg';

const Courses = () => {
    return (
        <Col sm={6} md={4} lg={3} className='mb-4 px-3'>
            <Row>
                <Col className='home-courses px-0'>
                    <Image src={home_course} />
                    <Button><h6 className='px-3 py-1'>Semester 1</h6></Button>
                    <p className='px-3'>EE111 - Effective English Usage</p>
                    <Button variant="secondary" className='px-4 py-1 me-3 mb-3'>Access</Button>
                </Col>
            </Row>
        </Col>
    )
}
export default Courses;