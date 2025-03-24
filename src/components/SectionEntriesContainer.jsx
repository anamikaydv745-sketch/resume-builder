import { useDispatch, useSelector } from "react-redux"
import { moveEntryUp, removeEntry } from "../redux/resumeSlice";
import { FormEntry } from "./FormEntry";
import { AddEntryButton } from "./AddEntryButton";

export const SectionEntriesContainer = ({sectionKey, FormComponent}) => {
    const entries = useSelector(state => state.resume[sectionKey]);
    const dispatch = useDispatch();

    const handleMoveUp = (index) => {
        dispatch(moveEntryUp({sectionKey, index}));
    };

    const handleMoveDown = (index) => {
        dispatch(moveEntryUp({sectionKey, index}));
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
                            <FormEntry
                                key={index}
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