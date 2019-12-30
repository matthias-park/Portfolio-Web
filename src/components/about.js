import React from 'react';
import { Icon, Header, Segment, Responsive, Container, Grid, Divider } from 'semantic-ui-react';
import '../styles/about.css';

class About extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className='about'>
                <Responsive as={Container}>
                    <Header className='titleHeader' textAlign='center' size='huge'>ABOUT</Header>
                    <Grid columns='four'>
                        <Grid.Row>
                            <Grid.Column>
                                <Header size='large' icon textAlign='center'>
                                    <Icon name='clock outline' />
                                        Fast
                                    <Header.Subheader>
                                        Load fast without lag, provides the best UX
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header size='large' icon textAlign='center'>
                                    <Icon name='line graph' />
                                        Comprehensive
                                    <Header.Subheader>
                                        I loved to re-structure data for comprehensive dash-board
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h2' icon textAlign='center'>
                                    <Icon name='shield alternate' />
                                        Security
                                    <Header.Subheader>
                                        Keep secret between clients are the essential part of modern websites
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h2' icon textAlign='center'>
                                    <Icon name='handshake outline' />
                                        Dynamic
                                    <Header.Subheader>
                                        Nowadays, applications are alive.
                                        I animate apps to dynamic
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Responsive>
            </Container>
        )
    }
}

export default About