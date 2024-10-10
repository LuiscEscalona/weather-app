import * as XLSX from "xlsx";

export const generateExcel = <T>(
  data: T[],
  sheetName: string,
  file: string
): void => {
  if (data.length) {
    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, sheetName);
    XLSX.writeFile(workBook, file);
  }
};
