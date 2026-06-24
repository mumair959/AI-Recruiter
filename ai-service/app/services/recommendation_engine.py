from app.services.llm_service import LLMService

class RecommendationEngine:

    @classmethod
    def generate(cls, match_data):

        prompt = f"""
You are an experienced technical recruiter.

Based on the matching results below, write a concise hiring recommendation.

Rules:

- Maximum 3 sentences.
- Be professional.
- Mention strengths.
- Mention skill gaps if any.
- Do not invent information.
- Return plain text only.

Match Score:
{match_data.get('score')}

Matched Skills:
{', '.join(match_data.get('matched_skills', []))}

Missing Skills:
{', '.join(match_data.get('missing_skills', []))}

Experience Match:
{match_data.get('experience_match')}

Seniority Match:
{match_data.get('seniority_match')}
"""

        return LLMService.generate(prompt).strip()