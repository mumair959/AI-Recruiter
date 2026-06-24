from fastapi import APIRouter

from app.services.job_analyzer import JobAnalyzer

router = APIRouter()

@router.post("/analyze")
async def analyze_job(payload: dict):

    result = JobAnalyzer.analyze(payload["title"], payload["description"], payload["requirements"])
    
    return result