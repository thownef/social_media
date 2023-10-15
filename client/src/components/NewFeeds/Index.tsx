import Story from "./components/Story";
import "./index.scss";

interface NewFeedsProps {}

const NewFeeds: React.FC<NewFeedsProps> = ({}) => {
  return (
    <div className="newfeed__wrapper">
      <Story />
    </div>
  );
};

export default NewFeeds;
