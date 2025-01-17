import _ from "lodash";
import LoginForm from "@/modules/auth/components/Form/LoginForm";
import boxTopLeft from "/assets/img/box_top_left.png";
import boxBottomRight from "/assets/img/box_bottom_right.png";
import upperRight from "/assets/img/upper-right.webp";
import bottomLeft from "/assets/img/bottom-left.webp";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#f6efe8] relative flex items-center justify-center p-[30px] box-border m-0 overflow-hidden">
      <img src={upperRight} alt="Upper right decoration" className="absolute top-0 right-0 w-[270px] object-contain" />
      <img src={bottomLeft} alt="Bottom left decoration" className="absolute bottom-0 left-0 w-[515px] object-contain" />
      <img src={boxTopLeft} alt="Box top left decoration" className="absolute w-[343px] left-[-146px] top-[-58px]" />
      <img src={boxBottomRight} alt="Box bottom right decoration" className="absolute w-[343px] right-[-136px] bottom-[-84px]" />
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-10"></div>

      <div className="mt-10 md:mt-0">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
