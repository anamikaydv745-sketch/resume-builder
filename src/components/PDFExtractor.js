import pdfToText from "react-pdftotext";

export const extractTextFromPDF = async (file) => {
    try {
        const text = await pdfToText(file);
        return text;
    } catch (error) {
        console.error("Error extracting text from PDF:", error);
        return "";
    }
};