import { useWeatherContext } from "../context/useWeatherContext";
import { ContentSection } from "./ContentSection";
import { DataTable } from "./DataTable";
import { tableHeader } from "../data/tableHeader";
import { ContentTable } from "./ContentTable";

export const WeatherTable = () => {
  const { filteredHistory } = useWeatherContext();

  return (
    <>
      <ContentSection title="Histórico" direction="column">
        <DataTable header={tableHeader}>
          <ContentTable rows={filteredHistory} />
        </DataTable>
      </ContentSection>
    </>
  );
};
