import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

interface Option {
  id: number;
  description: string;
  path: string;
}

interface Props {
  options: Option[];
  onClose: () => void;
}

export const MenuItems: React.FC<Props> = ({ options, onClose }) => {
  return (
    <>
      {options.map((option) => (
        <MenuItem
          key={option.id}
          onClick={onClose}
          component={Link}
          to={option.path}
          sx={{
            transition: "background-color 0.3s",
            "&:hover": {
              color: "#ffffff",
              backgroundColor: "#1c92d269",
            },
          }}
        >
          {option.description}
        </MenuItem>
      ))}
    </>
  );
};
