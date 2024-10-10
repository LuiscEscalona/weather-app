import { TableRow, TableCell } from "@mui/material";
import { WeatherResponse } from "../interfaces";

interface Props {
  rows: WeatherResponse[];
}

export const ContentTable: React.FC<Props> = ({ rows }) => {
  return (
    <>
      {rows?.map((row, index) => (
        <TableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row" align="center">
            {row.name}
          </TableCell>
          <TableCell align="center">{row.main.temp} °C</TableCell>
          <TableCell align="center">{row.main.humidity} %</TableCell>
          <TableCell align="center">{row.wind.speed} m/s</TableCell>

          <TableCell align="center">{row.weather[0].description}</TableCell>
        </TableRow>
      ))}
    </>
  );
};
