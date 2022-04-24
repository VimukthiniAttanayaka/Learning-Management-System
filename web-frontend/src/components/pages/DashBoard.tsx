import React from 'react';
import { Row, Col, Image, Dropdown, Button } from 'react-bootstrap';
import background from "../../assets/images/dashboardbackground.jpg";
import { Triangle } from 'react-feather';
import { IAllCourse } from '../types/LMSTypes';
import Swal from "sweetalert2";

const DashBoard = () => {

    const science: IAllCourse[] = [];
    const commerce: IAllCourse[] = [];
    const humanities: IAllCourse[] = [];
    const socialScience: IAllCourse[] = [];
    const medicine: IAllCourse[] = [];
    const computing: IAllCourse[] = [];

    const courses: IAllCourse[] = [
        { id: 1, name: 'EE111 - Effective', faculty: 1 },
        { id: 2, name: 'EE112 - Effective English Usage', faculty: 5 },
        { id: 3, name: 'EE113 - Effective English Usage', faculty: 2 },
        { id: 4, name: 'EE114 - Effective English Usage', faculty: 2 },
        { id: 5, name: 'EE115 - Effective English Usage', faculty: 4 },
        { id: 7, name: 'EE115 - Effective English Usage', faculty: 3 },
    ];

    const CoursesFaculty = () => {
        for (var i = 0; i < courses.length; i++) {
            if (courses[i].faculty == 1) {
                science.push(courses[i]);
            }
            else if (courses[i].faculty == 2) {
                commerce.push(courses[i]);
            }
            else if (courses[i].faculty == 3) {
                humanities.push(courses[i]);
            }
            else if (courses[i].faculty == 4) {
                socialScience.push(courses[i]);
            }
            else if (courses[i].faculty == 5) {
                medicine.push(courses[i]);
            }
            else if (courses[i].faculty == 6) {
                computing.push(courses[i]);
            }
        }
    }

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
    return (
        <Row className='home-page px-0 dashboard'>
            <Col xs={12} className='px-0'>
                <Image src={background} alt='home backgroung' />
            </Col>
            <Col xs={12} className='my-courses my-3'>
                <h2>All Courses</h2>
            </Col>
            {CoursesFaculty()}
            {CourseShow()}
        </Row>
    );
}
export default DashBoard;