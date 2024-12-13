import { BrokenImageOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function NoFilePlaceholder({ label = "Fichier introuvable" }) {
  return (
    <div className="flex flex-1 w-full h-full justify-center items-center">
      <div className="flex flex-col">
        <BrokenImageOutlined sx={{ color: "text.secondary", width: 128 }} />
        <Typography color="text.secondary">{label}</Typography>
      </div>
    </div>
  );
}
