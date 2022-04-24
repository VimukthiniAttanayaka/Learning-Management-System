import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import LeftNavbar from './navbars/LeftNavbar';
import TopNavbar from './navbars/TopNavbar';
import Home from './pages/home/Home';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import cources from '../assets/images/cources-black.svg';
import DashBoard from './pages/DashBoard';
import Profile from './pages/Profile';
import CoursesMarks from './pages/CoursesMarks';
import CousesTeachers from './pages/CoursesTeachers';
import TutorialMarks from './pages/TutorialMarks';

const LMS = () => {
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
                    <CousesTeachers/>
                </Row>
            </Col>
            <Col className='calendar'>
                {calendarShow && <Calendar onChange={onChange} value={value} />}
            </Col>
            {courseShow && <Col className='cource'>
                <Row>
                    <Image src={cources} alt='cources' className='cource-icon' />
                    <h6>PMAT22213 - mathamatic for computing</h6>
                </Row>
                <Row>
                    <Image src={cources} alt='cources' className='cource-icon' />
                    <h6>PMAT22213 - mathamatic for computing</h6>
                </Row>
                <Row>
                    <Image src={cources} alt='cources' className='cource-icon' />
                    <h6>PMAT22213 - mathamatic for computing</h6>
                </Row>
            </Col>}
        </Row>
    );
}
export default LMS;