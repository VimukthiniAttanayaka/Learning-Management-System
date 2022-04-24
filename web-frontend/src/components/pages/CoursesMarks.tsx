import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import background from "../../assets/images/profilebackground.jpg";
import { ICourseMarks } from '../types/LMSTypes';

const CoursesMarks = () => {

    const courses: ICourseMarks[] = [
        { name: 'tutorial1', semester: 'semester1', grade: 'A', gpa: '2.00' },
        { name: 'tutorial1', semester: 'semester1', grade: 'A', gpa: '2.00' },
        { name: 'tutorial1', semester: 'semester1', grade: 'A', gpa: '2.00' },
        { name: 'tutorial1', semester: 'semester1', grade: 'A', gpa: '2.00' },
        { name: 'tutorial1', semester: 'semester1', grade: 'A', gpa: '2.00' },
    ];

    const CourseShow = () => {
        return (
            <>
                {courses.map((marks: ICourseMarks, index: number) => (
                    <Row marks={marks} index={index} key={index}>
                        <Col xs={3}>
                            <h4 className='colour-green'>{marks.name}</h4>
                        </Col>
                        <Col xs={3}>
                            <h4 className='item-center colour-green'>{marks.semester}</h4>
                        </Col>
                        <Col xs={3}>
                            <h4 className='item-center colour-green'>{marks.grade}</h4>
                        </Col>
                        <Col xs={3}>
                            <h4 className='item-center colour-green'>{marks.gpa}</h4>
                        </Col>
                    </Row>
                ))}
            </>
        )
    }

    return (
        <Row className='home-page px-0'>
            <Col xs={12} className='px-0 profile-background'>
                <Image src={background} alt='profile backgroung' />
            </Col>
            <Col xs={12} className='profile-content ps-5'>
                <Row>
                    <Col xs={3}>
                        <h4 className='pb-3 colour-green'>Course Name</h4>
                    </Col>
                    <Col xs={3}>
                        <h4 className='pb-3 item-center colour-green'>Semester</h4>
                    </Col>
                    <Col xs={3}>
                        <h4 className='pb-3 item-center colour-green'>Grade</h4>
                    </Col>
                    <Col xs={3}>
                        <h4 className='pb-3 item-center colour-green'>Contribution to GPA</h4>
                    </Col>
                </Row>
                {CourseShow()}
            </Col>
        </Row>
    );
}
export default CoursesMarks;