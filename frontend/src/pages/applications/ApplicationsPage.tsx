import ApplicationTable from "../../components/applications/ApplicationTable";
import { useApplications } from "../../hooks/applications/useApplications";

export default function ApplicationsPage() {

    const {data, isLoading,error} = useApplications();

    const applications = data?.data ?? [];

    if (isLoading) {
        return <div>Loading applications...</div>;
    }

    if (error) {
        return <div>Failed to load applications.</div>;
    }

    return (
        <div>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-2xl font-bold">

                    Applications

                </h1>

            </div>

            <ApplicationTable applications={applications}/>

        </div>

    );

}