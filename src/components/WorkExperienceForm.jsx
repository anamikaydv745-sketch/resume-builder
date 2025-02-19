import { FormField } from "./FormField";

export const WorkExperienceForm = () => {

    return (
       <div className="grid grid-cols-3 gap-4">
            <FormField
                label="Company"
                name="company"
                placeholder="Enter the company name"
            />
            <FormField
                label="Job Title"
                name="job_title"
                placeholder="Enter the job title"
            />
            <FormField
                label="Date"
                name="date"
                placeholder="Jun 2022 - Present"
            />
            <FormField
                label="description"
                name="description"
                placeholder=""
            />
        </div>
    );
};
