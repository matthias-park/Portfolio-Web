import React from 'react';
import '../styles/intro.css';
import { Container, Header } from 'semantic-ui-react';

class Intro extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div class="content">
                <h1>Sliding Diagonals Background Effect</h1>
                </div>
            </div>
        )
    }
}

export default Intro;