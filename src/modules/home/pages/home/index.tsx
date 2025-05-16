import News from "@/modules/home/components/News/News";

const HomePage = () => {
  return (
    <div className="flex px-4">
      <div className="flex-1/6">Left</div>
      <div className="flex-2/3 flex px-4 gap-4">
        <div className="flex-3/5">
          <News />
        </div>
        <div className="flex-2/5">Right</div>
      </div>
      <div className="flex-1/6">Right</div>
    </div>
  );
};

export default HomePage;
