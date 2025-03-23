import { FormField } from "./FormField";

export const WorkExperienceForm = () => {

    return (
        <div className="grid grid-cols-6 gap-3">
            <FormField
                label="Company"
                name="company"
                placeholder="Enter the company name"
                colSpan="full"
            />
            <FormField
                label="Job Title"
                name="job_title"
                placeholder="Enter the job title"
                colSpan="4"
            />
            <FormField
                label="Date"
                name="date"
                placeholder="Jun 2022 - Present"
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
    );
};
