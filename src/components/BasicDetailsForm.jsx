import { useDispatch, useSelector } from "react-redux";
import { setBasicDetails } from "../redux/resumeSlice";
import { FormField } from "./FormField";

export const BasicDetailsForm = () => {
    const dispatch = useDispatch();
    const basicDetails = useSelector((state) => state.resume.basicDetails);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setBasicDetails({ ...basicDetails, [name]: value }));
    };

    return (
        <section className="flex flex-col gap-3 rounded-md bg-white p-6 pt-4 shadow transition-opacity duration-200 undefined">
            

            <div className="grid grid-cols-6 gap-3">
                <FormField
                    label="Name" 
                    name="name" 
                    value={basicDetails.name || ""} 
                    onChange={handleChange} 
                    placeholder="Enter your full name" 
                    colSpan="full"
                />
                <FormField 
                    label="Objective" 
                    type="textarea" 
                    name="objective" 
                    value={basicDetails.objective || ""} 
                    onChange={handleChange} 
                    placeholder="Write a short objective..." 
                    colSpan="full"
                />
                <FormField 
                    label="Email" 
                    type="email" 
                    name="email" 
                    value={basicDetails.email || ""} 
                    onChange={handleChange} 
                    placeholder="Enter your email" 
                    colSpan="4"
                />
                
                <FormField 
                    label="Phone" 
                    name="phone" 
                    value={basicDetails.phone || ""} 
                    onChange={handleChange} 
                    placeholder="Enter your phone number" 
                    colSpan="2"
                />
                <FormField 
                    label="Website" 
                    name="website" 
                    value={basicDetails.website || ""} 
                    onChange={handleChange} 
                    placeholder="Your portfolio or LinkedIn URL" 
                    colSpan="4"
                />
                <FormField 
                    label="Location" 
                    name="location" 
                    value={basicDetails.location || ""} 
                    onChange={handleChange} 
                    placeholder="City, Country" 
                    colSpan="2"
                />
            </div>
        </section>
    );
};
