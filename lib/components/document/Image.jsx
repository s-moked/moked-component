import PropTypes from "prop-types";
import { Card } from "@mui/material";
import { floatOrZero } from "../../utils/helper.js";

Image.propTypes = {
  file: PropTypes.string,
  style: PropTypes.string,
  rotation: PropTypes.number,
  zoom: PropTypes.number,
};

export default function Image({ file, style, rotation = 0, zoom = 1 }) {
  const baseStyle = {
    transform: `rotate(${rotation}deg)`,
    transition: "transform 0.3s ease",
    width: "100%",
  };
  const width = `${floatOrZero(zoom * 100)}%`;
  return (
    <Card sx={{ borderRadius: 2, width }}>
      <img
        src={file}
        style={{ ...baseStyle, ...style }}
        alt="Fichier indisponible"
      />
    </Card>
  );
}
