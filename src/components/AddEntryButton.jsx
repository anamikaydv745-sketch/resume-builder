import { useDispatch } from "react-redux"
import { addEntry } from "../redux/resumeSlice";
import { Plus } from "../icons/Plus";
import { SECTION_LABELS } from "../utils/sectionLabels";

export const AddEntryButton = ({ sectionKey }) => {
    const dispatch = useDispatch();

    return (
        <div className="mt-2 flex justify-end">
            <button
                className="flex items-center rounded-md bg-white py-2 pl-3 pr-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                type="button"
                onClick={() => dispatch(addEntry(sectionKey))}
            >
                <Plus />
                Add {SECTION_LABELS[sectionKey]}
            </button>
        </div>  
    );
}