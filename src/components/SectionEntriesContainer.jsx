import { useDispatch, useSelector } from "react-redux"
import { moveEntryDown, moveEntryUp, removeEntry } from "../redux/resumeSlice";
import { FormEntry } from "./FormEntry";
import { AddEntryButton } from "./AddEntryButton";

export const SectionEntriesContainer = ({sectionKey, FormComponent}) => {
    const entries = useSelector(state => state.resume[sectionKey]);
    const dispatch = useDispatch();

    const handleMoveUp = (index) => {
        dispatch(moveEntryUp({sectionKey, index}));
    };

    const handleMoveDown = (index) => {
        dispatch(moveEntryDown({sectionKey, index}));
    };

    const handleDelete = (id) => {
        dispatch(removeEntry({sectionKey, id}));
    };

    return (
        <> 
            { sectionKey != "skills" ? (
                <>
                    {entries.map((entry, index) => {
                        return (
                            <div
                                key={entry.id}
                            >
                                <FormEntry
                                    index={index}
                                    canMoveUp={index > 0}
                                    canMoveDown={index < entries.length - 1}
                                    isDeletable={entries.length > 1}
                                    sectionKey={sectionKey}
                                    Form={FormComponent}
                                    formData={entry}
                                    moveUp={handleMoveUp}
                                    moveDown={handleMoveDown}
                                    Ondelete={handleDelete}
                                />
                                {index !== entries.length - 1 && (
                                    <div className="mb-4 mt-6 border-t-2 border-dotted border-gray-200"></div>
                                )}
                            </div>
                        )
                    })}
                    <AddEntryButton sectionKey={sectionKey} />
                </>
            ) : (
                <FormEntry
                    index="0"
                    canMoveUp={false}
                    canMoveDown={false}
                    isDeletable={false}
                    sectionKey={sectionKey}
                    Form={FormComponent}
                    formData={entries}
                />
            )}
        </>
    )
}