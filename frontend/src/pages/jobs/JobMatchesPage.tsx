import { useParams } from "react-router-dom";
import CandidateMatchCard from "../../components/matches/CandidateMatchCard";
import { useJobMatches } from "../../hooks/jobs/useJobMatches";

export default function JobMatchesPage() {
    const { id } = useParams();
    const {data: matches, isLoading, error} = useJobMatches(Number(id));

    if (isLoading) {
        return (
            <div className="p-8">
                Loading AI Matches...
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-8 text-red-500">
                Failed to load matches.
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    AI Candidate Matches
                </h1>

                <p className="text-gray-500 mt-2">
                    Candidates ranked by AI for this job.
                </p>
            </div>

            {matches?.length === 0 ? (

                <div className="border rounded-lg p-8 text-center">

                    No candidates found.

                </div>

            ) : (

                <div className="space-y-5">

                    {matches?.map(match => (

                        <CandidateMatchCard

                            key={match.id}

                            match={match}

                        />

                    ))}

                </div>

            )}

        </div>

    );

}