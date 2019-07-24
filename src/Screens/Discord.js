import React, { Component } from 'react';
import {
    Row, Col
} from 'reactstrap';
import Layout from '../Containers/Layout';
import { AppConsumer } from '../Context/AppContext';
import { Link } from 'react-router-dom';



class Discrod extends Component {

    render() {
        return (
            <AppConsumer>
                {({ waiting, findSetting }) => {
                    return (
                        <Layout>
                                <Row className="h-100 justify-content-center">
                                    <Col lg={6} className="shadowCustom m-3 bgDarkCustom">

                                        <h1 className="text-center text-light m-5">{
                                            !waiting &&
                                            findSetting('discord').name}</h1>
                                        <p className="text-light mt-5" dangerouslySetInnerHTML={{ __html: !waiting && findSetting('discord').meta_value }} />
                                        <iframe title="Discord Widget" src="https://discordapp.com/widget?id=369801338881835018&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0"></iframe>
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

export default Discrod;