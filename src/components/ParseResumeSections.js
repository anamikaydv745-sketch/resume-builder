export const parseResumeSections = (rawText) => {
    const sectionHeadings = ["Work Experience", "Education", "Skills", "Projects", "Certifications"];
    const sections = {};
    let currentSection = "General";

    sections[currentSection] = [];

    const lines = rawText.split("\n");

    lines.forEach(line => {
        const trimmedLine = line.trim();

        if (sectionHeadings.some(heading => trimmedLine.toLowerCase().includes(heading.toLowerCase()))) {
            currentSection = trimmedLine;
            sections[currentSection] = [];
        } else {
            sections[currentSection].push(trimmedLine);
        }
    });

    return sections;
};
