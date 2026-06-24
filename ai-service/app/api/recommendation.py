from fastapi import APIRouter

from app.services.recommendation_engine import RecommendationEngine

router = APIRouter()

@router.post("/generate")
async def generate_recommendation(payload: dict):

    recommendation = RecommendationEngine.generate(
        payload
    )

    return {
        "recommendation": recommendation
    }