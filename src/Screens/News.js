import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import Layout from '../Containers/Layout';
import ButtonCustom from '../Components/ButtonCustom';


import { AppConsumer, AppContext } from '../Context/AppContext';



class News extends Component {

    render() {
        return (
            <AppConsumer>
                {
                    ({ waiting, posts }) => {
                        return (
                            <Layout>
                                <Container fluid className="p-0 whiteText mt-3 d-flex flex-column align-items-center">
                                    <h1>News</h1>
                                    {
                                        posts.length &&
                                        posts.map((post, k) => {
                                            return (
                                                <Col key={k} className="row m-5 col-lg-9" >
                                                    <img className="bigLogo col-lg-6" src={post.full_image} alt="post" />
                                                    <Col className="col-lg-6">
                                                        <h3 className="text-center blueCustom text-uppercase"> {post.name} </h3>
                                                        <div className="preview" dangerouslySetInnerHTML={{ __html: post.description }} />
                                                        <ButtonCustom title={"page a l'article"} link={`/post/${post.slug}`} />
                                                    </Col>
                                                </Col>
                                            )
                                        }
                                        )
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

News.contextType = AppContext
export default News;