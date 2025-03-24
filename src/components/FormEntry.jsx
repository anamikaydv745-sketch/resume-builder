import React from "react";
import { Arrow } from "../icons/Arrow";
import { Delete } from "../icons/Delete";
import { SECTION_LABELS } from "../utils/sectionLabels";

export const FormEntry = React.memo(function FormEntry({moveUp, moveDown, Ondelete, canMoveUp, canMoveDown, isDeletable, Form, formData, index, sectionKey}) {
    return (
        <div className="relative">
            <Form data={formData} />
            <div className="absolute right-0 top-0 flex gap-0.5 ">
                {canMoveUp && 
                    <span>
                        <button
                            className="rounded-full cursor-pointer outline-none hover:bg-gray-100 focus-visible:bg-gray-100 p-1"
                            type="button"
                            onClick={() => moveUp(index)}
                        >
                            <Arrow size="small" type="up" />
                            <span className="sr-only">Move up</span>
                        </button>
                    </span>
                }
                {canMoveDown &&
                    <span>
                        <button
                            className="rounded-full cursor-pointer outline-none hover:bg-gray-100 focus-visible:bg-gray-100 p-1"
                            type="button"
                            onClick={() => moveDown(index)}
                        >
                            <Arrow size="small" type="down" />
                            <span className="sr-only">Move down</span>
                        </button>
                    </span>
                }
                {isDeletable &&
                    <span>
                        <button
                            className="rounded-full cursor-pointer outline-none hover:bg-gray-100 focus-visible:bg-gray-100 p-1"
                            type="button"
                            onClick={() => Ondelete(formData.id)}
                        >
                            <Delete />
                            <span className="sr-only">Delete {SECTION_LABELS[sectionKey]}</span>
                        </button>
                    </span>
                }
            </div>
        </div>
    )
});