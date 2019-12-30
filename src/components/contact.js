import React from 'react';
import { Responsive, Container } from 'semantic-ui-react';
import '../styles/contact.css'

class Contact extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className='contact'>
                <Responsive as={Container}>
                    contact
                </Responsive>
            </Container>
        );
    }

}

export default Contact;