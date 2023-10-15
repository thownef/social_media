import { Col, Row } from "antd";
import "./index.scss";

import profile from "../../assets/images/profile.png";
import gift from "../../assets/images/gift.png";
import plus from "../../assets/images/plus.png";

interface RightBarProps {}

const RightBar: React.FC<RightBarProps> = ({}) => {
  return (
    <ul className="rightbar">
      <Row align={"middle"} className="rightbar_title">
        <h3>Sinh nhật</h3>
      </Row>
      <li>
        <Row wrap={false}>
          <img src={gift} alt="" />
          <span>
            Hôm nay là sinh nhật của <strong>Nguyễn Văn Thơ</strong>
            <strong>.</strong>
          </span>
        </Row>
      </li>
      <hr />
      <Row
        align={"middle"}
        justify={"space-between"}
        className="rightbar_title"
      >
        <Col span={18}>
          <h3>Người liên hệ</h3>
        </Col>
        <Col span={6} className="rightbar_title_icon">
          <Row align={"middle"}>
            <Col span={12}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Col>
            <Col span={12}>
              <i className="fa-solid fa-ellipsis"></i>
            </Col>
          </Row>
        </Col>
      </Row>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      <li>
        <Row align={"middle"}>
          <div className="friend">
            <img src={profile} alt="" />
          </div>
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>

      <Row align={"middle"} className="rightbar_title">
        <h3>Cuộc trò chuyện nhóm</h3>
      </Row>
      <li>
        <Row align={"middle"}>
          <img src={plus} alt="" />
          <p>Tạo nhóm mới</p>
        </Row>
      </li>
    </ul>
  );
};

export default RightBar;
