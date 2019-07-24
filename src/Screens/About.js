import React, { Component } from 'react';
import {
    Row, Col
} from 'reactstrap';
import Layout from '../Containers/Layout';
import { AppConsumer } from '../Context/AppContext';
import { Link } from 'react-router-dom';



class About extends Component {
    
    state = {
        setting : {}
    }

    render() {
        return (
            <AppConsumer>
                {({ waiting, findSetting }) => {
                return (
                    <Layout>
                            <Row className="h-100 justify-content-center">
                                <Col lg={6} className="shadowCustom m-3 bgDarkCustom">
                                    
                                    <h1 className="text-center text-light">{
                                        !waiting &&
                                        findSetting('presentation').name}</h1>
                                    <p className="text-light">
                                        {
                                            !waiting && 
                                            findSetting('presentation').meta_value
                                        }
                                    </p>
                                </Col>
                                <Col lg={4} className="flex-column d-flex shadowCustom m-3">
                                    <Col lg={6}>
                                <img alt="aCHANGER" className="bigLogo" src="Img/logo_agp.png" />
                                    </Col>
                                    <Col lg={6} className="m-0 p-0">
                                        <Link to={"/"}>
                                <img alt="aCHANGER" className="logo" src="Img/discord.png" />
                                        </Link>
                                        <Link to={"/"}>
                                <img alt="aCHANGER" className="logo" src="Img/twitter.png" />
                                        </Link>
                                        <Link to={"/"}>
                                <img alt="aCHANGER" className="logo" src="Img/insta.png" />
                                        </Link>
                                        <Link to={"/"}>
                                <img alt="aCHANGER" className="logo" src="Img/twitch.png" />
                                        </Link>
                                    </Col>
                                </Col>
                            </Row>
                    </Layout>
                )
                }}
            </AppConsumer>
        );
    }
}

export default About;