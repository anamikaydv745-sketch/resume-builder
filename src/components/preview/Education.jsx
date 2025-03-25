import { useSelector } from "react-redux";
import { SectionTitle } from "./SectionTitle";

export const Education = ({ title }) => {
  const education = useSelector((state) => state.resume.education);

  return (
    <section className="mt-6">
        <SectionTitle title={title} />

        <div className="flex flex-col gap-3 mt-2 text-[14px]">
            {education.map((edu) => (
                <div key={edu.id}>
                    <div className="flex justify-between">
                        <p>
                            <span className="font-semibold">{edu.degreeAndMajor},</span>{" "}
                            <span className="">{edu.school}</span>
                        </p>
                        <p className="text-sm whitespace-nowrap text-right">{edu.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};
