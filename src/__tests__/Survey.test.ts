import request from "supertest";
import { app } from "../app";
import createConnection from "../database";

describe("Surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to create a new survey", async () => {
    const response = await request(app).post("/surveys").send({
      title: "Qual a sua opiniao?",
      description: "De 0 a 10, qual a sua nota de satisfação?",
    });
    expect(response.status).toBe(201);
  });
});
