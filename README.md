# Full-Stack-Task-Manager

## Tech Stack
## Backend Tech Stack
- ASP.NET Core Web API (.NET 8)
- Entity Framework Core
- SQL Server
- Swagger (API testing)

## Frontend Tech Stack
- React (with TypeScript)
- Vite
- Axios (for API calls)
- React Router DOM (for navigation)

## Project Structure
- Backend/
- frontend/

## Backend Setup
## Backend Setup

1. Navigate to the Backend folder:
   cd Backend
2. Update the connection string in appsettings.json
3. Apply database migrations:
   dotnet ef database update
4. Run the backend:
   dotnet run
5. Open Swagger UI:
   http://localhost:5224/swagger

## Frontend Setup
1. Navigate to the frontend folder:
   cd frontend
2. Install dependencies:
   npm install
3. Run the development server:
   npm run dev
4. Open the app in your browser:
   http://localhost:5173

## Features
- View all tasks
- Add a new task
- Edit an existing task
- Delete a task
- Filter by status
- Search by title

## API Endpoints
- GET /api/tasks
- GET /api/tasks/{id}
- POST /api/tasks
- PUT /api/tasks/{id}
- DELETE /api/tasks/{id}

The backend is built using ASP.NET Core Web API with Entity Framework Core and SQL Server, and is tested using Swagger.
