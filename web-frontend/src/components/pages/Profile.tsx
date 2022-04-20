import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import background from "../../assets/images/profilebackground.jpg";
import avata from "../../assets/images/profileAvata.jpg";

const Profile = () => {

    return (
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
                        <h4>0755975740</h4>
                        <p>Address - </p>
                        <h4>No.152, Godhamunna, Thalatuoya</h4>
                    </Col>
                    <Col sm={4}>
                        <Row>
                            <Image src={avata} alt='profile backgroung' className='profile-avata' />
                        </Row>
                        <Row>
                            <Button className='profile-edit-btn'>Edit Profile</Button>
                        </Row>
                        <Row>
                            <p>Discription</p>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default Profile;