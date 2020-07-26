const express = require("express");
const {uuid} = require("uuidv4")

const app = express();

// REQUEST BODY
app.use(express.json());

const projects = [];


// (GET)
app.get('/projects', (request, response) => {
    // QUERY PARAMS
    // const {title, owner} = request.query;

    // console.log(title);
    // console.log(owner);
    // console.log(request.query);

    return response.json(projects);
});

// (POST)
app.post('/projects', (request, response) => {
    // REQUEST BODY
    const {title, owner} = request.body;

    const project = {id: uuid(), title, owner};

    projects.push(project);

    return response.json(project);
});

// (PUT)
// ex: http://localhost:3333/projects/2
app.put('/projects/:id', (request, response) => {
    // ROUTE PARAMS
    const {id} = request.params;
    const {title, owner} = request.body;

    const projectIndex = projects.findIndex((project) => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({error: "Project not found."});
    }

    const project = {
        id, 
        title, 
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
});

// (DELETE)
app.delete('/projects/:id', (request, response) => {

    const {id} = request.params;

    const projectIndex = projects.findIndex((project) => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({error: "Project not found."});
    }

    return response.json(projects.splice(projectIndex, 1));
         
});

const port = 3333;
app.listen(3333, () => {
    console.log(`Server up and running on PORT ${port}`);
});