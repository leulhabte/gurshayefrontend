import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Email} from '@material-ui/icons';

class ContactUs extends Component{
    render() {
        return (
            <Jumbotron>
                <h1>Contact us</h1>
                <h3><span><Email/></span> leulh63@gmail.com</h3>
            </Jumbotron>
        );
    }
}

export default ContactUs;