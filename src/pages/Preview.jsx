import { useSelector } from "react-redux"
import { Header } from "../components/preview/Header"
import { PREVIEW_SECTION_COMPONENTS } from "../utils/previewSectionMapping";

export const Preview = () => {
    const { sectionOrder, sectionVisibility, sectionTitles } = useSelector(state => state.resume.uiState);
    
    return (
        <main id="preview-page" className="p-6 pt-4 font-serif bg-[#fff] shadow-md">
            <Header />

            {sectionOrder.map((sectionKey) =>{
                const SectionComponent = PREVIEW_SECTION_COMPONENTS[sectionKey];
                return (
                    (SectionComponent && sectionVisibility[sectionKey]) ? 
                    <SectionComponent 
                        key={sectionKey}
                        title={sectionTitles[sectionKey]}
                    /> : null
                )
            })}
        </main>
    )
}