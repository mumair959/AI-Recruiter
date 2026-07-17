from fastapi import APIRouter

from app.services.interview_engine import InterviewEngine

router = APIRouter()

@router.post("/generate")
async def generate_interview(payload: dict):

    interview = InterviewEngine.generate(
        payload["candidate"],
        payload["job"],
        payload["match"]
    )

    return interview