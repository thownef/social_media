import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Row, Spin } from "antd";
import "./index.scss";
import profile from "../../assets/images/profile.png";
import down_arrow from "../../assets/images/down_arrow.png";
import up_arrow from "../../assets/images/up_arrow.png";
import { tools, shortcuts, sidebar_info, Tool } from "../../mocks/dummyData";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = ({}) => {
  const [isMore, setIsMore] = useState<boolean>(false);
  const [isSpin, setIsSpin] = useState<boolean>(false);

  const handleReadMore = () => {
    if (!isMore) {
      setIsSpin(true);
      setTimeout(() => {
        setIsMore(!isMore);
      }, 300);
    } else {
      setIsSpin(false);
      setIsMore(!isMore);
    }
  };

  const renderItem = (item: Tool) => (
    <li key={item.id}>
      <Row align={"middle"}>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
      </Row>
    </li>
  );

  return (
    <ul className="sidebar">
      <li>
        <Row align={"middle"}>
          <img src={profile} alt="" />
          <p>Nguyễn Văn Thơ</p>
        </Row>
      </li>
      {!isMore ? tools.slice(0, 8).map(renderItem) : tools.map(renderItem)}
      <li>
        {!isMore ? (
          <Row onClick={handleReadMore} align={"middle"}>
            {isSpin ? (
              <Spin
                className="sidebar_spin"
                indicator={
                  <LoadingOutlined
                    style={{
                      fontSize: 24,
                    }}
                    spin
                  />
                }
              />
            ) : (
              <img src={down_arrow} alt="" />
            )}
            <p>See more</p>
          </Row>
        ) : (
          <Row onClick={handleReadMore} align={"middle"}>
            <img src={up_arrow} alt="" />
            <p>See less</p>
          </Row>
        )}
      </li>

      <hr className="sidebar_hr" />

      <Row
        align={"middle"}
        justify={"space-between"}
        className="sidebar_shortcut"
      >
        <span className="sidebar_shortcut_title">Your shortcuts</span>
        <span className="sidebar_shortcut_edit">Edit</span>
      </Row>

      {shortcuts.map(renderItem)}

      <ul className="sidebar_info">
        {sidebar_info.map((item, index) => (
          <li key={index}>
            <a href="/">{item} ·</a>
          </li>
        ))}
        <li>More ·</li>
        Meta © 2023
      </ul>
    </ul>
  );
};

export default SideBar;
