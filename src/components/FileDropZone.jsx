import { useCallback } from "react"
import { useDropzone } from "react-dropzone";

export const FileDropZone = () => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="h-[260px] w-[500px] rounded-xl border-2 border-dashed border-teal-500 flex justify-center items-center cursor-pointer">
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
          }
        </div>
      )
}