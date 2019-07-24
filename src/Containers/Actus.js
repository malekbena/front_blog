import React, { Component } from 'react';
import Axios from 'axios';
import Actu from '../Components/Actu'
import { Row, Col } from 'reactstrap';
class Actus extends Component {
    state = {
        posts: {},
        waiting: true
    }
    

    componentDidMount() {
        this.getPosts().then(() => {
            this.setState({
                waiting: false
            })
        })
    }

    /*     componentWillUnmount() {
            this.setState({
                posts: {},
                waiting: true
            })
        } */

    getPosts = async () => {
        Axios
            .get(`https://jsonplaceholder.typicode.com/posts?userId=1`)
            .then(resp => {
                this.setState({
                    posts: resp.data,
                });
            })
            .catch(err => {
                throw err;
            });
    }
    render() {
        let { posts, waiting } = this.state
        return (
            <>
                <Row className="m-0">
                    {
                        !waiting && posts.length &&
                        posts.map((post, k) => {
                            return (
                                <Col lg={3} className="p-5">
                                    <Actu key={k} post={post} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </>
        );
    }
}

export default Actus;