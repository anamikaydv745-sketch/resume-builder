import { BasicDetailsForm } from "../components/BasicDetailsForm";
import { FormContainer } from "../components/FormContainer";
import { Navbar } from "../components/Navbar";
//import { WorkExperienceForm } from "../components/WorkExperienceForm";

export const Builder = () => {
    return (
        <>
            <Navbar />
            <main className="bg-dots h-lvh">
                <BasicDetailsForm />
                <FormContainer 
                    sectionKey="workExperience"
                    title="Work Experience"
                    canMoveUp={true}
                    canMoveDown={true}
                >
                    <p>Aswan</p>
                </FormContainer>
            </main>
        </>
    );
}