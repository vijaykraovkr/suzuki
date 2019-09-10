module.exports = (app) => {
    // const notes = require('../controllers/note.controller.js');
    const comment = require('../controllers/comment.controller')

    // Create a new Note
    app.post('/api/v1/create_comment', comment.create);

    // Retrieve all Notes
    app.get('/api/v1/get_all_comment', comment.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);

    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);

    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
}