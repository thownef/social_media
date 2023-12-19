import "./index.scss";
import { Col, Row } from "antd";
import profileT from "../../../assets/images/profileT.jpg";
import { useEffect, useRef } from "react";

import { Navigation } from "swiper/modules";
import { storyData } from "../../../mocks/dummyData";
import StoryItem from "./StoryItem";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface StoryProps {}

const Story: React.FC<StoryProps> = ({}) => {
  const firstData = storyData.slice(0, 4);
  const midleData = storyData.slice(
    3,
    storyData.length - ((storyData.length - 3) % 4)
  );
  const lastData = storyData.slice(
    storyData.length - ((storyData.length - 3) % 4)
  );
  const chunkedNames: any = [];
  for (let i = 0; i < midleData.length; i += 4) {
    chunkedNames.push(midleData.slice(i, i + 4));
  }
  return (
    <Row className="story__wrapper">
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Row>
            <Col span={5}>
              <div className="story__mcard">
                <div className="story__mcard--image">
                  <img src={profileT} alt="" />
                </div>
                <p>Tạo tin</p>
                <i className="fa-solid fa-circle-plus"></i>
              </div>
            </Col>

            {firstData.map((item) => (
              <Col span={5}>
                <StoryItem key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </SwiperSlide>

        <SwiperSlide>
          <Row>
            <Col offset={1} />
            <Col span={5}>
              <div className="story__mcard">
                <div className="story__mcard--image">
                  <img src={profileT} alt="" />
                </div>
                <p>Tạo tin</p>
                <i className="fa-solid fa-circle-plus"></i>
              </div>
            </Col>

            {firstData.map((item) => (
              <Col span={5}>
                <StoryItem key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </SwiperSlide>
      </Swiper>
    </Row>
  );
};

export default Story;
