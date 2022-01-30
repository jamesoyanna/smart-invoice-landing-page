import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import logo from "../../assets/images/logo/smart-lgo.png";


 


class FooterLinks extends Component {
  render() {
    return (
      <>
        <section style={{background: "#fff"}} className="py-3">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="float-sm-left">
                  <Link to="#">
                    <img src={logo} alt="" height="45" />
                  </Link>
                </div>
                <div className="float-sm-right mt-4 mt-sm-0">
                  <p className="copyright-desc text-dark mb-0">
                    {new Date().getFullYear()} © Smart Invoice. All rights Reserved 
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default FooterLinks;
