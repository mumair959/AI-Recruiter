import { useNavigate } from "react-router-dom";
import CandidateForm from "../../components/candidates/CandidateForm";
import { useCreateCandidate } from "../../hooks/candidates/useCreateCandidate";
import type { CandidateFormData } from "../../types/candidate.schema";

export default function CreateCandidatePage() {

    const navigate = useNavigate();

    const mutation = useCreateCandidate();

    const submit = (data: CandidateFormData) => {

        mutation.mutate(data, {

            onSuccess: (candidate) => {

                navigate(`/candidates/${candidate.id}`);

            },

        });

    };

    return (

        <div>

            <h1 className="text-2xl font-bold mb-6">

                Create Candidate

            </h1>

            <CandidateForm

                onSubmit={submit}

                loading={mutation.isPending}

            />

        </div>

    );

}