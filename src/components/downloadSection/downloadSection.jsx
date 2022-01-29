import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import DownloadSectionBox from "./downloadSectionBox";
//Import Images
import downloadImg from "../../assets/images/download/download.png";

class DownloadSection extends Component {
    

    render() {
        return (
            <>
                <section className="section" id="features">
                    <Container>
                        <Row>
                           
                            <Col lg={7} sm={8} className="ml-lg-auto">
                                <Card className="border-0 border-light shadow-none mt-5 mt-lg-0">
                                    <CardBody className="bg-light">
                                        <div className="box-shadow">
                                            <img src={downloadImg} alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={5}>
                                <div>
                                    <DownloadSectionBox title="Downlaod Our Moblie App" desc="Get full access to our health service.Download our mobile app. You can now book a counselling session with our expert medical doctors" link="#" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default DownloadSection;