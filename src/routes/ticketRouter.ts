import express from "express";
import { TicketsContoller } from "../controller/TicketsController";

export const ticketRouter = express.Router();

const ticketComtroller = new TicketsContoller();

ticketRouter.post("", ticketComtroller.postTicket);
