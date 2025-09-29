# n Blog Platform
A simple full-stack **blog platform** with a React frontend, Node.js backend, and MongoDB
database. The project is containerized using **Docker** and orchestrated with **Docker
Compose**.
---
## n Tech Stack - **Frontend:** React (Create React App) - **Backend:** Node.js + Express -
**Database:** MongoDB - **Containerization:** Docker + Docker Compose - **Version Control &
Collaboration:** Git + GitHub - **Registry:** GitHub Container Registry
---
## nn Setup
### 1. Clone the Repository ``` git clone https://github.com/Riphah39987/blog-platform.git cd
blog-platform ```
### 2. Run with Docker Compose ``` docker compose up --build ```
This will start: - Frontend → React (http://localhost:3000) - Backend → Express
(http://localhost:5000) - Database → MongoDB (mongodb://localhost:27017/blogdb)
---
## n Docker
### Backend Image ``` docker build -t blog-platform_backend ./backend ```
### Frontend Image ``` docker build -t blog-platform_frontend ./frontend ```
### Run Multi-Container App ``` docker compose up ```
---
## n Push to GitHub Container Registry (GHCR)
1. **Login to GHCR:** ``` echo $CR_PAT | docker login ghcr.io -u Riphah39987 --password-stdin ```
2. **Tag & Push Images:** ``` docker tag blog-platform_backend
ghcr.io/Riphah39987/blog-backend:latest docker push ghcr.io/Riphah39987/blog-backend:latest
docker tag blog-platform_frontend ghcr.io/Riphah39987/blog-frontend:latest docker push
ghcr.io/Riphah39987/blog-frontend:latest ```
---
## n GitHub Workflow
1. **Create a feature branch:** ``` git checkout -b feature/frontend ```
2. **Commit changes:** ``` git add . git commit -m "Add frontend" git push origin feature/frontend ```
3. **Open Pull Request (PR):** ``` gh pr create --base main --head feature/frontend --title "Add
frontend" --body "Implemented frontend" ```
4. **Merge PR:** ``` gh pr merge --merge ```
5. **Update local main branch:** ``` git checkout main git pull origin main ```
---
## n Deployment (Frontend) Frontend deployed on **GitHub Pages**: n
https://Riphah39987.github.io/blog-platform
---
## n Summary - n Version control via GitHub - n Feature branches, PRs, and merges - n
Full-stack app (frontend + backend + DB) - n Containerized with Docker - n Orchestrated with
Docker Compose - n Images pushed to GitHub Container Registry - n Documentation in
README.md - n Frontend live on GitHub Pages
