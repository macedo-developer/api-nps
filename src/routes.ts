import { Request, Response, Router } from "express";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const routes = Router();

const userController = new UserController();
const surveysController = new SurveysController();

routes.post("/users", userController.create);
routes.get("/surveys", surveysController.show);
routes.post("/surveys", surveysController.create);

export { routes };
