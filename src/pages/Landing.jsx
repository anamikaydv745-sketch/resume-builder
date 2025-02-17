import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";

export const Landing = () => {
    
    return (
        <>
            <Navbar />
            <main className="bg-dots h-lvh max-w-[55%] mx-auto mt-10">
                <HeroSection className="my-8"/>
            </main>
        </>
    );
};
