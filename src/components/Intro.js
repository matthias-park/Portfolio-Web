import React from 'react';
import '../styles/intro.css';
import { Container, Header } from 'semantic-ui-react';
import svgBackground from '../styles/svgBackground';

class Intro extends React.Component {

    render() {
        return (
           <div className='container'>
               <Header as='h1'> Hello, I'm Matthias Park.</Header>
               <Header as='h1'> I'm a front-end web developer</Header>
               <Header as='h3'>
                   View my work
               </Header>
           </div>
        )
    }
}

export default Intro;