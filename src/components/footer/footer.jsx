import React, { Component } from 'react';
import {Link } from "react-router-dom";
import {Container, Row, Col, Media } from "reactstrap";
import  FeatherIcon  from 'feather-icons-react';

//Import Footer Links
import FooterLinks from './foot-links';


class Footer extends Component {
  state = {
    links: [
      { link: "#", title: "About Us" },
      { link: "#", title: "Blog" },
      { link: "#", title: "Find A Doctor" },
    ],
    links2: [
      { link: "#", title: "Pricing" },
      { link: "#", title: "Register" },
      { link: "#", title: "Forum" },
      { link: "#", title: "Login" }
    ],
  };
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row>
              <Col lg={4} sm={6}>
                <div>
                  <h5 className="mb-4 footer-list-title">About Confyde</h5>
                  <p>
                    Confyde is an health care solution provider. We provide
                    affordable quality health care services{" "}
                  </p>
                </div>
              </Col>
              <Col lg={{ size: 2, offset: 1 }} sm={6}>
                <div>
                  <h5 className="mb-4 footer-list-title">Company</h5>
                  <ul className="list-unstyled footer-list-menu">
                    {this.state.links.map((fLink, key) => (
                      <li key={key}>
                        <Link to={fLink.link}>{fLink.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col lg={2} sm={6}>
                <div>
                  <h5 className="mb-4 footer-list-title">More Info</h5>
                  <ul className="list-unstyled footer-list-menu">
                    {this.state.links2.map((fLink, key) => (
                      <li key={key}>
                        <Link to={fLink.link}>{fLink.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              <Col lg={3} sm={6}>
                <div>
                  <h5 className="mb-4 footer-list-title">Contact</h5>

                  <div>
                    <Media>
                      <i>
                        <FeatherIcon
                          icon="map-pin"
                          className="icon-dual-light icons-sm mt-1 mr-2"
                        />
                      </i>
                      <Media body>
                        <p>423, chevron drive, Lekki, Lagos, Nigeria</p>
                      </Media>
                    </Media>
                    <Media>
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="icon-dual-light icons-sm mt-1 mr-2"
                        />
                      </i>
                      <Media body>
                        <p>info@confyde.com</p>
                      </Media>
                    </Media>
                    <Media>
                      <i>
                        <FeatherIcon
                          icon="phone"
                          className="icon-dual-light icons-sm mt-1 mr-2"
                        />
                      </i>
                      <Media body>
                        <p>+234 081-456-789</p>
                      </Media>
                    </Media>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
        {/* Render footer links */}
        <FooterLinks />
      </>
    );
  }
}

export default Footer;
