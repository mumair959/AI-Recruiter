import { useParams } from "react-router-dom";

import { useCandidate } from "../../hooks/candidates/useCandidate";

import ResumeUploader from "../../components/candidates/ResumeUploader";
import AISummaryCard from "../../components/candidates/AISummaryCard";
import SkillsCard from "../../components/candidates/SkillsCard";
import ExperienceCard from "../../components/candidates/ExperienceCard";
import EducationCard from "../../components/candidates/EducationCard";
import ExperienceHistoryCard from "../../components/candidates/ExperienceHistoryCard";
import StrengthsCard from "../../components/candidates/StrengthsCard";
import RecommendedRolesCard from "../../components/candidates/RecommendedRolesCard";

export default function CandidateDetailsPage() {

    const { id } = useParams();

    const {
        data: candidate,
        isLoading,
        error,
    } = useCandidate(Number(id));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error || !candidate) {
        return <div>Candidate not found.</div>;
    }

    return (
        <div className="space-y-6">

            {/* Basic Information */}

            <div className="border rounded-lg p-6">

                <h1 className="text-3xl font-bold">
                    {candidate.name}
                </h1>

                <div className="mt-4 space-y-2">

                    <p>
                        <strong>Email:</strong> {candidate.email}
                    </p>

                    <p>
                        <strong>Phone:</strong> {candidate.phone}
                    </p>

                </div>

            </div>

            {/* Resume */}

            <div className="border rounded-lg p-6">

                <div className="flex justify-between items-center">

                    <div>

                        <h2 className="text-xl font-semibold">
                            Resume
                        </h2>

                        <p className="text-gray-500 mt-2">

                            {candidate.resume_path
                                ? "Resume Uploaded ✅"
                                : "No Resume Uploaded"}

                        </p>

                    </div>

                    <ResumeUploader
                        candidateId={candidate.id}
                    />

                </div>

            </div>

            {/* AI Profile */}

            {!candidate.profile ? (

                <div className="border rounded-lg p-8 text-center">

                    <h2 className="text-xl font-semibold">

                        AI Profile

                    </h2>

                    <p className="text-gray-500 mt-3">

                        Upload a resume to generate AI insights.

                    </p>

                </div>

            ) : (

                <>

                    <AISummaryCard
                        profile={candidate.profile}
                    />

                    <ExperienceCard
                        profile={candidate.profile}
                    />

                    <SkillsCard
                        skills={candidate.profile.skills}
                    />

                    <EducationCard
                        education={candidate.profile.education}
                    />

                    <ExperienceHistoryCard
                        experience={candidate.profile.experience}
                    />

                    <StrengthsCard
                        strengths={candidate.profile.strengths}
                    />

                    <RecommendedRolesCard
                        roles={candidate.profile.recommended_roles}
                    />

                </>

            )}

        </div>
    );
}