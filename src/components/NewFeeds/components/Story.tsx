import "./index.scss";
import { Col, Row } from "antd";
import profileT from "../../../assets/images/profileT.jpg";

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
    4,
    storyData.length - ((storyData.length - 3) % 4)
  );

  const fifthFromEnd = storyData.slice(-5, -4)[0];

  const lastData = storyData.slice(-4);

  console.log(fifthFromEnd);
  console.log(lastData);

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
        // simulateTouch={false}
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
              <Col key={item.id} span={5}>
                <StoryItem key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </SwiperSlide>

        {/* <SwiperSlide>
          <Row>
            <Col offset={1} />
            {midleData.map((item) => (
              <Col key={item.id} span={5}>
                <StoryItem key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </SwiperSlide> */}

        <SwiperSlide>
          <Row>
            <Col offset={1} span={3}>
              <StoryItem item={fifthFromEnd} />
            </Col>
            {lastData.map((item) => (
              <Col key={item.id} span={5}>
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
