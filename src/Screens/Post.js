import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import Layout from '../Containers/Layout'
import { AppConsumer, AppContext } from '../Context/AppContext';


class Post extends Component {

    componentDidMount() {
        let context = this.context
        if (context.posts.length) {
            context.findPost(this.props.match.params.slug)
        }
    }

    render() {
        return (
            <AppConsumer>
                {
                    ({ waiting, selectedPost }) => {
                        return (
                            <Layout>
                                <Container fluid className="p-0 postContainer">
                                    <Col lg={9} className="mx-auto align-items-center flex-column d-flex" >
                                        {
                                            selectedPost !== null &&
                                            <>
                                                <Col className="m-3">
                                                    <h2 className="text-center blueCustom text-uppercase"> <strong> {selectedPost.name}</strong> </h2>
                                                </Col>
                                                    <Col className="justify-content-center d-flex col-12 m-3">
                                                        <img className="col-6" src={selectedPost.full_image} alt="Cover" />
                                                    </Col>
                                                        <p className="legend"> { selectedPost.legend } </p>
                                                    <Col className="justify-content-center d-flex col-12 m-3">
                                                    
                                                        <div dangerouslySetInnerHTML={{ __html: selectedPost.description }} />
                                                        {
                                                            selectedPost.rating != null &&
                                                            <img src={ `Img/rating/${ selectedPost.rating }.svg` } alt="rating" />
                                                            
                                                        }
                                                        
                                                    </Col>
                                            </>
                                        }
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

Post.contextType = AppContext
export default Post;