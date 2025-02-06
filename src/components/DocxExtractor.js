import mammoth from "mammoth";

export const extractTextFromDOCX = async (file) => {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        return result.value;
    } catch (error) {
        console.error("Error extracting text from DOCX:", error);
        return "";
    }
};