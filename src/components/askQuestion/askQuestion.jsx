import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody} from "reactstrap";

import AskQuestionBox from "./askQuestionBox";
//Import Images
import questionImg from "../../assets/images/askQuestion/faetures.svg";


class AskQuestion extends Component {
        state = {
            questions: [
                { title: "Brand your invoice" },
                { title: "View invoice history and keep track of changes" },
                { title: "Track invoice and payments with ease" },
                { title: "Need a physical copy? Invoices can be printed or downloaded as PDF" },
                { title: "Send invoice to clients via E-mail with ease" },
                { title: "Go Paperless! Get Paid Faster" },
            ],
        }

    render() {
        return (
            <>
                <section className="section" id="features">
                    <Container>
                        <Row className="justify-content-center">
                           
                         </Row>
                        
                        <Row> 
                            <Col lg={5}>
                                <div>
                                <AskQuestionBox  title="Amazing features you can use" renderQuestions={this.state.questions} desc="Your Business. Your Clients. One Free, Powerful Invoicing Platform." link="#" />
                                </div>
                            </Col>
                            <Col lg={7} sm={8} className="ml-lg-auto">
                                <Card className="border-0 border-light shadow-none mt-5 mt-lg-0">
                                    <CardBody className="bg-light">
                                        <div className="box-shadow">
                                            <img src={questionImg} alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default AskQuestion;