import { useDispatch, useSelector } from "react-redux";
import { BasicDetailsForm } from "../components/BasicDetailsForm";
import { FormContainer } from "../components/FormContainer";
import { Navbar } from "../components/Navbar";
import { moveSectionDown, moveSectionUp } from "../redux/resumeSlice";
//import { WorkExperienceForm } from "../components/WorkExperienceForm";

export const Builder = () => {
    const dispatch = useDispatch();

    const sectionOrder = useSelector(state => state.resume.uiState.sectionOrder);

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
                
                {sectionOrder.map((sectionKey, index) => (
                    <FormContainer 
                        key={sectionKey}
                        sectionKey={sectionKey}
                        title={sectionKey}
                        canMoveUp={index > 0}
                        canMoveDown={index < sectionOrder.length - 1}
                        moveUp={moveUp}
                        moveDown={moveDown}
                    >
                        <p>{sectionKey}</p>
                    </FormContainer>
                ))}
            </main>
        </>
    );
}