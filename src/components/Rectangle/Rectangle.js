import React from "react";
import { CardTitle, Container, Row, } from "reactstrap";

const Rectangle = () => { 
    return (
        <>
        <div className="rectangle5">
        <form action="">
        <Container fluid>
            <Row>
            <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase">
                          Free Inspection
                        </CardTitle>
                      </div>
            </Row>
            <Row>
            <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase">
                          File a Claim
                        </CardTitle>
                      </div>
            </Row>
            <Row>
            <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase">
                          Replace or Repair a Roof
                        </CardTitle>
                      </div>
            </Row>
            </Container>
            </form>
            </div>
            </>
    )
};

export default Rectangle;