# Chat App

## Requirements
- Node
- Docker
- Docker Compose

## How to Run the Project

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/chat-app.git
    cd chat-app
    ```

2. **Start the infrasctructure using Docker Compose:**
    ```bash
    docker-compose up --build
    ```

3. **Install node dependencies:**
    ```bash
    npm install
    ```

4. **Create a .env based on .env.example:**
    ```bash
    cp .env.example .env
    ```


5. **Start the applications using npm command:**
    ```bash
    npm run start
    ```

6. The frontend will be available at [http://localhost:3000](http://localhost:3000) and the backend API at [http://localhost:3001](http://localhost:3001).

## Technologies Used

- **Frontend:** React, Vite
- **Backend:** NodeJS, MongoDB
- **Infrastructure:** Docker, Docker Compose