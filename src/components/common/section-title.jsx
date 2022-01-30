
import React from 'react';
import { Row, Col } from "reactstrap";

const SectionTitle = (props) => {
  return (
    <>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h5 className="text-primary text-uppercase small-title">
                {props.subtitle}
              </h5>
              <h4 className="mb-3">{props.title}</h4>
              <p>{props.desc}</p>
            </div>
          </Col>
        </Row>
      </>
  );
}

export default SectionTitle;
