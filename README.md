 CI/CD Pipeline — Node.js + GitHub Actions + Docker

Overview
Automated CI/CD pipeline that runs on every push to main:
Test → Build Docker Image → Push to DockerHub → Deploy
 Stack
- Node.js + Express
- GitHub Actions
- Docker + DockerHub
- AWS EC2 (deployment target)
 Local Setup
```bash
npm install
npm start
npm test
```

