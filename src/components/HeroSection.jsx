import { Button } from "./Button";
import { useNavigate } from "react-router";
export const HeroSection = () => {
    const navigate = useNavigate();

    const buttonClickHandler = () => {
        navigate('/builder');
    }
    return (
        <section className="max-w-[55%] mx-auto mt-10 flex flex-col items-center">
            <h1 className="text-6xl leading-[76px] font-bold text-center">Build your ATS <span className="bg-gradient-to-r from-[#604cc7] to-[#44327b] text-transparent bg-clip-text">friendly resume</span> in Minutes</h1>
            <div className="mt-14">
                <Button type="button" onClick={buttonClickHandler} text="Build Resume"/>
            </div>
            <p className="mt-3 text-sm text-gray-600">No Sign up required</p>
        </section>
    );
}