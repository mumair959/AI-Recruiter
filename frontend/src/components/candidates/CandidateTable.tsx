import type { Candidate } from "../../types/candidate";
import { Link } from "react-router-dom";
import {Table, TableBody, TableCell, TableHead, TableHeader,TableRow} from "../../components/ui/table";

interface Props {
    candidates: Candidate[];
}

export default function CandidateTable({

    candidates,

}: Props) {

    return (

        <Table>

            <TableHeader>

                <TableRow>

                    <TableHead>Name</TableHead>

                    <TableHead>Email</TableHead>

                    <TableHead>Phone</TableHead>

                    <TableHead>Resume</TableHead>

                    <TableHead></TableHead>

                </TableRow>

            </TableHeader>

            <TableBody>

                {candidates.map(candidate => (

                    <TableRow key={candidate.id}>

                        <TableCell>
                            {candidate.name}
                        </TableCell>

                        <TableCell>
                            {candidate.email}
                        </TableCell>

                        <TableCell>
                            {candidate.phone}
                        </TableCell>

                        <TableCell>

                            {candidate.resume_path
                                ? "Uploaded"
                                : "Not Uploaded"}

                        </TableCell>

                        <TableCell>

                            <Link
                                to={`/candidates/${candidate.id}`}
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