import type { CandidateProfile } from "../../types/candidate";

interface Props {
    profile: CandidateProfile;
}

export default function AISummaryCard({

    profile,

}: Props) {

    return (

        <div className="border rounded-lg p-6">

            <h2 className="text-xl font-bold mb-4">

                AI Summary

            </h2>

            <p>

                {profile.ai_summary}

            </p>

        </div>

    );

}