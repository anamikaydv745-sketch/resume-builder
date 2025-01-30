import { Link } from "react-router";
import { FileDropZone } from "../components/FileDropZone";

export const Landing = () => {
    return (
        <div>
            <h1>Welcome to the Landing Page</h1>
            <Link to="/editor">Go to Editor</Link>
            <FileDropZone />
        </div>
    );
}