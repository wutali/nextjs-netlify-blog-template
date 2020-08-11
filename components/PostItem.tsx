import { Post } from "../lib/posts";
import Date from "./Date";

type Props = {
  post: Post;
};
export default function ({ post }: Props) {
  return (
    <div>
      <Date dateString={post.date} />
      <h2>{post.title}</h2>
      <style jsx>
        {`
          h2 {
            margin: 0;
            font-weight: 500;
          }
        `}
      </style>
    </div>
  );
}
