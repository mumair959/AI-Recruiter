import { Link } from "react-router-dom";

import type { Application } from "../../types/application";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";

interface Props {
    applications: Application[];
}

export default function ApplicationTable({
    applications,
}: Props) {
    return (
        <Table>

            <TableHeader>

                <TableRow>

                    <TableHead>Candidate</TableHead>

                    <TableHead>Job</TableHead>

                    <TableHead>Match</TableHead>

                    <TableHead>Status</TableHead>

                    <TableHead>Applied</TableHead>

                    <TableHead></TableHead>

                </TableRow>

            </TableHeader>

            <TableBody>

                {applications.map((application) => (

                    <TableRow key={application.id}>

                        <TableCell>

                            {application.candidate.name}

                        </TableCell>

                        <TableCell>

                            {application.employment_job.title}

                        </TableCell>

                        <TableCell>

                            {application.candidate_match
                                ? `${application.candidate_match.score}%`
                                : "Pending"}

                        </TableCell>

                        <TableCell>

                            <span
                                className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-sm"
                            >
                                {application.status}
                            </span>

                        </TableCell>

                        <TableCell>

                            {application.applied_at
                                ? new Date(application.applied_at).toLocaleDateString()
                                : "-"}

                        </TableCell>

                        <TableCell>

                            <Link
                                to={`/applications/${application.id}`}
                                className="px-4 py-2 bg-blue-600 text-white rounded"
                            >
                                Details
                            </Link>

                        </TableCell>

                    </TableRow>

                ))}

            </TableBody>

        </Table>
    );
}