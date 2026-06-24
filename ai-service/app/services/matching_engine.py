class MatchingEngine:

    @staticmethod
    def calculate(candidate, job):

        candidate_skills = set(
            [
                x
                for x in candidate.get(
                    "skills",
                    []
                )
            ]
        )

        required_skills = set(
            [
                x
                for x in job.get(
                    "required_skills",
                    []
                )
            ]
        )

        matched = list(candidate_skills & required_skills)

        missing = list(required_skills - candidate_skills)

        skill_score = 0

        if required_skills:
            skill_score = (len(matched) / len(required_skills)) * 70

        experience_match = (
            candidate.get("experience_years", 0) >=
            job.get(
                "min_experience",
                0
            )
        )

        experience_score = 20 if experience_match else 0

        seniority_match = (
            candidate.get("seniority")
            ==
            job.get("seniority")
        )

        seniority_score = (
            10
            if seniority_match
            else 0
        )

        total = int(skill_score + experience_score + seniority_score)

        return {
            "score": total,
            "matched_skills": matched,
            "missing_skills": missing,
            "experience_match": experience_match,
            "seniority_match": seniority_match
        }