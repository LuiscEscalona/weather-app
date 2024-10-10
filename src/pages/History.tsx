import { useEffect, useState } from "react";
import { Box, Tooltip, Button } from "@mui/material";
import { PictureAsPdf, Description } from "@mui/icons-material";
import { useWeatherContext } from "../context/useWeatherContext";
import { generateExcel } from "../utils/generateExcel";
import { flattenWeatherResponse } from "../utils/flattenWeather";
import { WeatherTable, WeatherGraphs, EmptyData, Loading } from "../components";
import { generatePDF } from "../utils/generatePDF";
import { getStringBeforeComma } from "../utils/getStringBeforeComma";
import { containsWords } from "../utils/containsWords";
import { WeatherResponse } from "../interfaces";

export const History = () => {
  const {
    city,
    filteredHistory,
    setFilteredHistory,
    isSearchActivated,
    setIsSearchActivated,
  } = useWeatherContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // update filteredHistory
  useEffect(() => {
    const filterHistory = async () => {
      setIsLoading(true);

      const fetchData = (): Promise<WeatherResponse[]> => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const json = localStorage.getItem("history");
            const history: WeatherResponse[] = json ? JSON.parse(json) : [];
            resolve(history);
          }, 2000);
        });
      };

      try {
        const data = await fetchData();

        if (data.length && city) {
          const target = getStringBeforeComma(city);
          const targetWords = target.split(" ");
          const filtered = data.filter(
            (i) => i.name && containsWords(i.name, targetWords)
          );

          setFilteredHistory(filtered);
        } else {
          setFilteredHistory([]);
        }
      } catch (error) {
        console.error(error);
        setFilteredHistory([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (isSearchActivated) {
      filterHistory();
      setIsSearchActivated(false);
    }
  }, [city, isSearchActivated, setFilteredHistory]);

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {filteredHistory.length ? (
        <>
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

          <WeatherTable />
          <WeatherGraphs />
        </>
      ) : (
        <EmptyData />
      )}
    </>
  );
};
