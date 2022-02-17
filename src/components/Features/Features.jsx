import React from 'react';
import { Container, Row, Col, Card, CardBody} from "reactstrap";

import FeatureBox from "./FeatureBox";
//Import Images
import featureImg from "../../assets/images/askQuestion/faetures.svg";

const Features = () => {

  const state =
      {
            questions: [
                { title: "Brand your invoice" },
                { title: "View invoice history and keep track of changes" },
                { title: "Track invoice and payments with ease" },
                { title: "Need a physical copy? Invoices can be printed or downloaded as PDF" },
                { title: "Send invoice to clients via E-mail with ease" },
                { title: "Go Paperless! Get Paid Faster" },
            ],
        }


    return (
         <>
        <section className="section" id="features">
                    <Container>
                        <Row className="justify-content-center">
                           
                         </Row>
                        
                        <Row> 
                            <Col lg={5}>
                                <div>
                                <FeatureBox  title="Amazing features you can use" renderQuestions={state.questions} desc="Your Business. Your Clients. One Free, Powerful Invoicing Platform." link="#" />
                                </div>
                            </Col>
                            <Col lg={7} sm={8} className="ml-lg-auto">
                                <Card className="border-0 border-light shadow-none mt-5 mt-lg-0">
                                    <CardBody className="bg-light">
                                        <div className="box-shadow">
                                            <img src={featureImg} alt="" className="img-fluid mx-auto d-block" />
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

export default Features;