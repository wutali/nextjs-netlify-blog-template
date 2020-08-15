import { BlogPosting } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";
import config from "../../lib/config";
import { parseISO, formatISO } from "date-fns";

type Props = {
  url: string;
  title: string;
  keywords?: string[];
  date: Date;
  author?: string;
  image?: string;
  description?: string;
};
export default function JsonLdMeta({
  url,
  title,
  keywords,
  date,
  author,
  image,
  description,
}: Props) {
  return (
    <script
      {...jsonLdScriptProps<BlogPosting>({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: config.base_url + url,
        headline: title,
        keywords: keywords ? undefined : keywords.join(","),
        datePublished: formatISO(date),
        author: author,
        image: image,
        description: description,
      })}
    />
  );
}
