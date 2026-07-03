from app.services.llm_service import LLMService
import json


class RecommendationEngine:

    @classmethod
    def generate(cls, match_data):

        score = match_data.get("score", 0)

        # Deterministic recommendation
        if score >= 80:
            recommendation = "Interview"
        elif score >= 60:
            recommendation = "Consider"
        else:
            recommendation = "Reject"

        # Deterministic confidence
        confidence = min(max(score + 5, 50), 99)

        prompt = f"""
You are a senior technical recruiter with 15 years of hiring experience.

Your task is to analyze the candidate-job match and provide a professional assessment.

Candidate Match Score:
{score}/100

Matched Skills:
{", ".join(match_data.get("matched_skills", [])) or "None"}

Missing Skills:
{", ".join(match_data.get("missing_skills", [])) or "None"}

Experience Match:
{"Yes" if match_data.get("experience_match") else "No"}

Seniority Match:
{"Yes" if match_data.get("seniority_match") else "No"}

IMPORTANT REQUIREMENTS:

1. Return ONLY valid JSON.
2. Do NOT use markdown.
3. Do NOT use code blocks.
4. Do NOT add explanations outside the JSON.
5. The summary MUST contain at least 2 complete sentences and preferably 3.
6. Each sentence should be 12-20 words.
7. strengths MUST contain at least 2 items whenever matched skills exist.
8. weaknesses MUST contain at least 2 items whenever there are missing skills or experience/seniority mismatches.
9. red_flags may be empty only if there are no obvious concerns.
10. Never leave strengths or weaknesses empty unless absolutely impossible.
11. Base your analysis ONLY on the provided information.
12. Do NOT invent technologies or experience.

Return this JSON structure exactly:

{{
    "summary": "At least 2 complete professional sentences.",
    "strengths": [
        "...",
        "..."
    ],
    "weaknesses": [
        "...",
        "..."
    ],
    "red_flags": [
        "..."
    ]
}}
"""

        response = LLMService.generate(prompt).strip()

        # Remove markdown if model returns it
        response = response.replace("```json", "").replace("```", "").strip()

        try:

            data = json.loads(response)

            return {
                "recommendation": recommendation,
                "summary": data.get("summary", ""),
                "strengths": data.get("strengths", []),
                "weaknesses": data.get("weaknesses", []),
                "red_flags": data.get("red_flags", []),
                "confidence": confidence,
            }

        except Exception:

            return {
                "recommendation": recommendation,
                "summary": response,
                "strengths": [],
                "weaknesses": [],
                "red_flags": [],
                "confidence": confidence,
            }