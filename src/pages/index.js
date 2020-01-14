import React from "react";
import Intro from "../components/Intro";
import { withTranslation } from "react-i18next";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    const { windowWidth } = this.state;

    const menuCollapsed = windowWidth < 1100;

    const styles = {
      menuCollapsed,
      headerFontSize: windowWidth > 500 ? "huge" : "small",
      contentFontSize: windowWidth > 500 ? "large" : "tiny"
    };
    return <Intro styles={styles} />;
  }
}

export default withTranslation()(Index);
