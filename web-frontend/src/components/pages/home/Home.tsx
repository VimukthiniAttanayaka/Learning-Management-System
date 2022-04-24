import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import background from "../../../assets/images/homebackground2.jpg";
import { IMyCourse } from '../../types/LMSTypes';
import Courses from './Courses';

const Home = () => {
    const courses: IMyCourse[] = [
        { name: 'EE111 - Effective', semester: 'semester 1' },
        { name: 'EE112 - Effective English Usage', semester: 'semester 1' },
        { name: 'EE113 - Effective English Usage', semester: 'semester 1' },
        { name: 'EE114 - Effective English Usage', semester: 'semester 1' },
        { name: 'EE115 - Effective English Usage', semester: 'semester 1' },
        { name: 'EE115 - Effective English Usage', semester: 'semester 1' },
    ];

    const CourseShow = () => {
        return (
            <Row className='width-100'>
                {courses.map((course: IMyCourse, index: number) => (
                    <Courses
                        course={course}
                        index={index}
                        key={index}
                    />
                ))}
            </Row>
        )
    }
    return (
        <Row className='home-page px-0'>
            <Col xs={12} className='px-0'>
                <Image src={background} alt='home backgroung' />
            </Col>
            <Col xs={12} className='my-courses my-3'>
                <h2>My Courses</h2>
            </Col>
            <Col xs={12} className='ps-5'>
                {CourseShow()}
            </Col>
        </Row>
    );
}
export default Home;