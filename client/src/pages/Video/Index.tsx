import { shortcuts, tools } from "../../mocks/dummyData";
import { Row } from "antd";

interface VideoProps {}

const Video: React.FC<VideoProps> = ({}) => {
  return (
    <div style={{ width: "200px", overflowY: "scroll" }}>
      <div className="left">
        <ul className="content">
          {tools.map((item) => (
            <li key={item.id}>
              <Row align={"middle"}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </Row>
            </li>
          ))}

          <Row align={"middle"} justify={"space-between"}>
            <h2>You shortcuts</h2>
            <p className="edit">Edit</p>
          </Row>
          {shortcuts.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Video;
