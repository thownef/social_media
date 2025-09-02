import News from "@/modules/home/components/News/News";

const HomePage = () => {
  return (
    <div className="flex px-10">
      <div className="flex-3/10">Left</div>
      <div className="flex-2/5">
        <News />
      </div>
      <div className="flex-3/10">Right</div>
    </div>
  );
};

export default HomePage;
