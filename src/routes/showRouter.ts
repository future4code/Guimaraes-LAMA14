import express from "express";
import { ShowController } from "../controller/ShowController";

export const showRouter = express.Router();

const showController = new ShowController();

showRouter.post("/registration", showController.postShow);
showRouter.get("/", showController.getShow);
