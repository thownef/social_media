import { useEffect, useState } from "react";
import { Menu_Config } from "../../../mocks/dummyData";
import { Col } from "antd";
import MenuCenter from "./MenuCenter";
import "../index.scss";
import MenuRight from "./MenuRight";

interface TopbarMenuProps {
  menu: Menu_Config[];
  isMenuCenter: boolean;
}

const TopbarMenu: React.FC<TopbarMenuProps> = ({ menu, isMenuCenter }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {menu.map(
        ({ minWidth, maxWidth, icons, xs, sm, md, lg, xl }, index) =>
          (minWidth === undefined || windowWidth >= minWidth) &&
          (maxWidth === undefined || windowWidth <= maxWidth) && (
            <Col key={index} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              {isMenuCenter ? (
                <MenuCenter icons={icons} />
              ) : (
                <MenuRight icons={icons} />
              )}
            </Col>
          )
      )}
    </>
  );
};

export default TopbarMenu;
