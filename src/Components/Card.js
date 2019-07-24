import React, { Component } from 'react';
import "./Card.css";
import { Row, Col } from 'reactstrap';
import ButtonCustom from './ButtonCustom';
class Card extends Component {
    render() {
        return (
            <div className="cardCustom shadowCustom mv-150 w-90">
                <Row className={`m-0 h-100 ${this.props.reverse ? 'flex-row-reverse' : ''}`}>
                    <Col lg={6} className="d-flex p-0 justify-content-center align-items-center h-100">
                        <ButtonCustom title={this.props.button} link={this.props.link} />
                    </Col>
                    <Col lg={6} className="h-100 p-0">
                        <div className="cover h-100 w-100" style={{
                            backgroundImage: `url(${this.props.img})`
                        }}>
                        </div>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Card;