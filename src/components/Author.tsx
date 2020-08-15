import { AuthorContent } from "../lib/authors";

type Props = {
  author: AuthorContent;
};
export default function Author({ author }: Props) {
  return (
    <>
      <span>{author.name}</span>
      <style jsx>
        {`
          span {
            color: #9b9b9b;
          }
        `}
      </style>
    </>
  );
}
