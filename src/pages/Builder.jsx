import { useDispatch, useSelector } from "react-redux";
import { BasicDetailsForm } from "../components/BasicDetailsForm";
import { Navbar } from "../components/Navbar";
import { moveSectionDown, moveSectionUp } from "../redux/resumeSlice";
import { FORM_COMPONENTS } from "../utils/formMappings";
import { SectionEntriesContainer } from "../components/SectionEntriesContainer";
import { SectionWrapper } from "../components/SectionWrapper";

export const Builder = () => {
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
                        >
                            <SectionEntriesContainer
                                sectionKey={sectionKey}
                                FormComponent={FormComponent}
                            />
                        </SectionWrapper>
                    )
                })}
            </main>
        </>
    );
}