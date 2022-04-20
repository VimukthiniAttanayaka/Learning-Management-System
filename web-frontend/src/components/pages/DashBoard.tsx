import React from 'react';
import { Row, Col, Image, Dropdown, Button } from 'react-bootstrap';
import background from "../../assets/images/dashboardbackground.jpg";
import { Triangle } from 'react-feather';

const DashBoard = () => {

    return (
        <Row className='home-page px-0 dashboard'>
            <Col xs={12} className='px-0'>
                <Image src={background} alt='home backgroung' />
            </Col>
            <Col xs={12} className='my-courses my-3'>
                <h2>All Courses</h2>
            </Col>
            <Col xs={12}>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Commerce and Management Studies
                        <Triangle className='dropdown-icon'/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action <Button className='dropdown-enroll'>Enroll</Button></Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action <Button className='dropdown-enroll'>Enroll</Button></Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else <Button className='dropdown-enroll'>Enroll</Button></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Commerce and Management Studies
                        <Triangle className='dropdown-icon'/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action <Button className='dropdown-enroll'>Enroll</Button></Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action <Button className='dropdown-enroll'>Enroll</Button></Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else <Button className='dropdown-enroll'>Enroll</Button></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Commerce and Management Studies
                        <Triangle className='dropdown-icon'/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action <Button className='dropdown-enroll'>Enroll</Button></Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action <Button className='dropdown-enroll'>Enroll</Button></Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else <Button className='dropdown-enroll'>Enroll</Button></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    );
}
export default DashBoard;