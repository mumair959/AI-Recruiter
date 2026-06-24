from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File
import os

from app.services.resume_parser import ResumeParser
from app.services.resume_analyzer import ResumeAnalyzer
from app.services.candidate_ai import CandidateAI

router = APIRouter()

@router.get("/health")
def health():
    return {
        "status": "ok"
    }

@router.post("/resume/parse")
async def parse_resume(file: UploadFile = File(...)):
    temp_path = f"temp_{file.filename}"

    with open(temp_path, "wb") as f:
        f.write(await file.read())

    result = ResumeParser.parse_resume(temp_path)

    analysis = ResumeAnalyzer.analyze(result["text"])

    result.update(analysis)

    insights = CandidateAI.generate_insights(result["text"])

    result.update(insights)
    
    if os.path.exists(temp_path):
        os.remove(temp_path)

    return result