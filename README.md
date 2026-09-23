# 📝 Group 4 — Note-Taking API

A lightweight RESTful API for managing personal notes, built with **Node.js + Express**.
Backend only — no frontend. All testing is done with **Postman**.

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

| Method | Route         | Description                | Success       | Errors             |
| :----- | :------------ | :------------------------- | :------------ | :----------------- |
| `GET`    | `/notes`      | Retrieve all notes         | `200 OK`      | —                  |
| `GET`    | `/notes/:id`  | Retrieve a single note     | `200 OK`      | `404 Not Found`    |
| `POST`   | `/notes`      | Create a new note          | `201 Created` | `400 Bad Request`  |
| `PUT`    | `/notes/:id`  | Update an existing note    | `200 OK`      | `400` / `404`      |
| `DELETE` | `/notes/:id`  | Remove a note              | `200 OK`      | `404 Not Found`    |

> **Note:** the final spec requires these routes under the `/api` prefix (e.g. `/api/notes`).
> The migration is pending — until then the live base path is `/notes`.

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
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My note","content":"Hello world"}'

# Get all notes
curl http://localhost:3000/notes

# Update note 1
curl -X PUT http://localhost:3000/notes/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated","content":"New content"}'

# Delete note 1
curl -X DELETE http://localhost:3000/notes/1
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
2. Create requests against `http://localhost:3000/notes` (one per endpoint above).
3. A shared collection file will be exported into the `postman/` folder — watch this space.

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
| 7 | Shadie           | `@williamshadie52-oss`  | Get all notes (`GET /notes`)  | `feature/get-all`             | ⏳ Branch open — awaiting push |
| 8 | S.t.e.a.m        | TBA                     | Get one note (`GET /notes/:id`) | *to create branch*          | ⏳ Not started     |
| 9 | Tolex            | `@Tolex081`             | Model & data store            | *to create branch*            | ⏳ Not started     |
| 10 | Osifo Prudent   | *(no GitHub yet)*       | Create note (`POST`)          | *to create branch*            | ⏳ Not started     |
| 11 | Laureen         | `@Laureen-L`            | Express/project setup support | `main`                        | ✅                 |
| 12 | Eze Chimzurum   | `@CHIZYDIGITALS`        | Documentation (README)        | `feature/docs`                | 🔄 This PR         |

### 🔜 Remaining work
- [ ] `feature/get-all` — push the GET-all implementation (replace temporary scaffold)
- [ ] `GET /notes/:id` — get-one endpoint (still missing entirely)
- [ ] Migrate routes to the `/api/notes` prefix (spec requirement)
- [ ] Switch IDs from numeric `length + 1` to **UUID** (current scheme duplicates IDs after a delete)
- [ ] Export the Postman collection into `postman/`
- [ ] Deployment (Render/Railway) + presentation slides
