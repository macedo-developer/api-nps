import { Router } from "express";
import { SendMainController } from "./controllers/SendMailController";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const routes = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMainController = new SendMainController();

routes.post("/users", userController.create);

routes.get("/surveys", surveysController.show);
routes.post("/surveys", surveysController.create);

routes.post("/sendMail", sendMainController.execute);

export { routes };
