import React, {createRef} from 'react';
import '../styles/intro.css';
import { Header, Button, Responsive, Container, Menu, Sticky, Divider, Icon } from 'semantic-ui-react';
import About from '../components/about';
import Portfolio from './portfolio';
import Contact from './contact';

class Intro extends React.Component {

    state= {
        activeItem: null,
    }


    constructor(props) {
        super(props);
        this.aboutRef = createRef();
        this.homeRef = createRef(); 
        this.portfolioRef = createRef();
        this.contactRef = createRef(); 
        this.menuRef = createRef();
    }

    handleItemClick = (name) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;
        const {styles} = this.props;
        console.log(this.props);
        return (
            
            <div>
                <div ref={this.homeRef}>
                    <Container className='intro'>
                        <Responsive>
                            <div className="bg"></div>
                            <div className="bg bg2"></div>
                            <div className="bg bg3"></div>
                            <div class="content">
                                <Header size={styles.headerFontSize}>Hi I'm Junsoo Park</Header>
                                <Header size={styles.headerFontSize}>I'm front end developer</Header>
                                <Button 
                                    color='olive' 
                                    className='buttonText' 
                                    onClick={() => {
                                    this.aboutRef.current.scrollIntoView({ behavior: 'smooth'});
                                }}>
                                    Go my work
                                </Button>
                            </div>
                        </Responsive>
                    </Container>
                </div>

                <div ref={this.menuRef}>
                    <Sticky context={this.menuRef}>
                        <Menu
                            attached='top'
                            borderless
                        >
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={(name) => {
                                    this.handleItemClick(name);
                                    this.homeRef.current.scrollIntoView({ behavior: 'smooth'});
                                }}
                            >
                                HOME
                            </Menu.Item>
                            <Menu.Item
                                name='portfolio'
                                active={activeItem === 'portfolio'}
                                onClick={(name) => {
                                    this.handleItemClick(name);
                                    this.portfolioRef.current.scrollIntoView({ behavior: 'smooth'});
                                }}
                            >
                                PORTFOLIO
                            </Menu.Item>
                            <Menu.Item
                                name='contact'
                                active={activeItem === 'contact'}
                                onClick={(name) => {
                                    this.handleItemClick(name);
                                    this.contactRef.current.scrollIntoView({ behavior: 'smooth'});
                                }}
                            >
                                CONTACT
                            </Menu.Item>
                        </Menu>
                    </Sticky>

                    <div ref={this.aboutRef}>
                        <Container attached='bottom'>
                            <Responsive as={Container}>
                                <About/>
                            </Responsive>
                        </Container>
                    </div>
                    {this._renderDivider()}

                    <div ref={this.portfolioRef}>
                        <Container attached='bottom'>
                            <Responsive as={Container}>
                                <Portfolio/>
                            </Responsive>
                        </Container>
                    </div>
                    {this._renderDivider()}
                    
                    <div ref={this.contactRef}>
                        <Container attached='bottom'>
                            <Responsive as={Container}>
                                <Contact/>
                            </Responsive>
                        </Container>
                    </div>

                </div>

            </div>
        )
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

    _renderDivider = () => {
        return (
            <Divider horizontal>
                <Header size='medium'>
                    <Icon name='linkify'/>
                </Header>
            </Divider>
        )
    }
}

export default Intro;