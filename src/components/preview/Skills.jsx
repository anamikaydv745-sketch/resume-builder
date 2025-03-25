import { useSelector } from "react-redux";
import { SectionTitle } from "./SectionTitle";

export const Skills = ({ title }) => {
  const skills = useSelector(state => state.resume.skills);

  return (
    <section className="mb-4">
      <SectionTitle title={title} />
      <div className="flex flex-col gap-1 text-[14px] leading-snug">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-sm">•</span>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
