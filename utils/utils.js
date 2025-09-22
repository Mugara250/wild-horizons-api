export function sendJSONResponse(response, statusCode, data) {
    response.setHeader("Content-Type", "application/json");
    response.statusCode = statusCode;
    response.end(JSON.stringify(data));
}