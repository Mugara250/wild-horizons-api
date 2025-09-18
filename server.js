import http from "node:http";

// server creation
const server = http.createServer((request, response) => {
    response.end("Created a server");
});

// creating the server port
const PORT = 8000;

// starting the server
server.listen(PORT, "localhost", () => {
    console.log(`Server started listening on port ${PORT}`);
})