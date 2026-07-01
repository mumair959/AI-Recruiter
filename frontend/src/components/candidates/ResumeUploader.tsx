import { useRef } from "react";
import { useUploadResume } from "../../hooks/candidates/useUploadResume";

interface Props {
    candidateId: number;
}

export default function ResumeUploader({candidateId}: Props) {

    const inputRef = useRef<HTMLInputElement>(null);

    const upload = useUploadResume();

    const chooseFile = () => {

        inputRef.current?.click();

    };

    const fileChanged = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const file = e.target.files?.[0];

        if (!file) return;

        upload.mutate({
            id: candidateId,
            file,
        });

    };

    return (

        <div>

            <button

                onClick={chooseFile}

                className="bg-blue-600 text-white px-4 py-2 rounded"

            >

                {upload.isPending

                    ? "Uploading..."

                    : "Upload Resume"}

            </button>

            <input

                ref={inputRef}

                type="file"

                accept=".pdf"

                hidden

                onChange={fileChanged}

            />

        </div>

    );

}