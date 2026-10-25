# DevFlow CI/CD Pipeline 🚀

A professional-grade CI/CD pipeline implementation demonstrating automated build, test, and deployment for a full-stack application.

## 🏗️ Architecture

- **Frontend**: React (Vite) with a premium glassmorphism UI.
- **Backend**: Node.js (Express) with RESTful API endpoints.
- **Testing**: Jest & Supertest for backend unit and integration tests.
- **Automation**: GitHub Actions for Continuous Integration (CI) and Continuous Deployment (CD).

## 🛠️ Pipeline Stages

### 1. Continuous Integration (CI)
Triggered on every `push` or `pull_request` to the `main` branch.
- **Linting & Formatting**: Ensures code quality.
- **Backend Tests**: Executes `npm test` in the backend directory.
- **Frontend Build**: Validates that the React application builds successfully.

### 2. Continuous Deployment (CD)
Triggered automatically after the CI workflow successfully completes on the `main` branch.
- **Artifact Packaging**: Compresses the build for deployment.
- **Deployment Simulation**: Mimics a cloud deployment sequence to a production cluster.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Local Development

1. **Backend**:
   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 🧪 Testing

To run the automated tests locally:
```bash
cd backend
npm test
```

---
*Created as part of the Full-Stack Application Development (FSAD) Tasks.*
