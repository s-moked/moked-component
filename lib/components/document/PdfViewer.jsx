import _ from "lodash";
import PropTypes from "prop-types";
import Pdf from "./Pdf.jsx";
import { useState } from "react";
import useToolbar from "./useToolbar.js";
import NoFilePlaceholder from "./NoFilePlaceHolder.jsx";
import Toolbar from "./Toolbar.jsx";

function PdfViewer(props) {
  const { file, fileName, onAnalyze, onUpload, showToolbar = false } = props;
  const [error, setError] = useState(false);

  let fileUri = file;

  const onDownload = async () => {
    if (!error) {
      const link = document.createElement("a");
      link.href = fileUri;
      link.download = fileName;
      link.click();
    }
  };

  const toolbarHook = useToolbar({
    file,
    onAnalyze,
    onDownload,
    error,
  });

  const { rotation, activePage, zoom, setTotalPage } = toolbarHook;

  if (error) {
    return (
      <div className="relative flex flex-wrap w-full h-full">
        {showToolbar && (
          <Toolbar
            {...toolbarHook}
            onAnalyze={onAnalyze}
            onUpload={onUpload}
            onDownload={onDownload}
          />
        )}
        <NoFilePlaceholder />
      </div>
    );
  }

  return (
    <div id="document-viewer-container" className="flex flex-col w-full h-full">
      {showToolbar && (
        <Toolbar
          {...toolbarHook}
          onAnalyze={onAnalyze}
          onUpload={onUpload}
          onDownload={onDownload}
        />
      )}
      <Pdf
        fileUri={fileUri}
        onError={() => {
          setError(true);
        }}
        rotation={rotation}
        activePage={activePage}
        zoom={zoom}
        onAnalyze={onAnalyze}
        onUpload={onUpload}
        onLoadSuccess={(pdf) => {
          setTotalPage(_.get(pdf, "_pdfInfo.numPages", 1));
        }}
      />
    </div>
  );
}

PdfViewer.propTypes = {
  file: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,

  showToolbar: PropTypes.bool,

  onAnalyze: PropTypes.func,
  onUpload: PropTypes.func,
};
export default PdfViewer;
