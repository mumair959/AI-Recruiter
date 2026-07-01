import type { Job } from "../../types/job";
import { Link } from "react-router-dom";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

interface Props{
    jobs:Job[];
}

export default function JobTable({jobs}:Props){

    return(

    <Table>

        <TableHeader>

            <TableRow>

                <TableHead>Title</TableHead>

                <TableHead>Department</TableHead>

                <TableHead>Location</TableHead>

                <TableHead>Status</TableHead>

                <TableHead>Action</TableHead>

            </TableRow>

        </TableHeader>

        <TableBody>

            {jobs.map(job=>(

            <TableRow key={job.id}>

                <TableCell>{job.title}</TableCell>

                <TableCell>{job.department}</TableCell>

                <TableCell>{job.location}</TableCell>

                <TableCell>{job.status}</TableCell>

                <TableCell>
                    <Link
                        to={`/jobs/${job.id}`}
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