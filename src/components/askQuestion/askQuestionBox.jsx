import React from "react";
import { Row, Col, Button } from "reactstrap";
import FeatherIcon from "feather-icons-react";
const askQuestionBox = (props) => {
    return (
            <>
                <h3>{props.title}</h3>
                <p className="mb-4">{props.desc}</p>
                <Row>
                    {
                        props.renderQuestions.map((question, key) =>
                            <Col sm={6} key={key} >
                                <p>
                                    <i>
                                        <FeatherIcon icon="check" className="icon-dual-primary mr-2" />
                                    </i>{" "}
                                    {question.title}
                                </p>
                            </Col>
                        )
                    }
                </Row>

                <div className="mt-4">
                    <Button outline color="primary" style={{ borderRadius: "20px", width: "170px", height: "40px" }}
                    >
                        View All Specialties
                      </Button>
                </div>
            </>
        );
}

export default askQuestionBox;








