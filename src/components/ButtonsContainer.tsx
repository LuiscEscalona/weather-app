import { Box, Tooltip, Button } from "@mui/material";
import { PictureAsPdf, Description } from "@mui/icons-material";
import { useWeatherContext } from "../context";
import { generateExcel, flattenWeatherResponse, generatePDF } from "../utils";

export const ButtonsContainer = () => {
  const { filteredHistory } = useWeatherContext();

  const generateReport = () => {
    if (filteredHistory.length) {
      const flatData = flattenWeatherResponse(filteredHistory);
      generateExcel(flatData, "Historial Clima", "historial_clima.xlsx");
    }
  };

  const generateGraphsDoc = () => {
    if (filteredHistory.length) {
      generatePDF("pdf-content", "graficos.pdf");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent={{ xs: "center", sm: "flex-end" }}
      flexDirection={{ xs: "column", sm: "row" }}
      gap={2}
      my={2}
      px={3}
    >
      <Tooltip title="Descargar reporte" arrow>
        <Button
          variant="contained"
          onClick={generateReport}
          sx={{
            backgroundColor: "#79b992",
            width: { xs: "100%", sm: "100px" },
            flex: { xs: 1, sm: 0 },
          }}
        >
          <Description sx={{ color: "#1F6F3E", my: 1 }} />
        </Button>
      </Tooltip>

      <Tooltip title="Descargar gráficos" arrow>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#e39f9a",
            width: { xs: "100%", sm: "100px" },
            flex: { xs: 1, sm: 0 },
          }}
          onClick={generateGraphsDoc}
        >
          <PictureAsPdf sx={{ color: " #E03C31", my: 1 }} />
        </Button>
      </Tooltip>
    </Box>
  );
};
