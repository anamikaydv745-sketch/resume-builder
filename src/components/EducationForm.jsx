import { FormField } from "./FormField";
import { useEntryUpdater } from "../hooks/useEntryUpdater";

export const EducationForm = ({ data }) => {

    const handleChange = useEntryUpdater("education", data);
    
    return (
        <div className="grid grid-cols-6 gap-3">
            <FormField
                label="School"
                name="school"
                placeholder="Enter the school name"
                colSpan="4"
                value={data.school || ""}
                onChange={handleChange}
            />
            <FormField
                label="Date"
                name="date"
                placeholder="Jun 2022 - may 2025"
                colSpan="2"
                value={data.date || ""}
                onChange={handleChange}
            />
            <FormField
                label="Degree & Major"
                name="degreeAndMajor"
                placeholder="Enter the degree and major"
                colSpan="4"
                value={data.degreeAndMajor || ""}
                onChange={handleChange}
            />
            <FormField
                label="GPA"
                name="gpa"
                placeholder="3.89"
                colSpan="2"
                value={data.gpa || ""}
                onChange={handleChange}
            />
        </div>
    )
}