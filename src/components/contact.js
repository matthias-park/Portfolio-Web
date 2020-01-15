import React from "react";
import {
  Responsive,
  Container,
  Form,
  Header,
  Grid,
  Message
} from "semantic-ui-react";
import "../styles/contact.css";
import emailjs from "emailjs-com";
import { withTranslation } from "react-i18next";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  sendEmail = async e => {
    e.persist();
    const elements = e.target.elements;
    const body = {
      [elements[0].name]: elements[0].value,
      [elements[1].name]: elements[1].value,
      [elements[2].name]: elements[2].value
    };

    await emailjs
      .send(
        "kougayun@gmail.com",
        "template_B15aK2Nu",
        body,
        "user_GO1favXXNb0NmVIXibabG"
      )
      .then(
        result => {
          this.setState({
            sendEmail: true
          });
        },
        error => {
          this.setState({
            sendEmail: false,
            errorMessage: error
          });
          console.log(this.state);
        }
      );
  };

  render = () => {
    const { styles, i18n } = this.props;
    const { sendEmail, errorMessage } = this.state;

    return (
      <Container className="contact">
        <Responsive as={Container}>
          <Header
            className="titleHeader"
            textAlign="center"
            size={styles.headerFontSize}
          >
            {i18n.t("CONTACT")}
          </Header>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={12}>
                <Form
                  className="contact-form"
                  onSubmit={this.sendEmail}
                  size={styles.headerFontSize}
                >
                  <Form.Input name="from_name" placeholder={i18n.t("Name")} />
                  <Form.Input
                    required
                    name="reply_to"
                    placeholder={i18n.t("Enter email")}
                  />
                  <Form.TextArea
                    required
                    name="message"
                    placeholder={i18n.t("Your Message")}
                  />
                  <Form.Button>{i18n.t("Submit")}</Form.Button>
                </Form>
                {this._renderMessage(sendEmail, errorMessage)}
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    );
  };

  _renderMessage = (res, err) => {
    const { i18n } = this.props;
    if (res) {
      return (
        <Message
          success
          header={i18n.t("Success")}
          content={i18n.t(
            "Your message is sent successfully I will reply it as soon as possible"
          )}
        />
      );
    }
    if (res === false) {
      return (
        <Message negative>
          <Message.Header>{i18n.t("Failed")}</Message.Header>
          <p>
            {i18n.t("Please mail me directly -> matthiaspark0514@gmail.com")}
          </p>
        </Message>
      );
    }
  };
}

export default withTranslation()(Contact);
