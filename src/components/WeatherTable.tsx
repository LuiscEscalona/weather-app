import { useWeatherContext } from "../context";
import { ContentSection, DataTable } from "./common";
import { ContentTable } from "./ContentTable";
import { tableHeader } from "../data/tableHeader";

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
