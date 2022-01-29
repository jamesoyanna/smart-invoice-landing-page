import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
//Import service box
import ServiceBox from "../services/service-box";

class Services extends Component {
     state = {
      services: [
        {
          icon: "search",
          title: "Grow your revenue",
          desc: "Easily grow your revenue. With Invoice, staying on top of your business financing has never been easier.",
        },
        {
          icon: "message-square",
          title: "Get more productive",
          desc: "Set up automatic payment reminders to gently remind clients when a payment is coming up, due, or late.",
        },
        {
          icon: "map-pin",
          title: "Locate Us",
          desc:
            "Convenient locations with drop-in labs across Africa",
        },
        {
          icon: "book",
          title: "Book an appointment",
          desc: "Easy appointment booking with a doctor in seconds.",
        },
        {
          icon: "info",
          title: "Diagnosis & test",
          desc: "Easy access to COVID-19 testing and care.",
        },
        {
          icon: "activity",
          title: "Rapid response",
          desc: "Our experts will help get quality healthcare",
        },
      ],
    };

  render() {
    return (
      <>
        <section className="section bg-light" id="services">
          <Container>
            <SectionTitle
              subtitle="Services"
              title="What We do"
              desc="We provide quality health care service using innovative technology."
            />
            <Row>
              <ServiceBox services={this.state.services} />
            </Row>
            <Row className="mt-4">
              <Col lg={12}>
                <div className="text-center">
                  <Link to="#" className="btn btn-primary">
                    View more
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
export default Services;
