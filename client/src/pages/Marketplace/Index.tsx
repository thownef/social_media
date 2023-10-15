import { Col, Row } from "antd";
import SideBar from "../../components/SideBar/Index";

interface MarketplaceProps {}

const Marketplace: React.FC<MarketplaceProps> = ({}) => {
  return (
    <div className="home_container">
      <Row className="home_main">
        <Col span={6}>
          <SideBar />
        </Col>
      </Row>
    </div>
  );
};

export default Marketplace;
