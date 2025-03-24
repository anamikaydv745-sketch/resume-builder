import React from "react";
import { ICON_MAPPINGS } from "../utils/iconMappings";
import { useDispatch, useSelector } from "react-redux";
import { toggleSectionVisibility, updateSectionTitle } from "../redux/resumeSlice";
import { OpenEye } from "../icons/OpenEye";
import { ClosedEye } from "../icons/ClosedEye";
import { Arrow } from "../icons/Arrow";

export const SectionWrapper = React.memo(function SectionWrapper({sectionKey, title, children, moveUp, moveDown, canMoveUp, canMoveDown}) {
    const IconComponent = ICON_MAPPINGS[sectionKey];
    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.resume.uiState.sectionVisibility[sectionKey]);

    const onTitleChange = (sectionKey, title) => {
        dispatch(updateSectionTitle({
            sectionKey,
            title
        }))
    };
    return (
        <div className="rounded-lg bg-white p-6 pt-4 shadow-md">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-grow">
                {IconComponent && <IconComponent />}
                <input
                    className="block w-full border-b border-transparent text-lg font-semibold tracking-wide text-gray-900 outline-none hover:border-gray-300 hover:shadow-sm focus:border-gray-300 focus:shadow-sm"
                    type="text"
                    value={title}
                    onChange={(e) => onTitleChange(sectionKey, e.target.value)}
                />
                </div>
                <div className="flex items-center gap-0.5">
                    {canMoveUp && 
                        <span>
                            <button
                                className="rounded-full cursor-pointer outline-none hover:bg-gray-100 focus-visible:bg-gray-100 p-1.5"
                                type="button"
                                onClick={() => moveUp(sectionKey)}
                            >
                                <Arrow size="large" type="up" />
                            </button>
                        </span>
                    }
                    {canMoveDown &&
                        <span>
                            <button
                                className="rounded-full cursor-pointer outline-none hover:bg-gray-100 focus-visible:bg-gray-100 p-1.5"
                                type="button"
                                onClick={() => moveDown(sectionKey)}
                            >
                                <Arrow size="large" type="down" />
                            </button>
                        </span>
                    }
                    <span>
                        <button
                            className="rounded-full cursor-pointer outline-none hover:bg-gray-100 focus-visible:bg-gray-100 p-1.5"
                            type="button"
                            onClick={() => dispatch(toggleSectionVisibility(sectionKey))}
                        >
                            {isVisible ? <OpenEye /> : <ClosedEye />}
                        </button>
                    </span>
                    
                </div>
            </div> 

            {isVisible && children}
        </div>
    );
});