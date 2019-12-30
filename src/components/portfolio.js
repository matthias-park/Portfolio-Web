import React from 'react';
import { Container, Responsive } from 'semantic-ui-react';
import '../styles/portfolio.css';

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className='portfolio'>
                <Responsive as={Container}>
                    portfolio
                </Responsive>
            </Container>
        );
    }

}

export default Portfolio;