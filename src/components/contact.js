import React from 'react';
import { Responsive, Container, Form, Header, Grid, Message } from 'semantic-ui-react';
import '../styles/contact.css'
import emailjs from 'emailjs-com';

class Contact extends React.Component {



    constructor(props) {
        super(props);

        this.state = {};
    }

    sendEmail = async(e) => {
        e.persist();
        const elements = e.target.elements;
        const body = {
            [elements[0].name]: elements[0].value,
            [elements[1].name]: elements[1].value,
            [elements[2].name]: elements[2].value,

        }

        await emailjs.send('kougayun@gmail.com', 'template_B15aK2Nu', body, 'user_GO1favXXNb0NmVIXibabG')
            .then((result) => {
                this.setState({
                    sendEmail: true
                })
            }, (error) => {
                this.setState({
                    sendEmail: false,
                    errorMessage: error
                })
                console.log(this.state)
            })
    }


    render = () => {
        const {styles} = this.props
        const {sendEmail, errorMessage} = this.state;
        return (
            <Container className='contact'>
                <Responsive as={Container}>
                    <Header className='titleHeader' textAlign='center' size={styles.headerFontSize}>CONTACT</Header>
                    <Grid columns={3}>
                        <Grid.Row>
                            <Grid.Column></Grid.Column>
                            <Grid.Column>
                                <Form className='contact-form' onSubmit={this.sendEmail}>
                                    <Form.Input name='from_name' placeholder='Name'/>
                                    <Form.Input required name='reply_to' placeholder='Enter email'/>
                                    <Form.TextArea required name='message' placeholder=' Your Message'/>
                                    <Form.Button>Submit</Form.Button>
                                </Form>
                                {this._renderMessage(sendEmail, errorMessage)}
                            </Grid.Column>
                            <Grid.Column></Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Responsive>
            </Container>
        );
    }

    _renderMessage = (res, err) => {
        if (res) {
            return (
                    <Message 
                        success
                        header='Success'
                        content='Your message is sent successfully I will reply it as soon as possible'
                    />
            )
        } 
        if (res === false) {
            return (
                <Message negative>
                <Message.Header>Failed</Message.Header>
                <p>Please mail me directly -> matthiaspark0514@gmail.com</p>
                </Message>
            )
        }
    }

}

export default Contact;