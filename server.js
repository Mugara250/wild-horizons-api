import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { sendJSONResponse } from "./utils/sendJSONResponse.js";
import { getDataByPathParams } from "./utils/getDataByPathParams.js";

// server creation
const server = http.createServer(async (request, response) => {
  // data
  const destinations = await getDataFromDB();
  if (request.url === "/api" && request.method === "GET") {
    sendJSONResponse(response, 200, destinations);
  } else if (
    request.url.startsWith("/api/continent") &&
    request.method === "GET"
  ) {
    // const continent = request.url.slice(request.url.lastIndexOf("/") + 1); // OR
    const continent = request.url.split("/").pop();
    const continentData = getDataByPathParams(destinations, "continent", continent); 
    sendJSONResponse(response, 200, continentData);
  } else if (request.url.startsWith("/api/country") && request.method === "GET") {
    const country = request.url.split("/").pop();
    const countryData = getDataByPathParams(destinations, "country", country);
    sendJSONResponse(response, 200, countryData);
  } else {
    const error = {
      error: "not found",
      message: "The requested route does not exist",
    };
    sendJSONResponse(response, 404, error);
  }
});

// creating the server port
const PORT = 8000;

// starting the server
server.listen(PORT, "localhost", () => {
  console.log(`Server started listening on port ${PORT}`);
});
