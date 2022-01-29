import React, { Component } from "react";
import {
  Row,
  Container,
  Col,
  Button,
  CardDeck,
  Card,
  CardImg,
  CardText,
  CardLink,
  CardBody,
} from "reactstrap";
import  FeatherIcon  from "feather-icons-react";

//Import Images
import img1 from "../../assets/images/blog/Mask Group1.png"
import img2 from "../../assets/images/blog/Mask Group.png";
import img3 from "../../assets/images/blog/Mask Group-3.png";
import img4 from "../../assets/images/blog/element.png";
import SectionTitle from "../common/section-title";

class Blog extends Component {
  render() {
    return (
      <>
        <section className="section" id="clients">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center mb-5">
                  <SectionTitle
                    subtitle="Blog Section"
                    title="Checkout our latest blog post"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <CardDeck>
                <span className="">
                  <img src={img4} alt="new" />
                </span>
                <Card>
                  <CardImg top width="100%" src={img2} alt="Card image cap" />
                  <CardBody>
                    <h5>Why do colds and flu strike in winter?</h5>
                    <CardText>
                      The cold and flu season is starting to rear its ugly head,
                      and we cannot seem to get away from the coughing.
                    </CardText>

                    <CardLink to="#" href="#" className="text-primary">
                      Read More
                      <i>
                        <FeatherIcon icon="arrow-right" className="mr-2" />
                      </i>{" "}
                    </CardLink>
                  </CardBody>
                </Card>
                <Card>
                  <CardImg top width="100%" src={img1} alt="health image" />
                  <CardBody>
                    <h5>Herbal medicine for that are save for consumption</h5>
                    <CardText>
                      The scientific jury is still out concerning natural
                      antibiotics which is used for treating
                    </CardText>
                    <CardLink to="#" href="#" className="text-primary">
                      Read More
                      <i>
                        <FeatherIcon icon="arrow-right" className="mr-2" />
                      </i>{" "}
                    </CardLink>
                  </CardBody>
                </Card>
                <Card>
                  <CardImg top width="100%" src={img3} alt="Health image" />
                  <CardBody>
                    <h5>Natural care for healthy facial skin</h5>
                    <CardText>
                      Eat fresh fruits, greens, sufficient protein and vitamins.
                      A diet rich in vitamin low-sugar diet.
                    </CardText>
                    <CardLink to="#" href="#" className="text-primary">
                      Read More
                      <i>
                        <FeatherIcon icon="arrow-right" className="mr-2" />
                      </i>{" "}
                    </CardLink>
                  </CardBody>
                </Card>
              </CardDeck>
            </Row>
          </Container>
        </section>
        <div className="text-center mb-5">
          <Button
            outline
            color="primary"
            style={{ borderRadius: "20px", width: "170px", height: "40px" }}
          >
            View More
          </Button>
        </div>
      </>
    );
  }
}

export default Blog;
