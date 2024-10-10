import { Box } from "@mui/material";
import { ForecastData } from "../interfaces";
import { ItemList } from "./ItemList";

interface Props {
  list: ForecastData[];
}
export const ForecastList: React.FC<Props> = ({ list }) => {
  const data = list.map((i) => {
    const [datePart, timePart] = i.date.split(" ");
    const [year, month, day] = datePart.split("-");

    const formattedDate = `${day}-${month}-${year}`;

    return {
      primaryTxt: `${i.temperature} °C`,
      secondaryTxt: `${formattedDate} ${timePart} - ${i.description}`,
    };
  });

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <ItemList data={data} />
    </Box>
  );
};
