import { useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useUpdateApplicationStatus } from "../../hooks/applications/useUpdateApplicationStatus";
import { useApplication } from "../../hooks/applications/useApplication";
import AIAnalysisCard from "../../components/applications/AIAnalysisCard";

export default function ApplicationDetailsPage() {

    const { id } = useParams();
    const updateStatus = useUpdateApplicationStatus();

    const {

        data: application,

        isLoading,

        error,

    } = useApplication(Number(id));

    if (isLoading) {

        return <div>Loading application...</div>;

    }

    if (error || !application) {

        return <div>Application not found.</div>;

    }

    return (

        <div className="space-y-6">

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-2xl font-bold">

                        {application.candidate.name}

                    </h1>

                    <p className="text-gray-500">

                        {application.employment_job.title}

                    </p>

                </div>

                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">

                    {application.status}

                </span>

            </div>

            <div className="flex gap-3">

                <Button
                    onClick={() =>
                        updateStatus.mutate({
                            id: application.id,
                            status: "Shortlisted",
                        })
                    }
                >
                    Shortlist
                </Button>

                <Button
                    variant="secondary"
                    onClick={() =>
                        updateStatus.mutate({
                            id: application.id,
                            status: "Interview",
                        })
                    }
                >
                    Interview
                </Button>

                <Button
                    variant="destructive"
                    onClick={() =>
                        updateStatus.mutate({
                            id: application.id,
                            status: "Rejected",
                        })
                    }
                >
                    Reject
                </Button>

            </div>

            <AIAnalysisCard
                match={application.candidate_match}
            />

        </div>

    );

}