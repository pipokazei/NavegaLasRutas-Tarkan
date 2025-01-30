import { BiCopyright } from "react-icons/bi";
import "./footer.css";
import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <BiCopyright />
        <Typography>Copyright TiendaTurca</Typography>
      </div>
    </div>
  );
};
