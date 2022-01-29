import React, { Component } from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Import Section Title
import SectionTitle from "../common/section-title";
import TestimonialBox from "./testimonialBox";

//Import Images

class Testimonial extends Component {
  state = {
    clients: [
      {
        name: "James Oyanna",
        post: "Onesphere Solutions Ltd.",
        desc: "I am proud user of confyde health care service. Great one from the team",
      },
      {
        name: "George",
        post: "Confyde User",
        desc:
          "I had the best quality healthcare service from confyde.Good service ",
      },
      {
        name: "Faithful Anere",
        post: "DevOps Engineer",
        desc:
          "Confyde doctors are the best. They attend to clients promptly. Thank you for your service",
      },
      {
        name: "Chimeze Solomon",
        post: "Frontend Developer",
        desc:
          "Simply an awesome maternity service confyde offered my family. I would like to patronize them again.",
      },
    ],

    responsive: {
      576: {
        items: 2,
      },
    },
  };

  render() {
    return (
      <>
        <section className="section bg-light" id="clients">
          <Container>
            <SectionTitle
              subtitle="Testimonial"
              title="What our Client Say"
              desc="Our happy clients are proud to give us a good remarks."
            />

            <Row>
              <Col lg={12}>
                <h5 className="mb-4">
                  <i className="mdi mdi-format-quote-open text-primary h1 mr-1"></i>{" "}
                  250 + Satisfied Client
                </h5>

                <OwlCarousel
                  className="owl-theme testi-carousel"
                  id="testi-carousel"
                  items={1}
                  loop={true}
                  margin={10}
                  nav={true}
                  responsive={this.state.responsive}
                >
                  <TestimonialBox clients={this.state.clients} />
                </OwlCarousel>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Testimonial;
