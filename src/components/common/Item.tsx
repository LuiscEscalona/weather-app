import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { FilterDrama } from "@mui/icons-material";

interface Props {
  primaryTxt: string;
  secondaryTxt: string;
}

export const Item: React.FC<Props> = ({ primaryTxt, secondaryTxt }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FilterDrama />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primaryTxt} secondary={secondaryTxt} />
    </ListItem>
  );
};
