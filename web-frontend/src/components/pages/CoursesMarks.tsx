import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import background from "../../assets/images/profilebackground.jpg";
import { ICourseMarks } from '../types/LMSTypes';
import LeftNavbar from '../navbars/LeftNavbar';
import TopNavbar from '../navbars/TopNavbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import cources from '../../assets/images/cources-black.svg';
import { IMyCourse } from '../types/LMSTypes';

const CoursesMarks = () => {

    const courses: ICourseMarks[] = [
        { name: 'tutorial1', semester: 'semester1', grade: 'A', gpa: '2.00' },
        { name: 'tutorial1', semester: 'semester1', grade: 'A', gpa: '2.00' },
        { name: 'tutorial1', semester: 'semester1', grade: 'A', gpa: '2.00' },
        { name: 'tutorial1', semester: 'semester1', grade: 'A', gpa: '2.00' },
        { name: 'tutorial1', semester: 'semester1', grade: 'A', gpa: '2.00' },
    ];

    const [value, onChange] = useState(new Date());
    const [calendarShow, setCalendarShow] = useState(false);
    const [courseShow, setCourseShow] = useState(false);

    const calendar = () => {
        if (calendarShow === true) {
            setCalendarShow(false);
        } else {
            setCalendarShow(true);
            setCourseShow(false);
        }
    }

    const course = () => {
        if (courseShow === true) {
            setCourseShow(false);
        } else {
            setCourseShow(true);
            setCalendarShow(false);
        }
    }

    const coursesList: IMyCourse[] = [
        { name: 'EE111 - Effective', semester: 'semester 1' },
        { name: 'EE112 - Effective English Usage', semester: 'semester 1' },
        { name: 'EE113 - Effective English Usage', semester: 'semester 1' },
        { name: 'EE114 - Effective English Usage', semester: 'semester 1' },
        { name: 'EE115 - Effective English Usage', semester: 'semester 1' },
        { name: 'EE115 - Effective English Usage', semester: 'semester 1' },
    ];

    const MyCourseList = () => {
        return (
            <Row className='width-100'>
                {coursesList.map((course: IMyCourse, index: number) => (
                    <Col course={course}
                        index={index}
                        key={index}>
                        <Row>
                            <Image src={cources} alt='cources' className='cource-icon' />
                            <h6>{course.name}</h6>
                        </Row>
                    </Col>
                ))}
            </Row>
        )
    }
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
        );
    }

    return (
        <Row className='lms'>
            <Col xs={1} className="left">
                <LeftNavbar calendar={calendar}
                    course={course} />
            </Col>
            <Col xs={12} className="topnav-content pe-0">
                <Row>
                    <TopNavbar />
                </Row>
                <Row>
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
                </Row>
            </Col>
            <Col className='calendar'>
                {calendarShow && <Calendar onChange={onChange} value={value} />}
            </Col>
            {courseShow && <Col className='cource'>
                {MyCourseList()}
            </Col>}
        </Row>
    );
}
export default CoursesMarks;