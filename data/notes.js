// Shared in-memory notes. Changes are reset when the server restarts.
const notes = [
  {
    id: 1,
    title: "Project Meeting",
    content: "Discuss Group 4 project deliverables and Git roles.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Express Basics",
    content: "Review CRUD routes and request body parsing.",
    createdAt: new Date().toISOString(),
  },
];

module.exports = notes;
