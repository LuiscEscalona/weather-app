import { useState } from "react";
import { IconButton, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItems } from "./MenuItems";
interface Option {
  id: number;
  description: string;
  path: string;
}

interface Props {
  options: Option[];
}

export const MenuWrapper: React.FC<Props> = ({ options }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleMenuClick}>
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItems options={options} onClose={handleMenuClose} />
      </Menu>
    </>
  );
};
