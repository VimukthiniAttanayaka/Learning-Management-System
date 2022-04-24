import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import background from "../../assets/images/profilebackground.jpg";
import { ITutorialMarks } from '../types/LMSTypes';

const TutorialMarks = () => {

    const courses: ITutorialMarks[] = [
        { name: "tutorial1", weight: '3', grade: 'A', range: '0 to 100', total: '80' },
        { name: "tutorial1", weight: '3', grade: 'A', range: '0 to 100', total: '80' },
        { name: "tutorial1", weight: '3', grade: 'A', range: '0 to 100', total: '80' },
        { name: "tutorial1", weight: '3', grade: 'A', range: '0 to 100', total: '80' },
        { name: "tutorial1", weight: '3', grade: 'A', range: '0 to 100', total: '80' },
    ];

    const CourseShow = () => {
        return (
            <>
                {courses.map((marks: ITutorialMarks, index: number) => (
                    <Row marks={marks} index={index} key={index}>
                        <Col xs={3}>
                            <h5 className='colour-green'>{marks.name}</h5>
                        </Col>
                        <Col xs={2}>
                            <h5 className='item-center colour-green'>{marks.weight}</h5>
                        </Col>
                        <Col xs={2}>
                            <h5 className='item-center colour-green'>{marks.grade}</h5>
                        </Col>
                        <Col xs={2}>
                            <h5 className='item-center colour-green'>{marks.range}</h5>
                        </Col>
                        <Col xs={3}>
                            <h5 className='item-center colour-green'>{marks.total}</h5>
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
                        <h4>PMAT 22213 - Mathematical Modules For Computing</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <h5 className='pb-3 colour-green'>Grade Item</h5>
                    </Col>
                    <Col xs={2}>
                        <h5 className='pb-3 item-center colour-green'>Calculated Weight</h5>
                    </Col>
                    <Col xs={2}>
                        <h5 className='pb-3 item-center colour-green'>Grade</h5>
                    </Col>
                    <Col xs={2}>
                        <h5 className='pb-3 item-center colour-green'>Range</h5>
                    </Col>
                    <Col xs={3}>
                        <h5 className='pb-3 item-center colour-green'>Combination Of Course Total</h5>
                    </Col>
                </Row>
                {CourseShow()}
            </Col>
        </Row>
    );
}
export default TutorialMarks;