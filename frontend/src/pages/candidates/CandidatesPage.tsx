import { Link } from "react-router-dom";

import CandidateTable from "../../components/candidates/CandidateTable";

import { useCandidates } from "../../hooks/candidates/useCandidates";

export default function CandidatesPage() {

    const {

        data,

        isLoading,

        error,

    } = useCandidates();

    const candidates = data?.data ?? [];

    if (isLoading) {

        return <div>Loading candidates...</div>;

    }

    if (error) {

        return <div>Failed to load candidates.</div>;

    }

    return (

        <div>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-2xl font-bold">

                    Candidates

                </h1>

                <Link

                    to="/candidates/create"

                    className="bg-blue-600 text-white px-4 py-2 rounded"

                >

                    Create Candidate

                </Link>

            </div>

            <CandidateTable
                candidates={candidates}
            />

        </div>

    );

}