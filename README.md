# 📝 Group 4 — Note-Taking API

A lightweight RESTful API for managing personal notes, built with **Node.js + Express**.
Backend only — no frontend. All testing is done with **Postman**.

> **🔴 LIVE IN PRODUCTION:** https://betechifiedproject-4c.onrender.com
> Health check: https://betechifiedproject-4c.onrender.com — e.g. `GET https://betechifiedproject-4c.onrender.com/api/notes`
> (Free tier: the service sleeps after ~15 min idle; first request may take ~50s to wake it.)

---

## 🛠 Tech Stack

- **Node.js + Express.js** — API framework
- **In-memory array** — storage (data resets when the server restarts)
- **UUID** — planned for ID generation (currently numeric IDs)
- **Nodemon** — recommended for development

---

## 🚀 Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) v16+
- [Postman](https://www.postman.com/downloads/) (for testing)

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/favour187/betechifiedproject-4c.git
cd betechifiedproject-4c

# 2. Install dependencies
npm install

# 3. Start the server
node app.js
```

The server runs at **http://localhost:3000** (entry file: `app.js`).

---

## 📑 API Endpoints

| Method | Route               | Description                | Success       | Errors             |
| :----- | :------------------ | :------------------------- | :------------ | :----------------- |
| `GET`    | `/api/notes`        | Retrieve all notes         | `200 OK`      | —                  |
| `GET`    | `/api/notes/:id`    | Retrieve a single note     | `200 OK`      | `404 Not Found`    |
| `POST`   | `/api/notes`        | Create a new note          | `201 Created` | `400 Bad Request`  |
| `PUT`    | `/api/notes/:id`    | Update an existing note    | `200 OK`      | `400` / `404`      |
| `DELETE` | `/api/notes/:id`    | Remove a note              | `200 OK`      | `404 Not Found`    |
| `GET`    | `/`                 | Health check               | `200 OK`      | —                  |

### Note structure

```json
{
  "id": 1,
  "title": "First Note",
  "content": "This is group 4c",
  "createdAt": "2026-09-21T15:42:13.580Z",
  "updatedAt": "2026-09-21T15:42:13.580Z"
}
```

### Quick test with cURL

```bash
# Create a note
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My note","content":"Hello world"}'

# Get all notes
curl http://localhost:3000/api/notes

# Update note 1
curl -X PUT http://localhost:3000/api/notes/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated","content":"New content"}'

# Delete note 1
curl -X DELETE http://localhost:3000/api/notes/1
```

---

## 🧩 Middleware

| Middleware      | File                          | What it does                                                        |
| :-------------- | :---------------------------- | :------------------------------------------------------------------ |
| Logger          | registered in `app.js`        | Prints a timestamp + method + URL for every request to the console  |
| Error handler   | `middleware/errorHandler.js`  | Malformed JSON → clean `400` JSON; unexpected errors → sanitized `500` (details logged server-side only) |

---

## 🧪 Postman Testing

1. Launch the Postman Desktop App.
2. **Import** → select `postman/GROUP_4_Note_API.postman_collection.json`.
   - To test production: set the `base_url` variable to `https://betechifiedproject-4c.onrender.com` (default is `http://localhost:3000`).
3. Start the server (`npm start`), then send requests top to bottom — the create-request saves the new note's id into the `note_id` variable automatically, so Get-one / Update / Delete work right after.
4. Or run everything at once with the **Collection Runner** (includes a 400-validation edge case).

---

## 👥 Team Members & Task Allocation

| # | Member           | GitHub                  | Task                          | Branch                        | Status            |
| :-: | :------------- | :---------------------- | :---------------------------- | :---------------------------- | :---------------- |
| 1 | Favour           | `@favour187`            | Repo setup & admin            | `main`                        | ✅ Done            |
| 2 | Habib (Morocco)  | `@morocco96`            | Core setup (Express server)   | `main`                        | ✅ Merged          |
| 3 | Alex             | `@Alex-debug-t`         | Update note (`PUT`) + base GET/POST scaffolding | `feature/update-note`         | ✅ Merged (PR #1)  |
| 4 | Kaycee           | `@kayce33`              | Delete note (`DELETE`)        | `Delete`                      | ✅ Merged          |
| 5 | Mauka Photography| `@Daniel-Nganga`        | Logger middleware             | `feature/logger-middleware`   | ✅ Merged          |
| 6 | Bright           | `@bright-web007`        | Error-handling middleware     | `feature/Error-handler`       | ✅ Merged (PR #2)  |
| 7 | Shadie (Shadreck William) | `@williamshadie52-oss`  | Get all notes (`GET /api/notes`, explicit 200) | `feature/get-all`             | ✅ Merged (PR #12) |
| 8 | S.t.e.a.m        | TBA                     | Get one note (`GET /notes/:id`) | *to create branch*          | ⏳ Not started     |
| 9 | Tolex            | `@Tolex081`             | Mock data store (`data/notes.js`, wired into `app.js`) | `feature/data-store`          | ✅ Merged (PR #6)  |
| 10 | Osifo Prudent   | `@Dentdev-dev`          | Create note (`POST`)          | `Prudent-creating-note-route` | ✅ Merged (PR #5)  |
| 11 | Laureen         | `@Laureen-L`            | Express setup (dotenv, health route, npm scripts) | `feature/express-setup`       | ✅ Merged (PR #4)  |
| 12 | Eze Chimzurum   | `@CHIZYDIGITALS`        | Documentation (README)        | `feature/docs`                | ✅ Merged (PR #3)  |

### 🔜 Remaining work
- [x] ~~Deployment (Render)~~ ✅ **LIVE:** https://betechifiedproject-4c.onrender.com
- [ ] Presentation slides + live demo — Team E

### ✅ Recently completed
- [x] **All 5 endpoint tasks delivered by their owners** — last one: GET-all by Shadie (PR #12) 🎉
- [x] **All 5 endpoints live under `/api/notes`** (migration completed in PR #11)
- [x] `GET /api/notes/:id` get-one endpoint (PR #10)
- [x] Postman collection exported to `postman/GROUP_4_Note_API.postman_collection.json` (PR #9)
- [x] UUID IDs (`randomUUID`) + string-safe PUT/DELETE lookups
- [x] dotenv config, health check `GET /`, `npm start` / `npm run dev` scripts (PR #4)
- [x] Create note (`POST`) — PR #5 · data store — PR #6 · error handler — PR #2 · logger
