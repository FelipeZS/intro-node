const express = require("express");

const app = express();


// (GET) 
app.get('/projects', (request, response) => {
    return response.json(['Projeto 1', 'Projeto 2']);
});

// (POST)
app.post('/projects', (request, response) => {
    return response.json(['Projeto 1', 'Projeto 2', 'Projeto 3']);
});

// (PUT)
// ex: http://localhost:3333/projects/2
app.put('/projects/:id', (request, response) => {
    return response.json(['Projeto 4', 'Projeto 2', 'Projeto 3']);
});

// (DELETE)
app.delete('/projects/:id', (request, response) => {
    return response.json(['Projeto 2', 'Projeto 3']);
});

const port = 3333;
app.listen(3333, () => {
    console.log(`Server up and running on PORT ${port}`);
});