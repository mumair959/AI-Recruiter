import type { Candidate } from "./candidate";

export interface CandidateMatch {
    id: number;
    candidate_id: number;
    employment_job_id: number;
    score: number;
    matched_skills: string[];
    missing_skills: string[];
    experience_match: boolean;
    seniority_match: boolean;
    recommendation: string;
    candidate: Candidate;
}