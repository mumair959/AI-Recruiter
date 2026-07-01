export interface CandidateProfile {
    id: number;
    candidate_id: number;
    parsed_resume: string | null;
    email: string | null;
    phone: string | null;
    experience_years: number | null;
    ai_summary: string | null;
    seniority: string | null;
    skills: string[];
    education: string[];
    experience: {
        title: string;
        company: string;
    }[];
    strengths: string[];
    recommended_roles: string[];
}

export interface Candidate {
    id: number;
    name: string;
    email: string;
    phone: string;
    resume_path?: string | null;
    summary?: string | null;
    created_at: string;
    updated_at: string;
    profile?: CandidateProfile;
}
