import { useSelector } from "react-redux";
import { SectionTitle } from "./SectionTitle";

export const Header = () => {
  const { name, phone, location, email, website, objective } = useSelector(
    (state) => state.resume.basicDetails
  );

  return (
    <>
    <section className="flex flex-col items-center text-center gap-1">
        <h1 className="text-2xl font-semibold tracking-wide text-[#101828]">
            {name}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-x-2 text-sm text-[#364153]">
            {phone && <span>{phone}</span>}
            {phone && location && <span className="text-[#364153]">•</span>}
            {location && <span>{location}</span>}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-2 text-sm text-[#155dfc]">
            {email && (
                <>
                    <a
                    href={`mailto:${email}`}
                    className="hover:underline"
                    >
                    {email}
                    </a>
                </>
            )}
            {email && website && <span className="text-[#364153]">•</span>}
            {website && (
                <a
                    href={website.startsWith("http://") || website.startsWith("https://") ? website : `http://${website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    {website.replace(/^https?:\/\//, "")}
                </a>
            )}
        </div>
        <div className="text-left w-[100%]">
            <SectionTitle title="Objective" />
            <p className="text-[14px] leading-snug mt-1 font-serif">{objective}</p>
        </div>
    </section>
    </>
  );
};
