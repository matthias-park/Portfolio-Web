import React, { createRef } from "react";
import { withTranslation } from "react-i18next";
import "../styles/intro.css";
import {
  Header,
  Button,
  Container,
  Menu,
  Sticky,
  Divider,
  Icon,
  Flag,
  Label
} from "semantic-ui-react";
import About from "../components/about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import i18n from "../i18n";

class Intro extends React.Component {
  state = {
    activeItem: null
  };

  constructor(props) {
    super(props);
    this.aboutRef = createRef();
    this.homeRef = createRef();
    this.portfolioRef = createRef();
    this.contactRef = createRef();
    this.menuRef = createRef();
  }

  handleItemClick = name => this.setState({ activeItem: name });

  handleLanguageChange(data) {
    this.props.i18n.changeLanguage(data);
  }

  render() {
    const { activeItem } = this.state;
    const { styles, i18n } = this.props;
    return (
      <div>
        <div ref={this.homeRef}>
          <Container className="intro">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
              <Label
                basic
                color="green"
                pointing="below"
                style={{ display: "block" }}
              >
                {this.props.i18n.language === "en"
                  ? "한국어로 둘러보기"
                  : "Look around with English"}
              </Label>
              <Flag name="us" onClick={() => this.handleLanguageChange("en")} />
              <Flag name="kr" onClick={() => this.handleLanguageChange("kr")} />
              <Header size={styles.headerFontSize}>
                {i18n.t(`Hi I'm Junsoo Park`)}
              </Header>
              <Header
                size={styles.headerFontSize}
                style={{ marginBottom: "10%" }}
              >
                {i18n.t(`I'm front end developer`)}
              </Header>
              <Button
                color="olive"
                className="glow-on-hover"
                onClick={() => {
                  this.aboutRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {i18n.t(`Go my work`)}
              </Button>
            </div>
          </Container>
        </div>

        <div ref={this.menuRef}>
          <Sticky context={this.menuRef}>
            <Menu attached="top" borderless>
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={name => {
                  this.handleItemClick(name);
                  this.homeRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {i18n.t("HOME")}
              </Menu.Item>
              <Menu.Item
                name="about"
                active={activeItem === "about"}
                onClick={name => {
                  this.handleItemClick(name);
                  this.aboutRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {i18n.t("ABOUT")}
              </Menu.Item>
              <Menu.Item
                name="portfolio"
                active={activeItem === "portfolio"}
                onClick={name => {
                  this.handleItemClick(name);
                  this.portfolioRef.current.scrollIntoView({
                    behavior: "smooth"
                  });
                }}
              >
                {i18n.t("PORTFOLIO")}
              </Menu.Item>
              <Menu.Item
                name="contact"
                active={activeItem === "contact"}
                onClick={name => {
                  this.handleItemClick(name);
                  this.contactRef.current.scrollIntoView({
                    behavior: "smooth"
                  });
                }}
              >
                {i18n.t("CONTACT")}
              </Menu.Item>
            </Menu>
          </Sticky>

          <div ref={this.aboutRef}>
            <Container attached="bottom">
              <About styles={styles} />
            </Container>
          </div>
          {this._renderDivider()}

          <div ref={this.portfolioRef}>
            <Container attached="bottom">
              <Portfolio styles={styles} />
            </Container>
          </div>
          {this._renderDivider()}

          <div ref={this.contactRef}>
            <Container attached="bottom">
              <Contact styles={styles} />
            </Container>
          </div>
        </div>
        {this._renderDivider(true)}
        <div>
          <Container className="footer" textAlign="center">
            <a href="https://www.github.com/matthias-park" target="_blank">
              <Button circular color="grey" icon="github" />
            </a>
            <a href="https://github.com/matthias-park" target="_blank">
              <Button circular color="linkedin" icon="linkedin" />
            </a>
            <a
              href="https://www.rocketpunch.com/@matthiaspark0514"
              target="_blank"
            >
              <Button circular color="facebook" icon="rocket" />
            </a>

            <Header size={styles.contentFontSize}>
              <Header.Subheader>Copyright © 2020 JUNSOO PARK</Header.Subheader>
            </Header>
          </Container>
        </div>
      </div>
    );
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

  _renderDivider = footer => {
    const { styles } = this.props;
    if (footer) {
      return (
        <Divider horizontal>
          <Header
            size={styles.contentFontSize}
            onClick={name => {
              this.handleItemClick(name);
              this.homeRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Button color="olive" className="glow-on-hover">
              <Icon
                name="angle double up"
                inverted
                size={styles.contentFontSize}
              />
            </Button>
          </Header>
        </Divider>
      );
    } else {
      return (
        <Divider horizontal>
          <Header size={styles.contentFontSize}>
            <Icon name="linkify" />
          </Header>
        </Divider>
      );
    }
  };
}

export default withTranslation()(Intro);
