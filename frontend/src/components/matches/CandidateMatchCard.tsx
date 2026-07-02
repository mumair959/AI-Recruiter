import type { CandidateMatch } from "../../types/match";

interface Props {match: CandidateMatch}

export default function CandidateMatchCard({ match }: Props) {
    const scoreColor = () => {
        if (match.score >= 90) return "text-green-600";
        if (match.score >= 75) return "text-yellow-600";
        return "text-red-600";
    };

    const recommendation = () => {
        if (match.score >= 90) return "Highly Recommended";
        if (match.score >= 75) return "Recommended";
        return "Needs Review";
    };

    return (
        <div className="border rounded-lg p-6 bg-white shadow">

            <div className="flex justify-between items-start">

                <div>
                    <h2 className="text-xl font-bold">
                        {match.candidate.name}
                    </h2>

                    <p className="text-gray-500">
                        {match.candidate.email}
                    </p>

                    <p className="text-gray-500">
                        {match.candidate.phone}
                    </p>
                </div>

                <div className="text-right">

                    <div className={`text-4xl font-bold ${scoreColor()}`}>
                        {match.score}%
                    </div>

                    <div className="text-sm text-gray-500">
                        {recommendation()}
                    </div>

                </div>

            </div>

            <hr className="my-5" />

            <div className="mb-5">

                <h3 className="font-semibold mb-2">
                    Matched Skills
                </h3>

                <div className="flex flex-wrap gap-2">

                    {match.matched_skills.length > 0 ? (

                        match.matched_skills.map(skill => (

                            <span
                                key={skill}
                                className="px-3 py-1 rounded-full bg-green-100 text-green-700"
                            >
                                {skill}
                            </span>

                        ))

                    ) : (

                        <span className="text-gray-500">
                            None
                        </span>

                    )}

                </div>

            </div>

            <div className="mb-5">

                <h3 className="font-semibold mb-2">
                    Missing Skills
                </h3>

                <div className="flex flex-wrap gap-2">

                    {match.missing_skills.length > 0 ? (

                        match.missing_skills.map(skill => (

                            <span
                                key={skill}
                                className="px-3 py-1 rounded-full bg-red-100 text-red-700"
                            >
                                {skill}
                            </span>

                        ))

                    ) : (

                        <span className="text-green-600">
                            No Missing Skills
                        </span>

                    )}

                </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

                <div className="border rounded p-3">

                    <h4 className="font-semibold">
                        Experience
                    </h4>

                    <p>
                        {match.experience_match
                            ? "✅ Match"
                            : "❌ Mismatch"}
                    </p>

                </div>

                <div className="border rounded p-3">

                    <h4 className="font-semibold">
                        Seniority
                    </h4>

                    <p>
                        {match.seniority_match
                            ? "✅ Match"
                            : "❌ Mismatch"}
                    </p>

                </div>

            </div>

            <div className="mt-5">

                <h3 className="font-semibold">
                    AI Recommendation About Candidate
                </h3>

                <div className="flex flex-wrap gap-2">
                    <span className="text-red-600">
                        {match.recommendation}
                    </span>
                </div>
            </div>
        </div>
    );
}