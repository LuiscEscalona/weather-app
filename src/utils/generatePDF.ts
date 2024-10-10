import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async (id: string, name: string) => {
  const input = document.getElementById(id);
  if (!input) return;

  if (input) {
    try {
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save(name);
    } catch (err) {
      console.error("ERROR PDF", err);
    }
  }
};
