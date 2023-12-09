import "./index.scss";

interface StoryItemProps {
  item: any;
}

const StoryItem: React.FC<StoryItemProps> = ({
  item: { id, imageStory, imageProfile, name },
}) => {
  return (
    <div className="story__card" key={id}>
      <img src={imageStory} alt="" />
      <div className="story__profile">
        <img src={imageProfile} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default StoryItem;
