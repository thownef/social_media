import Post from "@/modules/home/components/Post/Post";
import { type Post as PostType } from "@/modules/home/core/types/post.type";
import { useEffect } from "react";
import { fetchPostList } from "@/modules/home/server-action/post";
import useFetchDataTable from "@/shared/hooks/useFetchDataTable";
import { Box } from "@mui/material";

const News = () => {
  const { dataTable, onFetch } = useFetchDataTable<PostType>(fetchPostList);

  useEffect(() => {
    onFetch({ page: 1 });
  }, []);
  return (
    <Box className="mt-4">
      {dataTable.map((item) => (
        <Post key={item.id} data={item} />
      ))}
    </Box>
  );
};

export default News;
