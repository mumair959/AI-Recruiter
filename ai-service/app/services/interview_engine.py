from app.services.llm_service import LLMService
import json
import re


class InterviewEngine:

    @classmethod
    def generate(cls, candidate, job, match):

        return {
            "technical_questions": cls.generate_technical(candidate, job, match),
            "behavioral_questions": cls.generate_behavioral(candidate, job, match),
            "follow_up_questions": cls.generate_follow_up(candidate, job, match),
            "evaluation_notes": cls.generate_evaluation_notes(candidate, job, match),
        }

    @staticmethod
    def build_context(candidate, job, match):

        return f"""
You are interviewing a software engineer.

Candidate Skills:
{", ".join(candidate.get("skills", [])) or "None"}

Candidate Experience:
{candidate.get("experience_years", 0)} years

Candidate Seniority:
{candidate.get("seniority") or "Unknown"}

Required Skills:
{", ".join(job.get("required_skills", [])) or "None"}

Minimum Experience:
{job.get("min_experience", 0)} years

Job Seniority:
{job.get("seniority") or "Unknown"}

Missing Skills:
{", ".join(match.get("missing_skills", [])) or "None"}

Matched Skills:
{", ".join(match.get("matched_skills", [])) or "None"}

Match Score:
{match.get("score",0)}%

Experience Match:
{"Yes" if match.get("experience_match") else "No"}

Seniority Match:
{"Yes" if match.get("seniority_match") else "No"}
"""

    @staticmethod
    def clean_response(response):

        response = (
            response
            .replace("```json", "")
            .replace("```", "")
            .strip()
        )

        m = re.search(r"\{.*\}", response, re.DOTALL)

        if m:
            return m.group(0)

        return response

    @classmethod
    def ask_json(cls, prompt):

        response = LLMService.generate(prompt)

        response = cls.clean_response(response)

        try:

            return json.loads(response)

        except Exception as e:

            print("=" * 80)
            print("InterviewEngine JSON Parse Error")
            print(e)
            print(response)
            print("=" * 80)

            return {}

    @classmethod
    def generate_technical(cls, candidate, job, match):

        prompt = f"""
You are a senior backend technical interviewer.

{cls.build_context(candidate, job, match)}

Your task:

Generate EXACTLY TWO practical technical interview questions.

Rules:

- Focus on required skills.
- Prefer practical questions.
- Avoid textbook definitions.
- If candidate lacks a required skill, ask about it.
- Each expected answer must contain 2-4 sentences.
- Return ONLY JSON.

Return:

{{
    "technical_questions":[
        {{
            "question":"",
            "answer":""
        }},
        {{
            "question":"",
            "answer":""
        }}
    ]
}}
"""

        data = cls.ask_json(prompt)

        return data.get("technical_questions", [])

    @classmethod
    def generate_behavioral(cls, candidate, job, match):

        prompt = f"""
You are an experienced engineering manager.

{cls.build_context(candidate, job, match)}

Generate EXACTLY TWO behavioral interview questions.

Evaluate:

- Communication
- Teamwork
- Ownership
- Leadership
- Learning ability

Each answer should explain what a good candidate should mention.

Return ONLY JSON.

{{
    "behavioral_questions":[
        {{
            "question":"",
            "answer":""
        }},
        {{
            "question":"",
            "answer":""
        }}
    ]
}}
"""

        data = cls.ask_json(prompt)

        return data.get("behavioral_questions", [])

    @classmethod
    def generate_follow_up(cls, candidate, job, match):

        prompt = f"""
You are a senior technical recruiter.

{cls.build_context(candidate, job, match)}

Generate EXACTLY TWO follow-up interview questions.

The questions should investigate:

- Missing skills
- Experience mismatch
- Seniority mismatch

These questions should help the interviewer decide whether the candidate can compensate for weaknesses.

Each question must include an expected answer.

Return ONLY JSON.

{{
    "follow_up_questions":[
        {{
            "question":"",
            "answer":""
        }},
        {{
            "question":"",
            "answer":""
        }}
    ]
}}
"""

        data = cls.ask_json(prompt)

        return data.get("follow_up_questions", [])

    @classmethod
    def generate_evaluation_notes(cls, candidate, job, match):

        prompt = f"""
You are a senior software engineering hiring manager.

{cls.build_context(candidate, job, match)}

Write a professional interview briefing.

Requirements:

- Exactly three complete sentences.
- Mention the candidate's strengths.
- Mention the candidate's weaknesses.
- Mention what the interviewer should focus on.
- Do not invent information.
- Return plain text only.

Do not return JSON.
"""

        return (
            LLMService.generate(prompt)
            .replace("```", "")
            .strip()
        )