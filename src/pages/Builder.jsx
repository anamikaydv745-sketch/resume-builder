import { useDispatch, useSelector } from "react-redux";
import { BasicDetailsForm } from "../components/BasicDetailsForm";
import { Navbar } from "../components/Navbar";
import { moveSectionDown, moveSectionUp } from "../redux/resumeSlice";
import { FORM_COMPONENTS } from "../utils/formMappings";
import { SectionEntriesContainer } from "../components/SectionEntriesContainer";
import { SectionWrapper } from "../components/SectionWrapper";
import { Preview } from "./Preview";
import { Download } from "../icons/Download";
import { handleDownload } from "../utils/htmlDownload";
import { useState } from "react";
import { Spinner } from "../icons/Spinner";

export const Builder = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const dispatch = useDispatch();

    const sectionOrder = useSelector(state => state.resume.uiState.sectionOrder);
    const sectionTitles = useSelector(state => state.resume.uiState.sectionTitles);

    const moveUp = (sectionKey) => {
        dispatch(moveSectionUp(sectionKey));
    }

    const moveDown = (sectionKey) => {
        dispatch(moveSectionDown(sectionKey));
    }
    return (
        <>
            <Navbar />
            <main className="bg-dots h-lvh">
                <div className="grid grid-cols-3 md:grid-cols-6">
                    <div className="col-span-3">
                        <div className="flex justify-center scrollbar-thin scrollbar-track-gray-100 md:h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end md:overflow-y-scroll scrollbar-thumb-gray-100">
                            <section className="flex max-w-2xl flex-col gap-8 p-[var(--resume-padding)]">
                                <BasicDetailsForm />
                    
                                {sectionOrder.map((sectionKey, index) => {
                                    const FormComponent = FORM_COMPONENTS[sectionKey];
                                    
                                    return (
                                        <SectionWrapper 
                                            key={sectionKey}
                                            sectionKey={sectionKey}
                                            title={sectionTitles[sectionKey]}
                                            canMoveUp={index > 0}
                                            canMoveDown={index < sectionOrder.length - 1}
                                            moveUp={moveUp}
                                            moveDown={moveDown}
                                            isLast={index == sectionOrder.length - 1}
                                        >
                                            <SectionEntriesContainer
                                                sectionKey={sectionKey}
                                                FormComponent={FormComponent}
                                            />
                                        </SectionWrapper>
                                    )
                                })}
                            </section>
                        </div>
                    </div>
                    <div className="col-span-3 flex justify-center overflow-y-auto h-[calc(100vh-var(--top-nav-bar-height))] p-4">
                        <div className="w-[793px] h-auto">
                            <Preview />
                            <div className="sticky bottom-[-20px] z-10 mt-4 bg-white py-4 ">
                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100 disabled:opacity-50"
                                        onClick={() => handleDownload(setIsDownloading)}
                                        disabled={isDownloading}
                                    >
                                        {isDownloading ? (
                                            <>
                                                <Spinner />
                                                <span>Generating...</span>
                                            </>
                                        ) : (
                                            <>
                                            <Download />
                                            <span className="whitespace-nowrap">Download Resume</span>
                                            </>
                                        )}
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
        </>
    );
}