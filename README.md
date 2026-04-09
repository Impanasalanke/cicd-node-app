# 🚀 CI/CD Pipeline — Node.js + GitHub Actions + Docker

## Overview
Automated CI/CD pipeline that runs on every push to main:
Test → Build Docker Image → Push to DockerHub → Deploy

## Stack
- Node.js + Express
- GitHub Actions
- Docker + DockerHub
- AWS EC2 (deployment target)

## Pipeline Stages
| Stage | Tool | Description |
|-------|------|-------------|
| Test | Jest | Runs unit tests |
| Build | Docker | Builds container image |
| Push | DockerHub | Publishes image |
| Deploy | Docker | Runs container |

## Local Setup
```bash
npm install
npm start
npm test
```

## API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | / | App info |
| GET | /health | Health check |
| GET | /api/items | List items |
| POST | /api/items | Create item |
# pipeline test
