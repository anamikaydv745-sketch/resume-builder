import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone";

export const FileDropZone = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const onDrop = useCallback(acceptedFiles => {
        let path = acceptedFiles[0].path;

        if(!(path.includes(".docx") || path.includes(".doc") || path.includes(".pdf"))) {

          setIsError(true);
          setErrorMessage("Kindly upload .pdf, .docx or .doc files");

        } else {
          setIsError(false);
        }

    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });

    return (
        <>
          <div {...getRootProps()} className="h-[260px] w-[500px] rounded-xl border-2 border-dashed border-teal-500 flex justify-center items-center cursor-pointer">
            <input {...getInputProps()} accept=".pdf,.docx,.doc"/>
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag &apos;n&apos; drop a files here, we accept .pdf, .docx and .doc files</p>
            }
          </div>
          {isError ? 
            <div className="text-red-700 bg-red-100 p-2 border border-red-600 w-[500px] mt-4">
              {errorMessage}
            </div> :
            ""
          }
          
        </>
      )
}