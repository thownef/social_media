import { useState } from "react";
import { Post } from "@/modules/home/core/types/post.type";

const useHandleInitForm = () => {
  const [initData, setInitData] = useState<Post>();
  return {
    initData,
    setInitData,
  }
}

export default useHandleInitForm