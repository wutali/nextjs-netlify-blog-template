import { BlogPosting } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";
import config from "../../lib/config";
import { parseISO, formatISO } from "date-fns";

type Props = {
  url: string;
  title: string;
  keywords?: string[];
  dateString: string;
  author?: string;
  image?: string;
  description?: string;
};
export default function JsonLdMeta({
  url,
  title,
  keywords,
  dateString,
  author,
  image,
  description,
}: Props) {
  const date = parseISO(dateString);
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
