import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

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
          title: "Create multicurrency invoices",
          desc:
            "Send invoices to your customers in their currency, make base currency adjustments, and easily analyze the revalued balances.",
        },
        {
          icon: "book",
          title: "Print and share invoice with ease",
          desc: "Sharing invoices is effortless. Print out a copy, or simply email them.",
        },
        {
          icon: "info",
          title: "Real-time invoice reports",
          desc: "Run real-time reports on your sales, expenses and tax summary.",
        },
        {
          icon: "activity",
          title: "Your Finances In One Place",
          desc: "Enjoy a fully-featured suite of customizable business reports and summaries",
        },
      ],
    };

  render() {
    return (
      <>
        <section className="section bg-light" id="services">
          <Container>
            <SectionTitle
              subtitle="Beautiful invoicing software"
              title="Invoice, the smart way"
              desc="Invoice Software that lets you send professional invoices, automate payment reminders, and accept card payments online, faster than ever!."
            />
            <Row>
              <ServiceBox services={this.state.services} />
            </Row>
            <Row className="mt-4">
              <Col lg={12}>
                <div className="text-center">
                   <a className="btn btn-primary" href="https://app-smart-invoice.netlify.app/login" target="_blank" rel="noreferrer noopener">
                    Geting Started
                 </a>
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
