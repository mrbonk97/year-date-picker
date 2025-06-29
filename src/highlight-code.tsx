import { codeToHtml } from "shiki";
import { useEffect, useState } from "react";

interface Props {
  lang: "shell" | "javascript";
  code: string;
}
export const HighlightCode = ({ lang, code }: Props) => {
  const [html, setHtml] = useState("");
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopy(true);
  };

  useEffect(() => {
    const convert = async () => {
      await codeToHtml(code, {
        theme: "github-light",
        lang: lang,
      }).then((res) => setHtml(res));
    };

    convert();
  }, []);

  return (
    <div className="shiki-wrapper">
      <button onClick={handleCopy}>
        {isCopy ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          "Copy"
        )}
      </button>
      <div className="mt-5" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
