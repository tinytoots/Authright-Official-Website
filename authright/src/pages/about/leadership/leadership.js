import React, { Component } from "react";
import ExpandCard from "../expandCard/expandCard";
import { employeeInfo as employees } from "../../../constant/employeeInfo";
import "./leadership.css";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

//const style = { background: "#0092ff", padding: "8px 0" };

export default function Leadership(props) {
  return (
    <div className="leadership-bg">
      <div className="leadership-container">
        {employees.map((employee) => {
          const { name, title, linkedin, pic } = employee;
          return (
            <ExpandCard
              name={name}
              title={title}
              linkedin={linkedin}
              pic={pic}
            />
          );
        })}
      </div>

      {/* <Row gutter={16}>
          <Col
            className="gutter-row"
            span={12}
            style={{ paddingLeft: 370, paddingBottom: 100 }}
          >
            <ExpandCard/>
          </Col>
          <Col
            className="gutter-row"
            span={12}
            style={{ paddingLeft: 65, paddingBottom: 100 }}
          >
            <ExpandCard />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col
            className="gutter-row"
            span={6}
            style={{ paddingLeft: 65, paddingBottom: 100 }}
          >
            <ExpandCard />
          </Col>
          <Col
            className="gutter-row"
            span={6}
            style={{ paddingLeft: 65, paddingBottom: 100 }}
          >
            <ExpandCard />
          </Col>
          <Col
            className="gutter-row"
            span={6}
            style={{ paddingLeft: 65, paddingBottom: 100 }}
          >
            <ExpandCard />
          </Col>
          <Col
            className="gutter-row"
            span={6}
            style={{ paddingLeft: 65, paddingBottom: 100 }}
          >
            <ExpandCard />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col
            className="gutter-row"
            span={6}
            style={{ paddingLeft: 65, paddingBottom: 100 }}
          >
            <ExpandCard />
          </Col>
          <Col
            className="gutter-row"
            span={6}
            style={{ paddingLeft: 65, paddingBottom: 100 }}
          >
            <ExpandCard />
          </Col>
          <Col
            className="gutter-row"
            span={6}
            style={{ paddingLeft: 65, paddingBottom: 100 }}
          >
            <ExpandCard />
          </Col>
          <Col
            className="gutter-row"
            span={6}
            style={{ paddingLeft: 65, paddingBottom: 100 }}
          >
            <ExpandCard />
          </Col>
        </Row> */}
    </div>
  );
}
