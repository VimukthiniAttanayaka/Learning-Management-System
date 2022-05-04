import React, { useState } from 'react';
import { Row, Col, Image, Dropdown, Button } from 'react-bootstrap';
import background from "../../assets/images/dashboardbackground.jpg";
import { Triangle } from 'react-feather';
import { IAllCourse } from '../types/LMSTypes';
import Swal from "sweetalert2";
import LeftNavbar from '../navbars/LeftNavbar';
import TopNavbar from '../navbars/TopNavbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import cources from '../../assets/images/cources-black.svg';
import { IMyCourse } from '../types/LMSTypes';

const DashBoard = () => {

    const science: IAllCourse[] = [
        { id: 4, name: 'EE114 - Effective English Usage', semester: "2" },
        { id: 5, name: 'EE115 - Effective English Usage', semester: "4" },
        { id: 7, name: 'EE115 - Effective English Usage', semester: "3" },
    ];
    const commerce: IAllCourse[] = [
        { id: 4, name: 'EE114 - Effective English Usage', semester: "2" },
        { id: 5, name: 'EE115 - Effective English Usage', semester: "4" },
        { id: 7, name: 'EE115 - Effective English Usage', semester: "3" },
    ];
    const humanities: IAllCourse[] = [
        { id: 4, name: 'EE114 - Effective English Usage', semester: "2" },
        { id: 5, name: 'EE115 - Effective English Usage', semester: "4" },
        { id: 7, name: 'EE115 - Effective English Usage', semester: "3" },
    ];
    const socialScience: IAllCourse[] = [
        { id: 4, name: 'EE114 - Effective English Usage', semester: "2" },
        { id: 5, name: 'EE115 - Effective English Usage', semester: "4" },
        { id: 7, name: 'EE115 - Effective English Usage', semester: "3" },
    ];
    const medicine: IAllCourse[] = [
        { id: 4, name: 'EE114 - Effective English Usage', semester: "2" },
        { id: 5, name: 'EE115 - Effective English Usage', semester: "4" },
        { id: 7, name: 'EE115 - Effective English Usage', semester: "3" },
    ];
    const computing: IAllCourse[] = [
        { id: 4, name: 'EE114 - Effective English Usage', semester: "2" },
        { id: 5, name: 'EE115 - Effective English Usage', semester: "4" },
        { id: 7, name: 'EE115 - Effective English Usage', semester: "3" },
    ];

    const enrollRequest = (id: number, name: string) => {
        Swal.fire({
            title: name,
            text: "Are You Want to Enroll this Course?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Enroll it!",
        }).then((result: any) => {
            if (result.isConfirmed) {
                console.log(id);
            }
        });
    }

    const CourseShow = () => {
        return (
            <Col xs={12}>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Commerce and Management Studies
                        <Triangle className='dropdown-icon' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {commerce.map((course: IAllCourse, index: number) => (
                            <Dropdown.Item
                                course={course}
                                index={index}
                                key={index}
                            >{course.name}<Button className='dropdown-enroll' onClick={() => enrollRequest(course.id, course.name)}>Enroll</Button></Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Humanities
                        <Triangle className='dropdown-icon' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {humanities.map((course: IAllCourse, index: number) => (
                            <Dropdown.Item
                                course={course}
                                index={index}
                                key={index}
                            >{course.name}<Button className='dropdown-enroll' onClick={() => enrollRequest(course.id, course.name)}>Enroll</Button></Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Medicine
                        <Triangle className='dropdown-icon' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {medicine.map((course: IAllCourse, index: number) => (
                            <Dropdown.Item
                                course={course}
                                index={index}
                                key={index}
                            >{course.name}<Button className='dropdown-enroll' onClick={() => enrollRequest(course.id, course.name)}>Enroll</Button></Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Science
                        <Triangle className='dropdown-icon' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {science.map((course: IAllCourse, index: number) => (
                            <Dropdown.Item
                                course={course}
                                index={index}
                                key={index}
                            >{course.name}<Button className='dropdown-enroll' onClick={() => enrollRequest(course.id, course.name)}>Enroll</Button></Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Social Science
                        <Triangle className='dropdown-icon' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {socialScience.map((course: IAllCourse, index: number) => (
                            <Dropdown.Item
                                course={course}
                                index={index}
                                key={index}
                            >{course.name}<Button className='dropdown-enroll' onClick={() => enrollRequest(course.id, course.name)}>Enroll</Button></Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Computing and Technology
                        <Triangle className='dropdown-icon' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {computing.map((course: IAllCourse, index: number) => (
                            <Dropdown.Item
                                course={course}
                                index={index}
                                key={index}
                            >{course.name}<Button className='dropdown-enroll' onClick={() => enrollRequest(course.id, course.name)}>Enroll</Button></Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        )
    }

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
                    <Row className='home-page px-0 dashboard'>
                        <Col xs={12} className='px-0'>
                            <Image src={background} alt='home backgroung' />
                        </Col>
                        <Col xs={12} className='my-courses my-3'>
                            <h2>All Courses</h2>
                        </Col>
                        {CourseShow()}
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
export default DashBoard;