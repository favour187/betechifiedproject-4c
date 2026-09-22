# Group 4 Note API

A lightweight RESTful Express.js API for managing personal notes.

---

## 👥 Team Members & Task Allocation

| # | Team Member | Feature Branch | Task / File Output | Target Location |
| :-: | :--- | :--- | :--- | :--- |
| **1** | **Favour** | `main` | Repo Setup (`.gitignore`, initial `README.md`, member invitations) | Root |
| **2** | **Laureen** | `feature/express-setup` | Express Setup (`package.json`, `server.js`, `.env.example`) | Root |
| **3** | **Tolex** | `feature/data-store` | Mock Data (`data/notes.js`) | `data/` |
| **4** | **Osifo Prudent** | `feature/create-route` | Create Note (`POST /notes`) | `routes/noteRoutes.js` |
| **5** | **Shadie** | `feature/get-all` | Get All Notes (`GET /notes`) | `routes/noteRoutes.js` |
| **6** | **S.t.e.a.m** | `feature/get-one` | Get One Note (`GET /notes/:id`) | `routes/noteRoutes.js` |
| **7** | **Alex** | `feature/update-route` | Update Note (`PUT /notes/:id`) | `routes/noteRoutes.js` |
| **8** | **Kaycee** | `feature/delete-route` | Delete Note (`DELETE /notes/:id`) | `routes/noteRoutes.js` |
| **9** | **Mauka Photography** | `feature/logger` | Logger Middleware (`middleware/logger.js`) | `middleware/` |
| **10** | **Bright** | `feature/error-handler` | Error Handling Middleware (`middleware/errorHandler.js`) | `middleware/` |
| **11** | **Habib** | `feature/postman-collection` | Postman Testing & Collection Export | `postman/` |
| **12** | **Eze Chimzurum** | `feature/docs` | Documentation & Final Readme Sync | `README.md` |

---

## 🚀 Setup & Installation Guide

### Prerequisites
* [Node.js](https://nodejs.org/) (v16 or higher)
* [Postman Desktop App](https://www.postman.com/downloads/)

### Quick Start
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/favour187/betechifiedproject-4c.git](https://github.com/favour187/betechifiedproject-4c.git)
   cd betechifiedproject-4c



2. Install project dependencies:




npm install



3. Start the local development server:

node server.js

The API server will run at http://localhost:3000.



## 📑 API Endpoints Summary



| HTTP Method | Route Endpoint | Description | Handled By | Expected Status |

| :--- | :--- | :--- | :--- | :--- |

| `GET` | `/notes` | Retrieve all notes | Shadie | `200 OK` |

| `GET` | `/notes/:id` | Retrieve a single note by ID | S.t.e.a.m | `200 OK` / `404 Not Found` |

| `POST` | `/notes` | Create a new note | Osifo Prudent | `201 Created` / `400 Bad Request` |

| `PUT` | `/notes/:id` | Update an existing note by ID | Alex | `200 OK` / `404 Not Found` |


| `DELETE` | `/notes/:id` | Remove a note by ID | Kaycee | `200 OK` / `404 Not Found` |




## 🧪 Postman Collection Setup

1. Launch the Postman Desktop App.
2. Click **Import** at the top left and select the collection file located at `postman/Group4_Note_API.postman_collection.json`.
3. Ensure your local Express server is running on `http://localhost:3000`.
4. Send requests individually or use the **Postman Collection Runner** to execute all CRUD route tests.




