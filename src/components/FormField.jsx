import { BulletTextarea } from "./BulletTextarea";

export const FormField = ({ label, type = "text", name, value, onChange, placeholder, colSpan}) => {
    const colSpanMap = {
        full: "col-span-full",
        2: "col-span-2",
        3: "col-span-3",
        4: "col-span-4",
      };
    return (
        <label className={`text-base font-medium text-gray-700 ${colSpanMap[colSpan] || ''}`}>

            {label}
            {type === "textarea" ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base resize-none overflow-hidden"
                    placeholder={placeholder}
                    style={{ height: "64px" }}
                />
            ) : type === "bullet" ? (
                <BulletTextarea
                    value={value}
                    onChange={(lines) => onChange({ target: { name, value: lines } })}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base"
                    placeholder={placeholder}
                />
            )}
        </label>
    );
};
