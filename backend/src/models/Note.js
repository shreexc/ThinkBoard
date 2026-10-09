import mongoose from "mongoose";

// creating a schema model

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, // for created at and updated at
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
