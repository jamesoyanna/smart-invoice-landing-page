import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Button} from "reactstrap";

import AskQuestionBox from "./askQuestionBox";
//Import Images
import questionImg from "../../assets/images/askQuestion/askQuestion.png";


class AskQuestion extends Component {
        state = {
            questions: [
                { title: "Pregnancy related issues" },
                { title: "COVID-19 health concerns" },
                { title: "Child maternity healthcare" },
                { title: "Anti-natal care" },
                { title: "Mental Health cases" },
                { title: "Injury & violence" },
            ],
        }

    render() {
        return (
            <>
                <section className="section" id="features">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={8}> 
                            <div className="text-center mb-5">
                                    <Button outline color="primary" style={{ borderRadius: "20px", width: "170px", height: "40px"}}
                                 >
                        Learn More
                      </Button>
                         </div>
                        </Col>
                         </Row>
                        
                        <Row> 
                            <Col lg={5}>
                                <div>
                                <AskQuestionBox  title="Ask A Question about any health concern" renderQuestions={this.state.questions} desc="We understand your health needs and we are very open to any of your health related questions." link="#" />
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