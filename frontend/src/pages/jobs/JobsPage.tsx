import JobTable from "../../components/jobs/JobTable";
import { useJobs } from "../../hooks/jobs/useJobs";
import { Link } from "react-router-dom";

export default function JobsPage(){

    const { data, isLoading, error } = useJobs();

    const jobs = data?.data ?? [];

    if(isLoading){
        return <div>Loading jobs...</div>;
    }

    if(error){
        return <div>Failed to load jobs.</div>;
    }

    if(!jobs?.length){
        return <div>No jobs found.</div>;
    }

    return(

    <div>

        <div className="flex justify-between items-center mb-6">

            <h1 className="text-2xl font-bold">
                Jobs
            </h1>

            <Link
                to="/jobs/create"
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Create Job
            </Link>

        </div>

      <JobTable jobs={jobs}/>

    </div>

    );

}