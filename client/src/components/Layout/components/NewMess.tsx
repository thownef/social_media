import { useState } from "react";
import "../index.scss";
import { Row, Switch } from "antd";

import profile from "../../../assets/images/profile.png";

interface NewMessProps {
  isNew: boolean;
  setIsNew: any;
}

const NewMess: React.FC<NewMessProps> = ({ isNew, setIsNew }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="newMess">
      <Row
        align={"middle"}
        justify={"space-between"}
        className="newMess__title"
      >
        <h4>Tin nhắn mới</h4>
        <i onClick={() => setIsNew(!isNew)} className="fa-solid fa-xmark"></i>
      </Row>
      <Row align={"middle"} className="newMess__search">
        <span>Đến:</span>
        <input type="text" />
      </Row>
      <hr />
      <Row
        align={"middle"}
        justify={"space-between"}
        className="newMess__switch"
      >
        {!isChecked ? (
          <p>Dùng tính năng mã hóa đầu cuối</p>
        ) : (
          <p>Được mã hóa đầu cuối</p>
        )}
        <Switch onChange={onChange} />
      </Row>
      <hr />
      <ul className="newMess__content">
        <li>
          <Row align={"middle"}>
            <img src={profile} alt="" />
            <p>Nguyễn Văn Thơ</p>
          </Row>
        </li>
      </ul>
    </div>
  );
};

export default NewMess;
