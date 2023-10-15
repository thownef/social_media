import { Col, Row } from "antd";
import SideBar from "../../components/SideBar/Index";
import NewFeeds from "../../components/NewFeeds/Index";
import RightBar from "../../components/RightBar/Index";
import "./index.scss";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="home_container">
      <Row>
        <Col span={6}>
          <SideBar />
        </Col>
        <Col span={12}>
          <NewFeeds />
        </Col>
        <Col span={6}>
          <RightBar />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
