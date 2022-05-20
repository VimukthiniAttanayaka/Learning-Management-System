import React, { useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import background from "../../assets/images/profilebackground.jpg";
import avata from "../../assets/images/profileAvata.jpg";
import { FiEdit, FiUpload } from 'react-icons/fi';
import LeftNavbar from '../navbars/LeftNavbar';
import TopNavbar from '../navbars/TopNavbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import cources from '../../assets/images/cources-black.svg';
import { IMyCourse } from '../types/LMSTypes';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate();

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

    const user = localStorage.getItem('role');
    var courseLink: any;
    user === 'Teacher' ? courseLink = '/coursesteachers' : courseLink = '';

    const courseNavigate = (id: string) => {
        localStorage.setItem('courseId', id)
        navigate(courseLink);
    }

    const MyCourseList = () => {
        return (
            <Row className='width-100'>
                {coursesList.map((course: IMyCourse, index: number) => (
                    <Col course={course}
                        index={index}
                        key={index}>
                        <Row onClick={() => courseNavigate(course.name)}>
                            <Image src={cources} alt='cources' className='cource-icon' />
                            <h6>{course.name}</h6>
                        </Row>
                    </Col>
                ))}
            </Row>
        )
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
                        <Col xs={12} className='profile-content'>
                            <Row>
                                <Col sm={8} className='profile-details'>
                                    <p>Degree Program - </p>
                                    <h4>software Engineering</h4>
                                    <p>Student No - </p>
                                    <h4>SE-2018-006</h4>
                                    <p>Student Name - </p>
                                    <h4>A.M.V.N.Attanayaka</h4>
                                    <p>Email Address - </p>
                                    <h4>vimukthinia@gmail.com</h4>
                                    <p>Registated Date - </p>
                                    <h4>2022-04-22</h4>
                                    <p>mobile - </p>
                                    <h4 className='pe-5'>0755975740 <FiEdit className='text-warning edit' /></h4>
                                    <p>Address - </p>
                                    <h4 className='pe-5'>No.152, Godhamunna, Thalatuoya <FiEdit className='text-warning edit' /></h4>
                                </Col>
                                <Col sm={4}>
                                    <Row>
                                        <Image src={avata} alt='profile backgroung' className='profile-avata' />
                                    </Row>
                                    <Row>
                                        <Button className='profile-edit-btn'>Upload Image<FiUpload /></Button>
                                    </Row>
                                    <Row>
                                        <p className='discription'>Discription</p>
                                        <p>djsfb f egr yurfrgywef g7tf7hfrh8gyt76w 5yvr6y56u5 56 u56y56uj hgerheyrjhst bej rtdhy<FiEdit className='text-warning edit' /></p>
                                    </Row>
                                </Col>
                            </Row>
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
export default Profile;