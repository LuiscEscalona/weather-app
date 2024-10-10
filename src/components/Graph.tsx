import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Box } from "@mui/material";

type ChartType = "line" | "bar" | "area" | "pie" | "scatter" | "radar";

interface Data {
  [key: string]: string | number;
}

interface Props<T extends Data> {
  data: T[];
  title: string;
  yLabel: string;
  xKey: (item: T) => string;
  yKey: (item: T) => number;
  chartType: ChartType;
  colors?: string[];
}

export const Graph = <T extends Data>({
  data,
  title,
  yLabel,
  xKey,
  yKey,
  chartType,
  colors = ["#1976d2"],
}: Props<T>) => {
  if (!data || !Array.isArray(data) || !data.length) {
    return <div>No hay datos para mostrar</div>;
  }

  const categories = data.map(xKey);
  const values = data.map(yKey);

  const options: ApexOptions = {
    chart: {
      id: title,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          pan: false,
          reset: false,
        },
      },
    },
    colors: colors,
    xaxis: {
      categories: categories,
      labels: {
        show: true,
        style: {
          fontSize: "8px",
        },
      },
    },
    yaxis: {
      title: {
        text: yLabel,
      },
      labels: {
        show: true,
        style: {
          fontSize: "8px",
        },
      },
    },
    title: {
      text: title,
      align: "center",
    },
  };

  const series = [
    {
      name: yLabel,
      data: values,
    },
  ];

  return (
    <Box flex="1 0 70%" display="flex" justifyContent="center" p={2} mb={2}>
      <Chart
        options={options}
        series={series}
        type={chartType}
        width="400"
        height={600}
      />
    </Box>
  );
};
