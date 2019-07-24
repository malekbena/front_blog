import React, { Component } from 'react';
import {
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';


class ButtonCustom extends Component {
    render() {
        return (
            <div>
                <Button className="animated shake slow" color={'light'} >
                    <Link className="linkCustom" to={this.props.link ? this.props.link  : '/'}>
                        {this.props.title}
                    </Link>
                </Button>
            </div>
        );
    }
}

export default ButtonCustom;