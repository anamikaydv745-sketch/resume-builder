import { FormField } from "./FormField"

export const EducationForm = () => {
    return (
        <div className="grid grid-cols-6 gap-3">
            <FormField
                label="School"
                name="school"
                placeholder="Enter the school name"
                colSpan="4"
            />
            <FormField
                label="Date"
                name="date"
                placeholder="Jun 2022 - may 2025"
                colSpan="2"
            />
            <FormField
                label="Degree & Major"
                name="degree"
                placeholder="Enter the degree and major"
                colSpan="4"
            />
            <FormField
                label="GPA"
                name="gpa"
                placeholder="3.89"
                colSpan="2"
            />
        </div>
    )
}