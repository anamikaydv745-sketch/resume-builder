import { useSelector } from "react-redux";
import { SectionTitle } from "./SectionTitle";

export const WorkExperience = ({ title }) => {
  const workExperience = useSelector((state) => state.resume.workExperience);

  return (
    <section className="mb-6">
      <SectionTitle title={title} />

      {workExperience.map(({ id, jobTitle, company, date, description }) => (
        <div key={id} className="mb-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-[15px] leading-tight">
                {jobTitle}
              </h3>
              <p className="text-sm text-[#1e2939]">{company}</p>
            </div>
            <div className="text-sm text-[#364153] italic text-right whitespace-nowrap">
              <p>{date}</p>
            </div>
          </div>

          <div className="mt-1 ml-5 flex flex-col gap-1 text-[14px] leading-snug">
            {description.map(
              (point, idx) =>
                point && (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <p>{point}</p>
                  </div>
                )
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
