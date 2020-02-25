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
import { withTranslation } from "react-i18next";
import Carousel from "semantic-ui-carousel-react";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { styles, i18n } = this.props;
    return (
      <Container className="portfolio">
        <Responsive as={Container}>
          <Header
            className="titleHeader"
            textAlign="center"
            size={styles.headerFontSize}
          >
            {i18n.t("PORTFOLIO")}
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
              <Tab.Pane attached={true} key={i} textAlign="center">
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
    let items = [];
    contents.forEach(it => {
      const temp = {
        render: () => {
          return (
            <figure
              className="imghvr-blur"
              key={it.title}
              style={{ marginTop: "2em" }}
            >
              <Image
                src={it.image}
                alt="sorry"
                size={styles.contentFontSize === "medium" ? "huge" : "medium"}
              />
              <figcaption>
                {styles.contentFontSize === "medium" ? (
                  <Header size={styles.headerFontSize} className="modalHeader">
                    {it.title}
                  </Header>
                ) : (
                  ""
                )}
                {styles.contentFontSize === "medium" ? (
                  <Header
                    className="subHeader"
                    size={styles.contentFontSize}
                    color="teal"
                  >
                    {it.language} / {it.framework}
                  </Header>
                ) : (
                  ""
                )}

                {this._renderModal(it)}
              </figcaption>
            </figure>
          );
        }
      };
      items.push(temp);
    }, []);

    return (
      <div
        className={
          styles.contentFontSize === "medium"
            ? "desktop-carousel"
            : "mobile-carousel"
        }
      >
        <Carousel
          elements={items}
          animation="slide left"
          showNextPrev={true}
          showIndicators={true}
        />
      </div>
    );
  };

  _renderModal = el => {
    const { styles, i18n } = this.props;
    return (
      <Modal
        trigger={
          <Button color="teal" size={styles.contentFontSize}>
            Show More!
          </Button>
        }
        closeIcon={styles.contentFontSize === "medium" ? true : false}
      >
        {styles.contentFontSize === "medium" ? (
          <Modal.Header className="modal-header">
            {el.language} / {el.framework}
          </Modal.Header>
        ) : (
          ""
        )}

        <Modal.Content image>
          <Image
            wrapped
            size={styles.contentFontSize === "medium" ? "medium" : "big"}
            src={el.image}
          />
          <Modal.Description>
            <Header size={styles.headerFontSize}>
              {el.title}
              {"  "}
              {el.url !== "closed" ? (
                <a href={el.url} target="_blank" className="link-button">
                  <Button icon color="teal">
                    <Icon name="world" />
                  </Button>
                </a>
              ) : (
                ""
              )}
            </Header>
            <Divider />
            {i18n.language === "en" ? el.description : el.descriptionKor}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  };
}

export default withTranslation()(Portfolio);
