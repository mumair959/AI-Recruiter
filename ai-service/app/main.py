from fastapi import FastAPI
from app.api.resume import router as resume_router
from app.api.job import router as job_router
from app.api.matching import router as matching_router
from app.api.recommendation import router as recommendation_router
from app.api.interview import router as interview_router

app = FastAPI(
    title="AI Recruitment Service"
)

app.include_router(
    resume_router,
    prefix="/api"
)

app.include_router(
    job_router,
    prefix="/api/job"
)

app.include_router(
    matching_router,
    prefix="/api/matching"
)

app.include_router(
    recommendation_router,
    prefix="/api/recommendation"
)

app.include_router(
    interview_router,
    prefix="/api/interview"
)