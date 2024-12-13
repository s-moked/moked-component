import { useEffect, useState } from "react";
import { stopPropagation } from "../../utils/helper";

export default function useToolbar({ fileUri, onAnalyze, error, onDownload }) {
  const [totalPage, setTotalPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [scale, setScale] = useState(0);
  const [rotation, setRotation] = useState(0);

  // Actions possible
  const canGoNext = activePage < totalPage;
  const canGoBack = activePage > 1;
  const canZoomIn = scale < 2;
  const canZoomOut = scale > 0.4;

  useEffect(() => {
    setActivePage(1);
    setScale(1);
  }, [fileUri]);

  const eventWrapper = (fn) => (event) => {
    stopPropagation(event);
    fn(event);
  };

  const zoomIn = () => setScale((s) => (canZoomIn ? s + 0.2 : s));
  const zoomOut = () => setScale((s) => (canZoomOut ? s - 0.2 : s));
  const resetZoom = () => setScale(1);
  const goNext = () => setActivePage((a) => (canGoNext ? a + 1 : a));
  const goBack = () => setActivePage((a) => (canGoBack ? a - 1 : a));

  const rotate = () => {
    if (rotation === 270) {
      setRotation(0);
    } else {
      setRotation((r) => r + 90);
    }
  };

  return {
    fileUri,
    // ÉTATS
    totalPage,
    activePage,
    zoom: scale,
    scale,
    rotation,
    error,
    // HANDLER
    onAnalyze: eventWrapper(onAnalyze),
    onDownload: eventWrapper(onDownload),
    zoomIn: eventWrapper(zoomIn),
    zoomOut: eventWrapper(zoomOut),
    resetZoom: eventWrapper(resetZoom),
    goNext: eventWrapper(goNext),
    goBack: eventWrapper(goBack),
    rotate: eventWrapper(rotate),
    setTotalPage,
    // ACTIONS POSSIBLES
    canGoNext,
    canGoBack,
    canZoomIn,
    canZoomOut,
  };
}
