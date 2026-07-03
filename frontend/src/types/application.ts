import type { Candidate } from "./candidate";
import type { Job } from "./job";
import type { CandidateMatch } from "./match";

export interface Application {
    id: number;
    employment_job_id: number;
    candidate_id: number;
    status: string;
    applied_at: string | null;
    candidate: Candidate;
    employment_job: Job;
    candidate_match: CandidateMatch | null;

}