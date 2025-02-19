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
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Basic Details</h2>

            <div className="grid grid-cols-3 gap-4">
                <FormField
                    label="Name" 
                    name="name" 
                    value={basicDetails.name || ""} 
                    onChange={handleChange} 
                    placeholder="Enter your full name" 
                />
                <FormField 
                    label="Email" 
                    type="email" 
                    name="email" 
                    value={basicDetails.email || ""} 
                    onChange={handleChange} 
                    placeholder="Enter your email" 
                />
                <FormField 
                    label="Objective" 
                    type="textarea" 
                    name="objective" 
                    value={basicDetails.objective || ""} 
                    onChange={handleChange} 
                    placeholder="Write a short objective..." 
                />
                <FormField 
                    label="Phone" 
                    name="phone" 
                    value={basicDetails.phone || ""} 
                    onChange={handleChange} 
                    placeholder="Enter your phone number" 
                />
                <FormField 
                    label="Website" 
                    name="website" 
                    value={basicDetails.website || ""} 
                    onChange={handleChange} 
                    placeholder="Your portfolio or LinkedIn URL" 
                />
                <FormField 
                    label="Location" 
                    name="location" 
                    value={basicDetails.location || ""} 
                    onChange={handleChange} 
                    placeholder="City, Country" 
                />
            </div>
        </div>
    );
};
