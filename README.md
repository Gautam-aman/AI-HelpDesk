🧠 AI-HelpDesk

A full-stack AI-powered helpdesk system built using Spring Boot + React + RAG-based AI responses.
Automatically answer queries, manage tickets, store conversation history, and integrate AI seamlessly into enterprise workflows.

---

## 🚀 Features

### ✅ AI-Powered Helpdesk
- Natural language query handling  
- RAG (Retrieval-Augmented Generation) support  
- Context-aware responses  
- Multi-turn conversations  

### 🎯 Ticket Management
- Create, update, assign, and track tickets  
- Statuses: Open, In-Progress, Resolved, Closed  
- Priority levels for smart triaging  

### 🗂️ Document Knowledge Base
- Upload helpdesk articles / FAQs  
- Vectorization + embedding search  
- AI uses documents for accurate responses  

### 👤 User System
- JWT Authentication  
- Role-based access (User, Agent, Admin)  
- Cross-origin support for frontend  
  ```java
  @CrossOrigin(origins = "http://localhost:5173")
  ```  

### 📊 Admin Dashboard
- Ticket analytics  
- Query logs  
- User activity tracking  

---

## 🏛️ Tech Stack

### Backend – Spring Boot
- Spring Web  
- Spring Data JPA  
- Spring Security + JWT  
- PostgreSQL / MySQL  
- Vector store (PGVector / ChromaDB)  
- OpenAI / Llama models for AI  

### Frontend – React + Vite
- Tailwind CSS  
- Redux Toolkit (if used)  
- Axios  
- ShadCN components (optional)  

---

## 📂 Project Structure

### Backend
```
AI-HelpDesk/
 └── backend/
     ├── src/main/java/com/helpdesk/ai
     │     ├── controller/
     │     ├── service/
     │     ├── repository/
     │     ├── model/
     │     └── config/
     └── src/main/resources/
           └── application.properties
```

### Frontend
```
AI-HelpDesk/
 └── frontend/
     ├── src/
     │    ├── components/
     │    ├── pages/
     │    ├── store/
     │    └── utils/
     └── vite.config.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```
git clone https://github.com/Gautam-aman/AI-HelpDesk.git
cd AI-HelpDesk
```

---

## 🖥️ Backend Setup (Spring Boot)

### 2️⃣ Configure Database
Edit `application.properties`:
```
spring.datasource.url=jdbc:postgresql://localhost:5432/ai_helpdesk
spring.datasource.username=postgres
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
```

### 3️⃣ Run the backend
```
cd backend
mvn spring-boot:run
```

Backend runs on:  
👉 http://localhost:8080

---

## 💻 Frontend Setup (React + Vite)

### 4️⃣ Install dependencies
```
cd frontend
npm install
```

### 5️⃣ Run development server
```
npm run dev
```

Frontend runs on:  
👉 http://localhost:5173

---

## 🔗 Connecting Frontend & Backend

### Spring Boot CORS configuration:
```java
@CrossOrigin(origins = "http://localhost:5173")
```

### Optional Vite proxy:
```js
server: {
  proxy: {
    "/api": "http://localhost:8080"
  }
}
```

---

## 🤖 AI Configuration

Set your API keys in `.env`:
```
OPENAI_API_KEY=your_key
VECTOR_DB_URL=your_vector_store
```

### AI pipeline:
1. Embed documents  
2. Store in vector DB  
3. Retrieve similar documents  
4. Generate smart AI answer  

---

## 📡 API Endpoints (Short Overview)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/login | Login user |
| POST | /api/tickets | Create ticket |
| GET | /api/tickets/{id} | Get ticket |
| POST | /api/query/ask | Ask AI question |
| POST | /api/docs/upload | Upload knowledge document |

---

## 📸 Screenshots (To be added later)
- Dashboard  
- Live chat UI  
- Ticket view  
- Document upload  

---

## 🛠️ Future Enhancements
- WebSockets for live agent chat  
- Multi-agent AI routing  
- Organization-based workspaces  
- Advanced ticket workflow automation  
- OCR-based document intake  

---

## 🤝 Contributing
Contributions are welcome!

1. Fork the project  
2. Create a feature branch  
3. Commit & push  
4. Create a PR  

---

## ⭐ Show Your Support
If you like this project, consider starring the repo ⭐  
Your star helps motivate future development.
