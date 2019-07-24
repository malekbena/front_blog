import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col } from 'reactstrap';
import Layout from '../Containers/Layout';


import { AppConsumer, AppContext } from '../Context/AppContext';


class Joinus extends Component {

    state = {
        message: null,
        from: null,
    }

    render() {
        return (
            <AppConsumer>
                {
                    ({ waiting, sendEmail }) => {

                        return (
                            <Layout>
                                <Container fluid className="p-0 whiteText mt-3 d-flex flex-column align-items-center">
                                    <h1> Nous rejoindre </h1>
                                    <Col className="col-9 p-3 m-3 shadowCustom">
                                        <Form onSubmit={e => sendEmail(e, this.state.message, this.state.from)}>
                                            <FormGroup>
                                                <Label for="email">Email</Label>
                                                <Input onChange = { e =>  this.setState({ from : e.target })  } type="email" name="email" id="email" placeholder="Email" />
                                            </FormGroup>
                                            {/*                                             <FormGroup>
                                                <Label for="dest">Objet</Label>
                                                <Input type="select" name="dest" id="dest">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                            </FormGroup> */}
                                            <FormGroup>
                                                <Label for="message">Texte</Label>
                                                <Input onChange = { e => this.setState({ message : e.target }) } type="textarea" name="message" id="message" />
                                            </FormGroup>
                                            <Button>Submit</Button>
                                        </Form>
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

Joinus.contextType = AppContext
export default Joinus;