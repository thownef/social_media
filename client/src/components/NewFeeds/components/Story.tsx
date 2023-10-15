import "./index.scss";
import { Row } from "antd";
import profileT from "../../../assets/images/profileT.jpg";
import React, { useEffect, useRef } from "react";

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
  const firstData = storyData.slice(0, 3);
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

  const wrapperRef = useRef(null);

  return (
    <Row className="story__wrapper">
      <div className="story__mcard" ref={wrapperRef}>
        <div className="story__mcard--image">
          <img src={profileT} alt="" />
        </div>
        <p>Tạo tin</p>
        <i className="fa-solid fa-circle-plus"></i>
      </div>
      {storyData.map((item) => (
        <StoryItem item={item} />
      ))}
    </Row>
  );
};

export default Story;
