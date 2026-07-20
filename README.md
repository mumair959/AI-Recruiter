# AI Recruitment Platform

This repository contains a full-stack AI-powered recruitment system for managing candidates, jobs, applications, and interview workflows.

## Project Overview

The platform is split into three main parts:

- Backend: Laravel API for authentication, jobs, candidates, applications, and match tracking.
- Frontend: React + TypeScript + Vite dashboard for recruiters and hiring teams.
- AI Service: Python FastAPI service that performs resume parsing, job analysis, candidate-job matching, recommendations, and interview question generation.

## Main Features

- Create and manage job openings
- Store and manage candidate profiles
- Upload candidate resumes
- Analyze resumes and extract structured information
- Compare candidate skills with job requirements
- Generate AI recommendations and interview questions
- Track application status and interview-related insights

## Architecture

1. The frontend sends user actions to the Laravel backend.
2. The Laravel backend handles business logic and persists data.
3. When AI analysis is needed, the backend calls the Python AI service.
4. The AI service returns structured insights such as match scores, recommended roles, and interview prompts.

## Folder Structure

- `backend/` — Laravel application and API endpoints
- `frontend/` — React frontend
- `ai-service/` — Python FastAPI AI engine

## Tech Stack

- Laravel PHP
- React + TypeScript + Vite
- FastAPI + Python
- PostgreSQL/MySQL-friendly Laravel data layer
- AI libraries for resume parsing, ranking, and embeddings

## Quick Start

### 1. Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan migrate
php artisan serve
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. AI Service

```bash
cd ai-service
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8001
```

## Notes

The Laravel backend is configured to communicate with the AI service through the `AI_SERVICE_URL` setting in the backend environment configuration.

This project is designed to help recruiters automate resume screening, candidate-job matching, and interview preparation using AI.
