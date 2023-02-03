const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];
// https://www.dicoding.com/academies/261/tutorials/14783?from=14778
// http://notesapp-v1.dicodingacademy.com/
module.exports = routes;
