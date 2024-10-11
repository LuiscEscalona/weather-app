import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";

interface Head {
  id: number;
  description: string;
}

interface Props {
  header: Head[];
  children: React.ReactNode;
}

export const DataTable: React.FC<Props> = ({ header, children }) => {
  return (
    <TableContainer
      component={Paper}
      className="custom-paper"
      sx={{
        maxWidth: "100%",
        overflowX: "auto",
        padding: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Table
        sx={{ width: "100%", tableLayout: "auto" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {header.map((head) => (
              <TableCell align="center" key={head.id}>
                {head.description}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};
