import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone";

// eslint-disable-next-line react/prop-types
export const FileDropZone = ({ onFileUpload }) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const fileType = file.name.split('.').pop().toLowerCase();

        if (!["docx", "doc"].includes(fileType)) {
            setIsError(true);
            setErrorMessage("Kindly upload a .docx, or .doc file");
        } else {
            setIsError(false);
            onFileUpload(file); 
        }

    }, [onFileUpload]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });

    return (
        <>
          <div {...getRootProps()} className="h-[260px] w-[500px] rounded-xl border-2 border-dashed border-teal-500 flex justify-center items-center cursor-pointer">
            <input {...getInputProps()} accept=".docx,.doc"/>
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag &apos;n&apos; drop a files here, we accept .docx and .doc files</p>
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