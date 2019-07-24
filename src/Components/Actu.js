import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';
import ButtonCustom from './ButtonCustom';
import './Actu.css';

const Actu = (props) => {
    return (
    <div>
        <Card className="shadowCustom" >
            <CardImg className="cardImg" src={props.post.full_image} />
            <CardBody>
                <CardTitle className="text-center text-uppercase"><strong> {props.post.name} </strong> </CardTitle>
                <CardText className="postPreview" dangerouslySetInnerHTML={{ __html: props.post.description}} />
                <ButtonCustom title={props.button} link={`/post/${props.post.slug}`} />
            </CardBody>
        </Card>
    </div>
    );
};

export default Actu;