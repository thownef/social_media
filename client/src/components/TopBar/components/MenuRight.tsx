import { Row, Tooltip } from "antd";
import { IconMenus } from "../../../mocks/dummyData";

import profile from "../../../assets/images/profile.png";

interface MenuRightProps {
  icons: IconMenus[];
}

const MenuRight: React.FC<MenuRightProps> = ({ icons }) => {
  return (
    <Row justify={"end"} className="topbar_right">
      {icons.map((item) => (
        <i className={item.icon} key={item.id}></i>
      ))}
      <Tooltip placement="bottom" title="Tài khoản">
        <img src={profile} alt="" />
      </Tooltip>
    </Row>
  );
};

export default MenuRight;
