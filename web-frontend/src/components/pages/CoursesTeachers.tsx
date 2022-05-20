import React, { useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import background from "../../assets/images/profilebackground.jpg";
import { IAssignTask } from '../types/LMSTypes';
import LeftNavbar from '../navbars/LeftNavbar';
import TopNavbar from '../navbars/TopNavbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import cources from '../../assets/images/cources-black.svg';
import { IMyCourse } from '../types/LMSTypes';

const CoursesTeachers = () => {

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

    const courses: IAssignTask[] = [
        { name: 'tutorial1', assignDate: '2022/04/05', dueDate: '2022/04/30' },
        { name: 'tutorial1', assignDate: '2022/04/05', dueDate: '2022/04/30' },
        { name: 'tutorial1', assignDate: '2022/04/05', dueDate: '2022/04/30' },
        { name: 'tutorial1', assignDate: '2022/04/05', dueDate: '2022/04/30' },
    ];

    const CourseShow = () => {
        return (
            <>
                {courses.map((assignTasks: IAssignTask, index: number) => (
                    <Row assignTasks={assignTasks} index={index} key={index}>
                        <Col xs={3}>
                            <h5 className='colour-green'>{assignTasks.name}</h5>
                        </Col>
                        <Col xs={2}>
                            <h5 className='item-center colour-green'>{assignTasks.assignDate}</h5>
                        </Col>
                        <Col xs={3}>
                            <h5 className='item-center colour-green'>{assignTasks.dueDate}</h5>
                        </Col>
                        <Col xs={2}>
                            <h5 className='item-center colour-green'><FaEdit className="text-warning" /></h5>
                        </Col>
                        <Col xs={2}>
                            <h5 className='item-center colour-green'><FaTrash className='text-danger' /></h5>
                        </Col>
                    </Row>
                ))}
            </>
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
                    <Col xs={12} className='profile-content ps-5'>
                        <Row>
                            <Col xs={12} className='pb-5'>
                                <h5>PMAT 22213 - Mathematical Modules For Computing</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3}>
                                <h5 className='pb-3'>Task</h5>
                            </Col>
                            <Col xs={2}>
                                <h5 className='pb-3 item-center '>Assign Date</h5>
                            </Col>
                            <Col xs={3}>
                                <h5 className='pb-3 item-center'>Due Date</h5>
                            </Col>
                            <Col xs={2}>
                                <h5 className='pb-3 item-center'>Update</h5>
                            </Col>
                            <Col xs={2}>
                                <h5 className='pb-3 item-center'>Remove</h5>
                            </Col>
                        </Row>
                        {CourseShow()}
                    </Col>
                    <Col xs={12} className='ps-5 my-5'>
                        <Button className='new-task'>New Task</Button>
                        <Button className='new-task'>New Annousment</Button>
                        <Button className='new-task float-right background-green me-5 pe-5'>Course Final Marks</Button>
                    </Col>
                    <Col xs={12} className='ps-5'>
                        <Row>
                            <Col xs={12} className='pb-2 colour-brown'>
                                <h5>Student List</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3}>
                                <h5 className='pb-3 colour-brown'>Name</h5>
                            </Col>
                            <Col xs={9}>
                                <h5 className='pb-3 item-center colour-brown'>Grade</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3}>

                            </Col>
                            <Col xs={9}>
                                <Row>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
        </Row>
            </Col >
    <Col className='calendar'>
        {calendarShow && <Calendar onChange={onChange} value={value} />}
    </Col>
{
    courseShow && <Col className='cource'>
        {MyCourseList()}
    </Col>
}
        </Row >
    );
}
export default CoursesTeachers;