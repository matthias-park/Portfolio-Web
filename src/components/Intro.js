import React, {createRef} from 'react';
import '../styles/intro.css';
import { Header, Button, Grid, Container, Menu, Sticky, Divider, Icon } from 'semantic-ui-react';
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
        // console.log(this.props);
        return (
            
            <div>
                <div ref={this.homeRef}>
                    <Container className='intro'>
                            <div className="bg"></div>
                            <div className="bg bg2"></div>
                            <div className="bg bg3"></div>
                            <div className="content">
                                <Header size={styles.headerFontSize}>Hi I'm Junsoo Park</Header>
                                <Header size={styles.headerFontSize} style={{marginBottom: '10%'}}>I'm front end developer</Header>
                                <Button 
                                    color='olive' 
                                    className='glow-on-hover' 
                                    onClick={() => {
                                    this.aboutRef.current.scrollIntoView({ behavior: 'smooth'});
                                }}>
                                    Go my work
                                </Button>
                            </div>
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
                                name='about'
                                active={activeItem === 'about'}
                                onClick={(name) => {
                                    this.handleItemClick(name);
                                    this.aboutRef.current.scrollIntoView({ behavior: 'smooth'});
                                }}
                            >
                                ABOUT
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
                                <About styles={styles}/>
                        </Container>
                    </div>
                    {this._renderDivider()}

                    <div ref={this.portfolioRef}>
                        <Container attached='bottom'>
                                <Portfolio styles={styles}/>
                        </Container>
                    </div>
                    {this._renderDivider()}
                    
                    <div ref={this.contactRef}>
                        <Container attached='bottom'>
                                <Contact styles={styles}/>
                        </Container>
                    </div>
                </div>
                {this._renderDivider(true)}
                <div>
                    <Container className='footer'>
                                <nav>
                                    <a href='https://github.com/matthias-park' target="_blank"><li>github</li></a>
                                    <a href='https://www.linkedin.com/in/junsoo-park-b19310173/' target="_blank"><li>linked-in</li></a>
                                    <a href='https://www.rocketpunch.com/@matthiaspark0514' target="_blank"><li>rocket-punch</li></a>
                                </nav>
                    </Container>
                </div>

            </div>
        )
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

    _renderDivider = (footer) => {
        const {styles} = this.props
        if ( footer ) {
            return (
                <Divider horizontal>
                    <Header 
                        size={styles.contentFontSize}
                        onClick={(name) => {
                            this.handleItemClick(name);
                            this.homeRef.current.scrollIntoView({ behavior: 'smooth'});
                        }}
                    >
                            <Button 
                                color='olive' 
                                className='glow-on-hover' 
                            >
                                <Icon name='angle double up' inverted size={styles.contentFontSize}/>
                            </Button>

                    </Header>
                </Divider>
            )
        } else {
            return (
                <Divider horizontal>
                    <Header size={styles.contentFontSize}>
                        <Icon name='linkify'/>
                    </Header>
                </Divider>
            )
        }
    }
}

export default Intro;