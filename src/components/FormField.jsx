export const FormField = ({ label, type = "text", name, value, onChange, placeholder, rows }) => {
    return (
        <div className={rows ? "col-span-2" : ""}>
            <label className="block text-sm font-medium mb-2">{label}</label>
            {type === "textarea" ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    rows={rows || 3}
                    className="w-full p-2 border rounded-md"
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full p-2 border rounded-md"
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};
