import React from "react";
import { ICON_MAPPINGS } from "../utils/iconMappings";
import { useDispatch, useSelector } from "react-redux";
import { toggleSectionVisibility } from "../redux/resumeSlice";
import { OpenEye } from "../icons/OpenEye";
import { ClosedEye } from "../icons/ClosedEye";

// eslint-disable-next-line no-unused-vars
export const SectionWrapper = React.memo(function SectionWrapper({sectionKey, title, onTitleChange, children, moveUp, moveDown, canMoveUp, canMoveDown}) {
    const IconComponent = ICON_MAPPINGS[sectionKey];
    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.resume.uiState.sectionVisibility[sectionKey]);
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-6 text-gray-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                                    ></path>
                                </svg>
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
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth="1.5" 
                                    stroke="currentColor" 
                                    aria-hidden="true" 
                                    className="h-6 w-6 text-gray-400"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                                    ></path>
                                </svg>
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