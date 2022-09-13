import { Ticket } from "../model/Tickets";
import { BaseDatabase } from "./BaseDatabase";

export class TicketsDataBase extends BaseDatabase {
  private static TABLE_TICKETS = "Ingressos_lama";

  public postTicket = async (ticket: Ticket): Promise<void> => {
    try {
      await TicketsDataBase.connection(TicketsDataBase.TABLE_TICKETS).insert(
        ticket
      );
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
