import React, { Component } from "react";
import { Col,Card, CardBody } from "reactstrap";
import FeatherIcon from "feather-icons-react";

class ServiceBox extends Component {
  render() {
    return (
      <>
        {this.props.services.map((service, key) => (
          <Col xl={4} sm={6} key={key}>
            <Card>
              <CardBody>
                <div className="text-center p-4 mt-3">
                  <div className="avatar-md mx-auto mb-4">
                    <span className="avatar-title rounded-circle bg-soft-primary">
                      <i>
                        <FeatherIcon
                          icon={service.icon}
                          className="icon-dual-primary"
                        />
                      </i>
                    </span>
                  </div>
                  <h5 className="font-18">{service.title}</h5>
                  <p className="mb-0">{service.desc}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </>
    );
  }
}

export default ServiceBox;
