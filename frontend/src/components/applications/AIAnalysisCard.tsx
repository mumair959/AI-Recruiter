import type { CandidateMatch } from "../../types/match";

interface Props {
    match: CandidateMatch | null;
}

export default function AIAnalysisCard({ match }: Props) {

    if (!match) {

        return (
            <div className="border rounded-lg p-6 bg-white shadow">
                <h2 className="text-xl font-bold mb-2">
                    AI Recruiter Analysis
                </h2>

                <p className="text-gray-500">
                    AI analysis is pending...
                </p>
            </div>
        );

    }

    const scoreColor = () => {

        if (match.score >= 90) return "text-green-600";

        if (match.score >= 75) return "text-yellow-600";

        return "text-red-600";

    };

    const recommendationColor = () => {

        switch (match.recommendation) {

            case "Interview":
                return "text-green-600";

            case "Consider":
                return "text-yellow-600";

            case "Reject":
                return "text-red-600";

            default:
                return "text-gray-600";

        }

    };

    return (

        <div className="border rounded-lg p-6 bg-white shadow">

            <div className="flex justify-between items-start">

                <div>

                    <h2 className="text-xl font-bold">
                        AI Recruiter Analysis
                    </h2>

                    <p className="text-gray-500">
                        AI generated candidate assessment
                    </p>

                </div>

                <div className="text-right">

                    <div className={`text-4xl font-bold ${scoreColor()}`}>
                        {match.score}%
                    </div>

                    <div className={`font-semibold ${recommendationColor()}`}>
                        {match.recommendation}
                    </div>

                </div>

            </div>

            <hr className="my-6" />

            <div className="mb-6">

                <h3 className="font-semibold mb-2">
                    Summary
                </h3>

                <p className="text-gray-700">
                    {match.summary || "No summary available."}
                </p>

            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">

                <div>

                    <h3 className="font-semibold mb-2">
                        Strengths
                    </h3>

                    <ul className="space-y-2">

                        {match.strengths.length > 0 ? (

                            match.strengths.map(item => (

                                <li
                                    key={item}
                                    className="text-green-700"
                                >
                                    ✅ {item}
                                </li>

                            ))

                        ) : (

                            <li className="text-gray-500">
                                None
                            </li>

                        )}

                    </ul>

                </div>

                <div>

                    <h3 className="font-semibold mb-2">
                        Weaknesses
                    </h3>

                    <ul className="space-y-2">

                        {match.weaknesses.length > 0 ? (

                            match.weaknesses.map(item => (

                                <li
                                    key={item}
                                    className="text-yellow-700"
                                >
                                    ⚠️ {item}
                                </li>

                            ))

                        ) : (

                            <li className="text-gray-500">
                                None
                            </li>

                        )}

                    </ul>

                </div>

            </div>

            <div className="mb-6">

                <h3 className="font-semibold mb-2">
                    Missing Skills
                </h3>

                <div className="flex flex-wrap gap-2">

                    {match.missing_skills.length > 0 ? (

                        match.missing_skills.map(skill => (

                            <span
                                key={skill}
                                className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm"
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

            <div className="mb-6">

                <h3 className="font-semibold mb-2">
                    Red Flags
                </h3>

                <ul className="space-y-2">

                    {match.red_flags.length > 0 ? (

                        match.red_flags.map(flag => (

                            <li
                                key={flag}
                                className="text-red-600"
                            >
                                🚩 {flag}
                            </li>

                        ))

                    ) : (

                        <span className="text-green-600">
                            No Red Flags
                        </span>

                    )}

                </ul>

            </div>

            <div className="grid grid-cols-3 gap-4">

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

                <div className="border rounded p-3">

                    <h4 className="font-semibold">
                        Confidence
                    </h4>

                    <p>

                        {match.confidence}%

                    </p>

                </div>

            </div>

        </div>

    );

}