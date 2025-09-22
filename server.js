import http from "node:http";
import { getDataFromDB } from "./database/db.js";
// data
const destinations = await getDataFromDB();
// server creation
const server = http.createServer(async (request, response) => {
  // data
  //   const destinations = await getDataFromDB();
  if (request.url === "/api" && request.method === "GET") {
    response.setHeader("Content-Type", "application/json");
    response.statusCode = 200;
    response.end(JSON.stringify(destinations));
  } else if (request.url.startsWith("/api/continent") && request.method === "GET") {
    // const continent = request.url.slice(request.url.lastIndexOf("/") + 1); // OR
    const continent = request.url.split("/").pop();
    const continentData = destinations.filter(destination => destination.continent.toLowerCase() === continent );
    response.setHeader("Content-Type", "application/json");
    response.statusCode = 200;
    response.end(JSON.stringify(continentData));
  } else {
    const error = {
      error: "not found",
      message: "The requested route does not exist",
    };
    response.setHeader("Content-Type", "application/json");
    response.statusCode = 404;
    response.end(JSON.stringify(error));
  }
});

// creating the server port
const PORT = 8000;

// starting the server
server.listen(PORT, "localhost", () => {
  console.log(`Server started listening on port ${PORT}`);
});
