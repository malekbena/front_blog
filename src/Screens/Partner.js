import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import Layout from '../Containers/Layout';
import { AppConsumer, AppContext } from '../Context/AppContext';


class Partner extends Component {

    componentDidMount() {
        let context = this.context
        if (context.partners.length) {
            context.findPartner(this.props.match.params.slug)
        }
    }

    componentDidUpdate(prevProps) {
        let context = this.context;
        if (context.posts.length) {
            if (prevProps.match.params.slug !== this.props.match.params.slug || this.props.match.params.slug !== context.selectedPartner.slug) {
                context.findPartner(this.props.match.params.slug)
            }
        }
    }
    render() {
        return (
            <AppConsumer>
                {
                    ({ waiting, selectedPartner }) => {
                        return (
                            <Layout>
                                <Container fluid className="p-0 whiteText mt-3">
                                    <Col lg={9} className="mx-auto align-items-center flex-column d-flex" >
                                        <Col>
                                            <h2 className="text-center"> {selectedPartner.name} </h2>
                                        </Col>
                                        <Col className="justify-content-center d-flex">
                                            <img className="pageCover" src={`${selectedPartner.full_image}`} alt="Partner Cover" />
                                        </Col>
                                        <Col className="justify-content-center">
                                            <p> {selectedPartner.description} </p>
                                        </Col>
                                    </Col>
                                </Container>
                            </Layout>
                        )
                    }
                }
            </AppConsumer>
        );
    }
}

Partner.contextType = AppContext
export default Partner;