import React, { Component } from 'react';
import { Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import ButtonCustom from './ButtonCustom';
import './Partners.css';



class Partners extends Component {
    render() {
        let { datas } = this.props
        return (
            <Col className="shadowCustom mx-auto col-lg-11">
                <p className="text-light partnersTitle text-center">Partenaires</p>
                <Col className="row d-flex justify-content-center">
                    {datas.length ?
                        datas.map((item, k) =>

                            <div key={k} className="mb-5 mt-5 col-lg-3">
                                <Card className="shadowCustom cardPartner">
                                    <CardImg className="logo" top width="100%" src={`${item.full_image}`} alt="img partner" />
                                    <CardBody>
                                        <CardTitle>{item.name}</CardTitle>
                                        <CardText className="postPreview">{item.description}</CardText>
                                        <div className="pb-0">
                                        <ButtonCustom className="p-0" title={'en savoir plus'} link={`/partner/${item.slug}`} />
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        )
                        : null}
                </Col>
            </Col>

        );
    }
}

export default Partners;