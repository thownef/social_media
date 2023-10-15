import { Tabs, Tooltip } from "antd";
import { useState } from "react";
import { IconMenus } from "../../../mocks/dummyData";
import { Link, useLocation } from "react-router-dom";

interface MenuCenterProps {
  icons: IconMenus[];
}

const MenuCenter: React.FC<MenuCenterProps> = ({ icons }) => {
  const { pathname } = useLocation();
  const activeKey = icons.find((item) => item.link === pathname);
  const [hiddenTab, setHiddenTab] = useState<boolean>(
    icons.length <= 1 ? false : true
  );
  const handleChange = () => {
    setHiddenTab(!hiddenTab);
  };

  return (
    <div className={!hiddenTab ? "topbar_center isActive" : "topbar_center"}>
      <Tabs
        onTabClick={icons.length <= 1 ? handleChange : undefined}
        defaultActiveKey={activeKey?.id.toString()}
        type="line"
        tabBarStyle={{ marginTop: "3px" }}
        tabBarGutter={8}
        items={icons.map((item, i) => {
          const index = String(i + 1);
          return {
            label: (
              <div>
                <Tooltip
                  className="topbar_center_icon"
                  placement="bottom"
                  title={item.name}
                  arrow={false}
                  overlayInnerStyle={{ marginTop: "12px" }}
                >
                  <Link to={item.link || "/"}>
                    <i className={item.icon}></i>
                  </Link>
                </Tooltip>
              </div>
            ),
            key: index,
            children: "",
          };
        })}
      />
    </div>
  );
};

export default MenuCenter;
