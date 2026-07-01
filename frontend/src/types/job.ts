export interface Job {
    id: number;
    title: string;
    department: string;
    location: string;
    experience_years: number;
    description: string;
    requirements: string;
    status: string;
    required_skills: string[];
    preferred_skills: string[];
    seniority: string | null;
    min_experience: number | null;
    created_at: string;
    updated_at: string;
}