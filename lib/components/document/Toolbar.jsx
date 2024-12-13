import { Box, ButtonGroup } from "@mui/material";
import CustomButton from "../button/Button.jsx";
import Tooltip from "../display/Tooltip";
import { useTheme } from "@mui/styles";
import PropTypes from "prop-types";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CropRotateOutlined,
  FileDownloadOutlined,
  FileUploadOutlined,
  FitScreenOutlined,
  ManageSearchOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@mui/icons-material";

Button.propTypes = {
  tooltip: PropTypes.node,
  color: PropTypes.oneOf(["inherit", "primary", "secondary", "default"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  ucFirst: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  startIcon: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  sx: PropTypes.string,
  children: PropTypes.node,
};

function Button({ tooltip, disabled, ...props }) {
  const {
    palette: { mode },
  } = useTheme();
  const isLight = mode === "light";
  return (
    <Tooltip active={!!tooltip && !disabled} title={tooltip}>
      <CustomButton
        {...props}
        variant="text"
        disabled={disabled}
        color={isLight ? "primary" : "secondary"}
      />
    </Tooltip>
  );
}

Toolbar.propTypes = {
  activePage: PropTypes.number.isRequired,
  zoomIn: PropTypes.func.isRequired,
  zoomOut: PropTypes.func.isRequired,
  resetZoom: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  rotate: PropTypes.func.isRequired,

  totalPage: PropTypes.number.isRequired,

  canGoNext: PropTypes.bool.isRequired,
  canGoBack: PropTypes.bool.isRequired,
  canZoomIn: PropTypes.bool.isRequired,
  canZoomOut: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,

  // Actions
  onAnalyze: PropTypes.func,
  onUpload: PropTypes.func,
  onDownload: PropTypes.func,
  enablePagination: PropTypes.bool,
};
export default function Toolbar({
  activePage,
  zoomIn,
  zoomOut,
  resetZoom,
  goNext,
  goBack,
  totalPage,
  rotate,
  canGoNext,
  canGoBack,
  canZoomIn,
  canZoomOut,
  error,
  enablePagination = true,

  onAnalyze,
  onUpload,
  onDownload,
}) {
  const {
    palette: { background },
  } = useTheme();
  return (
    <Box
      sx={{ backgroundColor: background.paper }}
      className="z-99 flex justify-center w-full py-4"
    >
      <ButtonGroup
        aria-label="pdf-navigation"
        className="h-24 shadow-0"
        color="primary"
        variant="text"
        fullWidth={false}
      >
        {onUpload && (
          <Button
            size="small"
            onClick={onUpload}
            tooltip="Charger un autre document"
          >
            <FileUploadOutlined />
          </Button>
        )}
        {onAnalyze && (
          <Button
            size="small"
            onClick={onAnalyze}
            tooltip="Extraire les données textuel"
            disabled={error}
          >
            <ManageSearchOutlined />
          </Button>
        )}
        <Button
          size="small"
          onClick={rotate}
          tooltip="Pivoter le document"
          disabled={error}
        >
          <CropRotateOutlined />
        </Button>
        <Button
          size="small"
          onClick={onDownload}
          tooltip="Télécharger le document"
          disabled={error}
        >
          <FileDownloadOutlined />
        </Button>
        <Button
          size="small"
          onClick={zoomOut}
          disabled={!canZoomOut || error}
          tooltip="Réduire"
        >
          <ZoomOutOutlined />
        </Button>
        <Button
          size="small"
          onClick={resetZoom}
          disabled={error}
          tooltip="Ajuster à l’écran"
        >
          <FitScreenOutlined />
        </Button>
        <Button
          size="small"
          onClick={zoomIn}
          disabled={!canZoomIn || error}
          tooltip="Agrandir"
        >
          <ZoomInOutlined />
        </Button>
        {enablePagination && totalPage > 1 && (
          <>
            <Button
              size="small"
              onClick={goBack}
              disabled={!canGoBack || error}
            >
              <ArrowLeftOutlined />
            </Button>
            <Button
              className="pointer-events-none h-24"
              size="small"
              color="primary"
            >{`${activePage}/${totalPage}`}</Button>
            <Button
              size="small"
              onClick={goNext}
              disabled={!canGoNext || error}
            >
              <ArrowRightOutlined />
            </Button>
          </>
        )}
      </ButtonGroup>
    </Box>
  );
}
