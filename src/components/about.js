import React from "react";
import { withTranslation } from "react-i18next";
import {
  Icon,
  Header,
  Image,
  Responsive,
  Container,
  Grid,
  Card,
  Progress
} from "semantic-ui-react";
import "../styles/about.css";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { styles, i18n } = this.props;
    return (
      <Container className="about">
        <Responsive as={Container}>
          <Header
            className="titleHeader"
            textAlign="center"
            size={styles.headerFontSize}
          >
            {i18n.t("ABOUT")}
          </Header>
          <Grid>
            {styles.contentFontSize === "medium" ? this._renderStrength() : ""}
            <Grid.Row columns={2}>
              <Grid.Column textAlign="center">
                <Container>
                  {styles.contentFontSize === "medium" ? (
                    <Image
                      src={require("../assets/images/01.jpg")}
                      wrapped
                      ui={false}
                      bordered
                    />
                  ) : (
                    ""
                  )}

                  <Header size={styles.headerFontSize}>
                    {i18n.t("Who am I?")}
                    <Header.Subheader size={styles.contentFontSize}>
                      {i18n.t(
                        `I'm the Front-End Developer in Seoul where the city is capitol of South Korea.`
                      )}{" "}
                      <br />
                      {i18n.t(
                        `I've loved handling raw data to suitable information for user e.g. table, graph and etc...`
                      )}{" "}
                      <br />
                      {i18n.t(`Let's make new experience.`)}
                    </Header.Subheader>
                  </Header>
                </Container>
              </Grid.Column>
              <Grid.Column>
                <Progress
                  value="9"
                  total="10"
                  progress="percent"
                  active
                  color="olive"
                  size={styles.contentFontSize}
                >
                  HTML
                </Progress>
                <Progress
                  value="6"
                  total="10"
                  progress="percent"
                  active
                  color="olive"
                  size={styles.contentFontSize}
                >
                  CSS
                </Progress>
                <Progress
                  value="8"
                  total="10"
                  progress="percent"
                  active
                  color="olive"
                  size={styles.contentFontSize}
                >
                  JAVASCRIPT
                </Progress>
                <Progress
                  value="7"
                  total="10"
                  progress="percent"
                  active
                  color="olive"
                  size={styles.contentFontSize}
                >
                  TYPESCRIPT
                </Progress>
                <Progress
                  value="7"
                  total="10"
                  progress="percent"
                  active
                  color="olive"
                  size={styles.contentFontSize}
                >
                  REACT
                </Progress>
                <Progress
                  value="8"
                  total="10"
                  progress="percent"
                  active
                  color="olive"
                  size={styles.contentFontSize}
                >
                  ANGULAR
                </Progress>
                <Progress
                  value="4"
                  total="10"
                  progress="percent"
                  active
                  color="olive"
                  size={styles.contentFontSize}
                >
                  NODE.js
                </Progress>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    );
  }

  _renderStrength = () => {
    const { styles, i18n } = this.props;
    return (
      <Grid.Row columns={4}>
        <Grid.Column>
          <Header size={styles.contentFontSize} icon textAlign="center">
            <Icon name="clock outline" />
            {i18n.t("Fast")}
            <Header.Subheader size={styles.contentFontSize}>
              {i18n.t("Load fast without lag, provides the best UX")}
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header size={styles.contentFontSize} icon textAlign="center">
            <Icon name="line graph" />
            {i18n.t("Comprehensive")}
            <Header.Subheader size={styles.contentFontSize}>
              {i18n.t(
                "I loved to re-structure data for comprehensive dash-board"
              )}
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header size={styles.contentFontSize} icon textAlign="center">
            <Icon name="shield alternate" />
            {i18n.t("Security")}
            <Header.Subheader size={styles.contentFontSize}>
              {i18n.t(
                "Keep secret between clients are the essential part of modern websites"
              )}
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header size={styles.contentFontSize} icon textAlign="center">
            <Icon name="mouse pointer" />
            {i18n.t("Dynamic")}
            <Header.Subheader size={styles.contentFontSize}>
              {i18n.t("Nowadays, applications are alive.")}
              <br />
              {i18n.t("I animate apps to dynamic")}
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    );
  };
}

export default withTranslation()(About);
