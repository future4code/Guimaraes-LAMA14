import { Ticket } from "../model/Tickets";
import { TicketShop } from "../model/TicketShop";
import { BaseDatabase } from "./BaseDatabase";

export class TicketsDataBase extends BaseDatabase {
  private static TABLE_TICKETS = "Ingressos_lama";

  private static TABLE_SHOP = "Comprar_ingressos_lama";

  public postTicket = async (ticket: Ticket): Promise<void> => {
    try {
      await TicketsDataBase.connection(TicketsDataBase.TABLE_TICKETS).insert(
        ticket
      );
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public shopTicket = async (ticketShop: TicketShop): Promise<void> => {
    try {
      await TicketsDataBase.connection(TicketsDataBase.TABLE_SHOP).insert(
        ticketShop
      );
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
