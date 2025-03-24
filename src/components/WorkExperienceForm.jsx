import { useEntryUpdater } from "../hooks/useEntryUpdater";
import { FormField } from "./FormField";

export const WorkExperienceForm = ({ data }) => {
    const { company, jobTitle, date, description } = data;

    const handleChange = useEntryUpdater("workExperience", data);

    return (
        <div className="grid grid-cols-6 gap-3">
            <FormField
                label="Company"
                name="company"
                placeholder="Enter the company name"
                colSpan="full"
                value={company || ""}
                onChange={handleChange}
            />
            <FormField
                label="Job Title"
                name="jobTitle"
                placeholder="Enter the job title"
                colSpan="4"
                value={jobTitle || ""}
                onChange={handleChange}
            />
            <FormField
                label="Date"
                name="date"
                placeholder="Jun 2022 - Present"
                colSpan="2"
                value={date || ""}
                onChange={handleChange}
            />
            <FormField
                label="Description"
                name="description"
                placeholder=""
                colSpan="full"
                type="bullet"
                value={description || []}
                onChange={handleChange}
            />
        </div>
    );
};
