import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "../ui/dialog";



import { Button } from "../ui/button";

import { useCandidates } from "../../hooks/candidates/useCandidates";

import { useCreateApplication } from "../../hooks/applications/useCreateApplication";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface Props {

    open: boolean;

    onOpenChange: (open: boolean) => void;

    jobId: number;

}

export default function ApplyCandidateDialog({

    open,

    onOpenChange,

    jobId,

}: Props) {

    const [candidateId, setCandidateId] = useState("");

    const { data } = useCandidates();

    const createApplication = useCreateApplication();

    const candidates = data?.data ?? [];

    const submit = () => {

        if (!candidateId) {

            return;

        }

        createApplication.mutate({

            candidate_id: Number(candidateId),

            employment_job_id: jobId,

        }, {

            onSuccess() {

                onOpenChange(false);

            },

        });

    };

    return (

        <Dialog

            open={open}

            onOpenChange={onOpenChange}

        >

            <DialogContent>

                <DialogHeader>

                    <DialogTitle>

                        Apply Candidate

                    </DialogTitle>

                </DialogHeader>

                <Select

                    value={candidateId}

                    onValueChange={setCandidateId}

                >

                    <SelectTrigger>

                        <SelectValue placeholder="Select candidate" />

                    </SelectTrigger>

                    <SelectContent>

                        {candidates.map(candidate => (

                            <SelectItem

                                key={candidate.id}

                                value={candidate.id.toString()}

                            >

                                {candidate.name}

                            </SelectItem>

                        ))}

                    </SelectContent>

                </Select>

                <DialogFooter>

                    <Button

                        variant="outline"

                        onClick={() => onOpenChange(false)}

                    >

                        Cancel

                    </Button>

                    <Button

                        onClick={submit}

                        disabled={createApplication.isPending}

                    >

                        Apply

                    </Button>

                </DialogFooter>

            </DialogContent>

        </Dialog>

    );

}