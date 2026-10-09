import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteByID,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteByID);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
