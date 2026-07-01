import { useParams } from "react-router-dom";

import { useJob } from "../../hooks/jobs/useJob";

import JobAnalysisCard from "../../components/jobs/JobAnalysisCard";

export default function JobDetailsPage() {
    const { id } = useParams();
    const {data: job, isLoading, error} = useJob(Number(id));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error || !job) {
        return <div>Job not found.</div>;
    }

    return (

        <div className="space-y-8">

            <div className="border rounded-lg p-6">

                <h1 className="text-3xl font-bold">
                    {job.title}
                </h1>

                <div className="grid grid-cols-2 gap-6 mt-6">

                    <div>

                        <p className="text-gray-500">
                            Department
                        </p>

                        <p>{job.department}</p>

                    </div>

                    <div>

                        <p className="text-gray-500">
                            Location
                        </p>

                        <p>{job.location}</p>

                    </div>

                    <div>

                        <p className="text-gray-500">
                            Status
                        </p>

                        <p>{job.status}</p>

                    </div>

                    <div>

                        <p className="text-gray-500">
                            Experience
                        </p>

                        <p>{job.experience_years} Years</p>

                    </div>

                </div>

            </div>

            <div className="border rounded-lg p-6">

                <h2 className="text-xl font-semibold mb-3">
                    Description
                </h2>

                <p className="whitespace-pre-line">
                    {job.description}
                </p>

            </div>

            <div className="border rounded-lg p-6">

                <h2 className="text-xl font-semibold mb-3">
                    Requirements
                </h2>

                <p className="whitespace-pre-line">
                    {job.requirements}
                </p>

            </div>

            <JobAnalysisCard job={job} />

        </div>

    );

}