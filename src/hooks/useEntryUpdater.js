import { useDispatch } from "react-redux";
import { updateEntry } from "../redux/resumeSlice";
import { useCallback } from "react";

export const useEntryUpdater = (sectionKey, data) => {
    const dispatch = useDispatch();

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        const updatedData = {
            ...data,
            [name]: value
        }
        dispatch(updateEntry({
            sectionKey,
            id: data.id,
            updatedData
        }));
    }, [sectionKey, dispatch, data]);

    return handleChange;
}