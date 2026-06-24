from fastapi import APIRouter

from app.services.matching_engine import MatchingEngine

router = APIRouter()

@router.post("/match")
async def match_candidate(payload:dict):
    result = MatchingEngine.calculate(payload["candidate"], payload["job"])

    return result