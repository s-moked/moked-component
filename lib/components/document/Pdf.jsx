import {Document, Page, pdfjs} from "react-pdf";
import PropTypes from "prop-types";
import {makeStyles} from "@mui/styles";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import {Skeleton} from "@mui/material";
import {useMemo} from "react";
import NoFilePlaceholder from "./NoFilePlaceHolder.jsx";
import Scrollbar from "../display/Scrollbar.jsx";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "./pdf.worker.min.mjs",
    import.meta.url,
).toString();

const useStyles = makeStyles(() => ({
    page: {
        "& .react-pdf__Page__canvas, .react-pdf__Page__textContent, .react-pdf__Page__annotations":
            {
                borderRadius: 10,
            },
        "& .react-pdf__Page__textContent, .react-pdf__Page__annotations": {
            zIndex: 99,
        },
    },
    scrollBar: {
        borderRadius: 10,
        position: "relative",
        height: "100%",
        width: "100%",
    },
}));

function Pdf(props) {
    const classes = useStyles();
    const {
        fileUri,
        onError,
        activePage = 1,
        onLoadSuccess,
        rotation,
        zoom,
        authorizationHeader,
    } = props;
    const parentEl = document.getElementById("document-viewer-container");
    const width = parentEl?.offsetWidth;


    const memoizedOptions = useMemo(() => {
        return {
            httpHeaders: {
                Authorization: authorizationHeader,
            },
        };
    }, [authorizationHeader]);

    return (
        <Scrollbar>
            <Document
                renderAnnotationLayer
                renderTextLayer
                noData={<NoFilePlaceholder/>}
                error={<NoFilePlaceholder/>}
                file={fileUri}
                onLoadSuccess={onLoadSuccess}
                options={memoizedOptions} // Mémorisation des options
                onLoadError={onError}
                onError={onError}
                rotate={rotation}
                loading={
                    <Skeleton
                        variant="rectangular"
                        className="sticky h-full w-full"
                        sx={{borderRadius: 1}}
                    />
                }
            >
                <Page
                    pageNumber={activePage}
                    className={classes.page}
                    scale={zoom}
                    width={width}
                    loading={
                        <Skeleton
                            variant="rectangular"
                            className="sticky h-full w-full"
                            sx={{borderRadius: 1}}
                        />
                    }
                />
            </Document>
        </Scrollbar>
    );
}

Pdf.propTypes = {
    fileUri: PropTypes.string.isRequired,
    activePage: PropTypes.number,
    onError: PropTypes.func,
    rotation: PropTypes.number,
    zoom: PropTypes.number,
    onLoadSuccess: PropTypes.func,
    authorizationHeader: PropTypes.string,
};
export default Pdf;
