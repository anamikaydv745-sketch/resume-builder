import { BasicDetailsForm } from "../components/BasicDetailsForm";
import { Navbar } from "../components/Navbar";

export const Builder = () => {
    return (
        <>
            <Navbar />
            <main className="bg-dots h-lvh">
                <BasicDetailsForm />
            </main>
        </>
    );
}