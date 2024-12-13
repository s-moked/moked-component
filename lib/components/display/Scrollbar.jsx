import PropTypes from "prop-types";
import clsx from "clsx";

const Scrollbar = ({ children, style, className }) => {
  const defaultStyle = {
    overflow: "auto", // Permet le scroll si nécessaire
    maxHeight: "100%", // Limite la hauteur à celle du parent
    maxWidth: "100%",
    width: "100%", // Limite la largeur à celle du parent
  };

  return (
    <div
      style={{ ...defaultStyle, ...style }}
      className={clsx(className, "scrollbar")}
    >
      {children}
    </div>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};
export default Scrollbar;
