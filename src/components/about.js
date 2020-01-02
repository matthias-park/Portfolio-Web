import React from 'react';
import { Icon, Header, Image, Responsive, Container, Grid, Card, Progress } from 'semantic-ui-react';
import '../styles/about.css';

class About extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const {styles} = this.props;
        return (
            <Container className='about'>
                <Responsive as={Container}>
                    <Header className='titleHeader' textAlign='center' size={styles.headerFontSize}>ABOUT</Header>
                    <Grid>
                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <Header size={styles.contentFontSize} icon textAlign='center'>
                                    <Icon name='clock outline' />
                                        Fast
                                    <Header.Subheader>
                                        Load fast without lag, provides the best UX
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header size={styles.contentFontSize} icon textAlign='center'>
                                    <Icon name='line graph' />
                                        Comprehensive
                                    <Header.Subheader>
                                        I loved to re-structure data for comprehensive dash-board
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header size={styles.contentFontSize} icon textAlign='center'>
                                    <Icon name='shield alternate' />
                                        Security
                                    <Header.Subheader>
                                        Keep secret between clients are the essential part of modern websites
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header size={styles.contentFontSize} icon textAlign='center'>
                                    <Icon name='mouse pointer' />
                                        Dynamic
                                    <Header.Subheader>
                                        Nowadays, applications are alive.<br />
                                        I animate apps to dynamic
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column textAlign='center'>
                                  <Container>
                                  <Image src={require('../assets/images/01.jpg')} size={styles.contentFontSize} wrapped ui={false} bordered/>
                                      <Header size={styles.headerFontSize}>
                                        Who am I?
                                        <Header.Subheader>
                                            I'm the Front-End Developer in Seoul where the city is capitol of South Korea. <br/>
                                            I've loved handling raw data to suitable information for user e.g. table, graph and etc... <br />
                                            Let's make new experience.
                                        </Header.Subheader>
                                      </Header>
                                  </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <Progress value='9' total='10' progress='percent' active color='olive'>HTML</Progress>
                                <Progress value='6' total='10' progress='percent' active color='olive'>CSS</Progress>
                                <Progress value='8' total='10' progress='percent' active color='olive'>JAVASCRIPT</Progress>
                                <Progress value='7' total='10' progress='percent' active color='olive'>TYPESCRIPT</Progress>
                                <Progress value='7' total='10' progress='percent' active color='olive'>REACT</Progress>
                                <Progress value='8' total='10' progress='percent' active color='olive'>ANGULAR</Progress>
                                <Progress value='4' total='10' progress='percent' active color='olive'>NODE.js</Progress>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Responsive>
            </Container>
        )
    }
}

export default About