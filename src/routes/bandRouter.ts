import express from "express";
import { BandController } from "../controller/BandController";

export const bandRouter = express.Router();

const bandController = new BandController();

bandRouter.post("/registration", bandController.bandRegistration);
bandRouter.get("/", bandController.getBand);
