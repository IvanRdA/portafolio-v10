import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import { useTranslation } from "react-i18next";

export default function CodeEditor({ snippet }) {
  const { t } = useTranslation();

  return (
    <article className="w-[80%] flex flex-col justify-center items-center text-justify font-ojujuLight">
      <strong>
        <h3 className="text-blue-chill-800">{t(snippet.title)}</h3>
      </strong>
      <div className="flex flex-row gap-2 justify-center">
        <strong>
          <h5>{t("Main.Snippets.why")}</h5>
        </strong>
        <p className="font-ojujuLight text-justify">{t(snippet.description)}</p>
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <strong>
          <h5>{t("Main.Snippets.platform")}</h5>
        </strong>
        <p className="font-ojujuLight text-justify">{snippet.platform}</p>
        <strong>
          <h5>{t("Main.Snippets.types")}</h5>
        </strong>
        <p className="font-ojujuLight text-justify">{t(snippet.type)}</p>
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <strong>
          <h5>{t("Main.Snippets.solution")}</h5>
        </strong>
        <p className="font-ojujuLight text-justify">{t(snippet.solution)}</p>
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <strong>
          <h5>{t("Main.Snippets.complexity")}</h5>
        </strong>
        <p className="font-ojujuLight text-justify">
          {t(snippet.complexityAnalysis)}
        </p>
      </div>
      <AceEditor
        mode="javascript"
        theme="solarized_dark"
        value={snippet.code}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        readOnly={true}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: "100%", height: "400px" }}
      />
      <small className="font-ojuju-Light">
        <i>{t("Main.Snippets.small")}</i>
      </small>
    </article>
  );
}
