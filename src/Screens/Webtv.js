import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Layout from '../Containers/Layout';



import { AppConsumer, AppContext } from '../Context/AppContext';



class Webtv extends Component {

    render() {
        return (
            <AppConsumer>
                {
                    ({ waiting, selectStreamers }) => {


                        return (
                            <Layout>
                                <Container fluid className="p-0 whiteText mt-3 d-flex flex-column align-items-center">
                                    <h1 className="mb-3">WEB TV</h1>
                                    {!waiting && selectStreamers !== null &&
                                        <>
                                            <Col lg={6} className="mx-auto">
                                                <Col className="justify-content-center d-flex">
                                                    <img src={selectStreamers[0].full_image} alt="Streamers" />
                                                </Col>
                                                <h3 className="text-center m-3">Liste des streamers</h3>
                                                {selectStreamers[0].players.map((player, k) => {
                                                    return (
                                                        <Row key={k} className="m-5 mx-auto">
                                                            <Col lg={3}>
                                                                <img src={player.full_image}
                                                                    height="150px" alt="avatar" />
                                                            </Col>
                                                            <Col lg={9} className="shadowCustom">
                                                                <h1 className="text-light">{player.name}</h1>
                                                                <p className="text-light">{player.description}</p>
                                                            </Col>
                                                        </Row>
                                                    )
                                                })}
                                            </Col>
                                        </>
                                    }
                                </Container>
                            </Layout>
                        )
                    }
                }
            </AppConsumer>
        );
    }
}

Webtv.contextType = AppContext
export default Webtv;