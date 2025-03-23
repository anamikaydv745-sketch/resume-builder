import { FormField } from "./FormField"

export const ProjectsForm = () => {
    return (
        <div className="grid grid-cols-6 gap-3">
            <FormField
                label="Project name"
                name="name"
                placeholder="Enter the project name"
                colSpan="4"
            />
            <FormField
                label="Date"
                name="date"
                placeholder="Jun 2022"
                colSpan="2"
            />
            <FormField
                label="Description"
                name="description"
                placeholder=""
                colSpan="full"
                type="bullet"
            />
        </div>
    )
}