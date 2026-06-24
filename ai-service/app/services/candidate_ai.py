import json

from app.services.llm_service import LLMService

class CandidateAI:

    @classmethod
    def generate_insights(cls, resume_text: str):

        prompt = f"""
You are an ATS recruitment assistant.

Analyze the resume below.

Return ONLY JSON.
No markdown.
No explanation.

Use exactly this format:

{{
  "summary": "short professional summary",
  "seniority": "Junior OR Mid OR Senior OR Lead",
  "strengths": [
      "skill or capability"
  ],
  "recommended_roles": [
      "job title only"
  ]
}}

Rules:

1. seniority must always have one value:
Junior, Mid, Senior, or Lead.

2. recommended_roles must contain ONLY job titles.
Do NOT put companies.
Do NOT put dates.

3. strengths should be technical strengths only.

Resume:

{resume_text}
"""

        result = LLMService.generate(prompt)


        result = result.replace("```json", "")
        result = result.replace("```", "")
        result = result.strip()


        try:
            return json.loads(result)

        except Exception:

            return {
                "summary": result,
                "seniority": "Unknown",
                "strengths": [],
                "recommended_roles": []
            }