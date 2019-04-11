const request = require("supertest");
const app = require("./app.js");

describe("app.js", () => {
  describe("GET /", () => {
    it("should respond with status 200 OK", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
  });
});
