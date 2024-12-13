import {
  Breadcrumbs as MuiBreadcrumbs,
  Skeleton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PropsTypes from "prop-types";

Breadcrumbs.propTypes = {
  items: PropsTypes.arrayOf(
    PropsTypes.shape({
      label: PropsTypes.string,
      linkTo: PropsTypes.string,
      icon: PropsTypes.node,
      hide: PropsTypes.array,
    }),
  ).isRequired,
  loading: PropsTypes.bool,
};

export default function Breadcrumbs(props) {
  const { items, loading } = props;
  return (
    <MuiBreadcrumbs>
      {items.map((item, key) => {
        const { label, linkTo, icon, hide } = item;
        if (hide) return null;
        return (
          <Typography
            key={key}
            component={linkTo ? Link : "div"}
            to={linkTo}
            variant="caption"
            color={"text.secondary"}
            sx={{ display: "flex", alignItems: "center" }}
            className={"flex flex-row"}
          >
            {icon}
            {loading ? <Skeleton className="min-w-80" /> : label}
          </Typography>
        );
      })}
    </MuiBreadcrumbs>
  );
}
