import { Request, Response } from "express";
import { TicketsBusiness } from "../business/TicketsBusiness";
import { TicketInputSTO } from "../model/Tickets";

const ticketsBussiness = new TicketsBusiness();
export class TicketsContoller {
  async postTicket(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;

      const { name, value, tickets_qty, tickets_balance, id_show } = req.body;

      const input: TicketInputSTO = {
        name: name,
        value: value,
        tickets_qty: tickets_qty,
        tickets_balance: tickets_balance,
        id_show: id_show,
      };

      const result = await ticketsBussiness.postTicket(input, token);

      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).send(error.sqlMessage || error.message);
    }
  }
}
