import { List } from "@mui/material";
import { Item } from "./Item";

interface Item {
  primaryTxt: string;
  secondaryTxt: string;
}

interface Props {
  data: Item[];
}

export const ItemList: React.FC<Props> = ({ data }) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        borderRadius: "8px",
        boxShadow: 1,
      }}
    >
      {data.map((x, index) => (
        <Item
          key={index}
          primaryTxt={x.primaryTxt}
          secondaryTxt={x.secondaryTxt}
        />
      ))}
    </List>
  );
};
