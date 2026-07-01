import { useNavigate } from "react-router-dom";

import JobForm from "../../components/jobs/JobForm";
import { useCreateJob } from "../../hooks/jobs/useCreateJob";

export default function CreateJobPage() {

    const navigate = useNavigate();

    const mutation = useCreateJob();

    const submit = (data: any) => {

        mutation.mutate(data, {

            onSuccess: (job) => {

                navigate(`/jobs/${job.id}`);

            },

        });

    };

    return (

        <div>

            <h1 className="text-2xl font-bold mb-6">
                Create Job
            </h1>

            <JobForm
                onSubmit={submit}
                loading={mutation.isPending}
            />

        </div>

    );

}