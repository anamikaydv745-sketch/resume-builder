import { useDispatch } from "react-redux"
import { FormField } from "./FormField"
import { setSkills } from "../redux/resumeSlice";

export const SkillsForm = ({ data }) => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const value = e.target.value;

        dispatch(setSkills(value));
    }
    return (
        <FormField
            label="Description"
            name="description"
            placeholder=""
            colSpan="full"
            type="bullet"
            value={data}
            onChange={handleChange}
        />
    )
}