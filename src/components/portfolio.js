import React from "react";
import {
  Container,
  Responsive,
  Tab,
  Header,
  Image,
  Modal,
  Button,
  Icon,
  Divider
} from "semantic-ui-react";
import "../styles/portfolio.css";
import "../styles/imagehover.css";
import portfolioBody from "../assets/portfolioJsonBody/portfolio";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { styles } = this.props;
    return (
      <Container className="portfolio">
        <Responsive as={Container}>
          <Header
            className="titleHeader"
            textAlign="center"
            size={styles.headerFontSize}
          >
            PORTFOLIO
          </Header>
          {this._renderTabs()}
        </Responsive>
      </Container>
    );
  }

  _renderTabs = () => {
    let newBody = portfolioBody;
    newBody.total = Object.values(portfolioBody).reduce((acc, it) => {
      return [...acc, ...it];
    }, []);
    newBody["total"] = [...new Set(newBody.total)];

    const panes = Object.entries(newBody)
      .reverse()
      .map(([key, value], i) => {
        return {
          menuItem: key,
          render: () => {
            return (
              <Tab.Pane attached={false} key={i} textAlign="center">
                {this._renderContents(value)}
              </Tab.Pane>
            );
          }
        };
      });

    return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
  };

  _renderContents = contents => {
    const { styles } = this.props;
    return contents.map((el, i) => {
      const imgUrl = `../assets/images/${el.image}.png`;
      return (
        <figure className="imghvr-blur" key={i}>
          <Image src={el.image} alt="sorry" size={styles.contentFontSize} />
          <figcaption>
            <Header size={styles.headerFontSize}>{el.title}</Header>
            <Header
              className="subHeader"
              size={styles.contentFontSize}
              color="teal"
            >
              {el.language} / {el.framework}
            </Header>
            {this._renderModal(el)}
          </figcaption>
        </figure>
      );
    });
  };

  _renderModal = el => {
    const { styles } = this.props;
    return (
      <Modal trigger={<Button color="teal">Show More!</Button>} closeIcon>
        <Modal.Header className="modal-header">
          {el.language} / {el.framework}
        </Modal.Header>
        <Modal.Content image>
          <Image wrapped size={styles.contentFontSize} src={el.image} />
          <Modal.Description>
            <Header size={styles.headerFontSize}>
              {el.title}
              {"  "}
              <a href={el.url} target="_blank" className="link-button">
                <Button icon color="teal">
                  <Icon name="world" />
                </Button>
              </a>
            </Header>
            <Divider />
            {el.description}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  };
}

export default Portfolio;
