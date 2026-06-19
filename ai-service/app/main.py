from fastapi import FastAPI
from app.api.resume import router as resume_router

app = FastAPI(
    title="AI Recruitment Service"
)

app.include_router(
    resume_router,
    prefix="/api"
)