import { useSelector } from "react-redux";
import { SectionTitle } from "./SectionTitle";

export const Projects = ({ title }) => {
  const projects = useSelector((state) => state.resume.projects);

  return (
    <section className="mt-6">
        <SectionTitle title={title} />

        {projects.map((project) => (
            <div key={project.id} className="mb-3">
                <div className="flex justify-between text-[15px] font-semibold">
                    <span>{project.projectName}</span>
                    <span className="italic font-normal">{project.date}</span>
                </div>
                <div className="mt-1 ml-5 flex flex-col gap-1 text-[14px] leading-snug">
                    {project.description.map(
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
