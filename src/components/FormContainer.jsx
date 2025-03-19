import React from "react";
import { ICON_MAPPINGS } from "../utils/iconMappings";

// eslint-disable-next-line no-unused-vars
export const FormContainer = React.memo(function FormContainer({sectionKey, title, onTitleChange, children, moveUp, moveDown, canMoveUp, canMoveDown}) {
    const IconComponent = ICON_MAPPINGS[sectionKey]
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
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                ></path>
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                            </svg>
                        </button>
                    </span>
                </div>
            </div> 
            {children}
        </div>
    );
});