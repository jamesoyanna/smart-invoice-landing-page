import React from 'react';
import { Container, Row, Col } from "reactstrap";
//Import Images
import bg1 from "../../assets/images/bg-1.png";
import homeImg from "../../assets/images/invoice.png";

const Bannersection = () => {
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
                   Send invoices online and get {" "}
                    <span className="text-primary">paid in minutes.</span>
                  </h1>

                  <p>Professional and Easy-to-use Online Invoicing Software for Startups, Business Owners and Freelancers.</p>

                  <div className="mt-4 rounded">
                 <a style={{ borderRadius: "20px" }} className="btn btn-primary mt-2 mr-2" href="https://app-smart-invoice.netlify.app/login" target="_blank" rel="noreferrer noopener">
                    Geting Started
                 </a>

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

export default Bannersection;
