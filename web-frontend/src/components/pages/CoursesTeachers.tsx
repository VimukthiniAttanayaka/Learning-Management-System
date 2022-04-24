import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { Edit, Trash2 } from 'react-feather';
import background from "../../assets/images/profilebackground.jpg";
import { IAssignTask } from '../types/LMSTypes';

const CoursesTeachers = () => {

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
                            <h5 className='item-center colour-green'><Edit className="text-warning" /></h5>
                        </Col>
                        <Col xs={2}>
                            <h5 className='item-center colour-green'><Trash2 className='text-danger' /></h5>
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
    );
}
export default CoursesTeachers;