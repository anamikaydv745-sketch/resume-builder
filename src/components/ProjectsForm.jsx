import { useEntryUpdater } from "../hooks/useEntryUpdater";
import { FormField } from "./FormField"

export const ProjectsForm = ({ data }) => {

    const handleChange = useEntryUpdater("projects", data);

    return (
        <div className="grid grid-cols-6 gap-3">
            <FormField
                label="Project name"
                name="projectName"
                placeholder="Enter the project name"
                colSpan="4"
                value={data.projectName || ""}
                onChange={handleChange}
            />
            <FormField
                label="Date"
                name="date"
                placeholder="Jun 2022"
                colSpan="2"
                value={data.date || ""}
                onChange={handleChange}
            />
            <FormField
                label="Description"
                name="description"
                placeholder=""
                colSpan="full"
                type="bullet"
                value={data.description || []}
                onChange={handleChange}
            />
        </div>
    )
}