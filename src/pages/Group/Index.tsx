import { Col, Row } from "antd";

interface GroupProps {}

const Group: React.FC<GroupProps> = ({}) => {
  return (
    <div className="home_container">
      <Row className="home_main">
        <Col span={6}>
          <div style={{ height: "100vh" }}>
            <p style={{ height: "500px" }}>123</p>
            <p style={{ height: "500px" }}>123</p>
            <p style={{ height: "500px" }}>123</p>
            <p style={{ height: "500px" }}>123</p>
            <p style={{ height: "500px" }}>123</p>
            <p style={{ height: "500px" }}>123</p>
            <p style={{ height: "500px" }}>123</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Group;
