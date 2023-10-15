import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants/ROUTES";
import { Row, Col } from "antd";
import "./index.scss";

import { menuCenter, menuRight } from "../../mocks/dummyData";
import TopbarMenu from "./components/TopbarMenu";

const TopBar: React.FC = () => {
  return (
    <>
      <Row className="topbar_container" align={"middle"}>
        {/* Left */}
        <Col xs={5} sm={5} md={6} lg={6} xl={7} className="topbar_left">
          <Row align={"middle"} className="topbar_left">
            <Col xs={12} sm={10} md={6} lg={4} xl={3}>
              <Link to={ROUTES.HOME}>
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={3}
              xl={21}
              className="topbar_search"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Tìm kiếm trên Facebook" />
            </Col>
          </Row>
        </Col>

        {/* Center */}
        <TopbarMenu menu={menuCenter} isMenuCenter={true} />

        {/* Right */}
        <TopbarMenu menu={menuRight} isMenuCenter={false} />
      </Row>
    </>
  );
};

export default TopBar;
