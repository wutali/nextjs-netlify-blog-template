import Link from "next/link";

type Props = {
  children: string;
};
export default function ({ children }: Props) {
  return (
    <Link href={"/"}>
      <a>{"#" + children}</a>
    </Link>
  );
}
