import type { Job } from "../../types/job";

interface Props {job: Job}

export default function JobAnalysisCard({ job }: Props) {
    return (
        <div className="border rounded-lg p-6 shadow-sm">

            <h2 className="text-xl font-semibold mb-6">
                AI Analysis
            </h2>

            <div className="grid grid-cols-2 gap-8">

                <div>

                    <h3 className="font-semibold mb-3">
                        Required Skills
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {job.required_skills?.map(skill => (
                            <span
                                key={skill}
                                className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                </div>

                <div>

                    <h3 className="font-semibold mb-3">
                        Preferred Skills
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {job.preferred_skills?.map(skill => (
                            <span
                                key={skill}
                                className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                </div>

            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">

                <div>

                    <h3 className="font-semibold">
                        Seniority
                    </h3>

                    <p className="mt-2">
                        {job.seniority ?? "Not detected"}
                    </p>

                </div>

                <div>

                    <h3 className="font-semibold">
                        Minimum Experience
                    </h3>

                    <p className="mt-2">
                        {job.min_experience ?? 0} years
                    </p>

                </div>

            </div>

        </div>
    );
}