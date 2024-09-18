// controllers/notes.js
// Import our Note model
import Note from '../models/Note.js';
export const getNotes = async (req, res) => {
    try {
        const notes = await Note.findAll();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createNote = async (req, res) => {
    try {
        const {
            body: { firstName, lastName, email },
        } = req;
        if (!firstName || !lastName || !email)
            return res
                .status(400)
                .json({ error: 'firstName, lastName, and email are required' });
        const note = await Note.create(req.body);
        res.json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getNoteById = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const note = await Note.findByPk(id);
        if (!note) return res.status(404).json({ error: 'Note not found' });
        res.json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateNote = async (req, res) => {
    try {
        const {
            body: { firstName, lastName, email },
            params: { id },
        } = req;
        if (!firstName || !lastName || !email)
            return res
                .status(400)
                .json({ error: 'firstName, lastName, and email are required' });
        const note = await Note.findByPk(id);
        if (!note) return res.status(404).json({ error: 'Note not found' });
        await note.update(req.body);
        res.json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const note = await Note.findByPk(id);
        if (!note) return res.status(404).json({ error: 'Note not found' });
        await note.destroy();
        res.json({ message: 'Note deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
