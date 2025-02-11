import { Link } from "react-router";
import { FileDropZone } from "../components/FileDropZone";
import { useState } from "react";
import { parseResumeSections } from "../components/ParseResumeSections";
import { extractTextFromDOCX } from "../components/DocxExtractor";

export const Landing = () => {
    const [resumeText, setResumeText] = useState("");
    const [resumeSections, setResumeSections] = useState({});

    const handleFileUpload = async (file) => {
        
        let extractedText = "";

        extractedText = await extractTextFromDOCX(file);

        setResumeText(extractedText);
        setResumeSections(parseResumeSections(extractedText));

        console.log(extractedText)
        console.log(parseResumeSections(extractedText))
    };
    return (
        <div>
            <h1>Welcome to the Landing Page</h1>
            <Link to="/editor">Go to Editor</Link>
            <FileDropZone onFileUpload={handleFileUpload}/>
            <div>{resumeText}</div>
            <div>{JSON.stringify(resumeSections)}</div>
        </div>
    );
}