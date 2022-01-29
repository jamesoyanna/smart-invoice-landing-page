import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
//Import Images
import bg1 from "../../assets/images/bg-1.png";
import homeImg from "../../assets/images/header.png";
class BannerSection extends Component {
  render() {
    return (
      <>
        <section
          className="hero-section"
          id="home"
          style={{ background: `url(${bg1}) center center ` }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="hero-wrapper mb-4">
                  <h1 className="hero-title mb-4">
                    We are the leading healthcare solution provider{" "}
                    <span className="text-primary">in Africa</span>
                  </h1>

                  <p>Get Affordable quality health care. Speak to a doctor.</p>

                  <div className="mt-4 rounded">
                    <Link
                      to="/getting-started"
                      className="btn btn-primary mt-2 mr-2"
                      style={{ borderRadius: "20px" }}
                    >
                      Geting Started
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={6} sm={8}>
                <div className="home-img mt-5 mt-lg-0">
                  <img
                    src={homeImg}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default BannerSection;
