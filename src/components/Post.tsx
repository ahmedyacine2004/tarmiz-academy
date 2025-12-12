import { useParams } from "react-router-dom";
import { PostsContext } from "../contexts/postsContext";
import { useContext } from "react";

function Post() {
  const posts = useContext(PostsContext);
  const { id } = useParams();
  const post = posts.find((p: { id: number }) => p.id === Number(id)) || {
    title: "",
    desc: "",
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "10px" }}>{post.title}</h1>
      <p style={{ textAlign: "center", padding: "10px" }}>{post.desc}</p>
    </div>
  );
}

export default Post;
