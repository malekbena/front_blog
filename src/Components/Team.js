import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import './Team.css';


const Actu = (props) => {
  return (
    <div className="mb-5 mt-5">
      <Card className="shadowCustom highlighting cardTeam">
        <CardImg top width="100%" src="https://placeimg.com/350/200/nature" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.post.name}</CardTitle>
          <CardText>{props.post.email}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Actu;