export function sendJSONResponse(response, statusCode, payload) {
  response.setHeader("Content-Type", "application/json");
  response.statusCode = statusCode;
  response.end(JSON.stringify(payload));
}