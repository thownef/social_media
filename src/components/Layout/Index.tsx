import { useState } from "react";
import TopBar from "../TopBar/Index";
import { Outlet } from "react-router-dom";
import "./index.scss";
import { Row, Tooltip } from "antd";
import NewMess from "./components/NewMess";

const Layout: React.FC = () => {
  const [isNew, setIsNew] = useState<boolean>(false);
  const handleClick = () => {
    setIsNew(!isNew);
  };
  return (
    <>
      <TopBar />
      {isNew && <NewMess isNew={isNew} setIsNew={setIsNew} />}
      <div className="home_wrapper">
        <Outlet />
      </div>
      <Row
        align={"middle"}
        className={isNew ? "home__newMess showOption" : "home__newMess"}
      >
        <Row
          justify={"center"}
          align={"middle"}
          className="home__newMess--button"
        >
          <i className="fa-solid fa-ellipsis"></i>
        </Row>
        <Tooltip
          overlayStyle={{ fontSize: "12px" }}
          mouseEnterDelay={0.2}
          placement="left"
          title="Tin nhăn mới"
          arrow={false}
        >
          <Row
            onClick={handleClick}
            justify={"center"}
            align={"middle"}
            className="home__newMess--option"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </Row>
        </Tooltip>
      </Row>
    </>
  );
};

export default Layout;
