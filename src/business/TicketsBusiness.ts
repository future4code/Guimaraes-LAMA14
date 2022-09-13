import { TicketsDataBase } from "../data/TicketsDatabase";
import { Ticket, TicketInputSTO } from "../model/Tickets";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const ticketDatabase = new TicketsDataBase();
const authenticator = new Authenticator();
export class TicketsBusiness {
  postTicket = async (input: TicketInputSTO, token: string) => {
    const { name, value, tickets_qty, tickets_balance, id_show } = input;
    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    const newTicket = new Ticket(
      id,
      name,
      value,
      tickets_qty,
      tickets_balance,
      id_show
    );

    await ticketDatabase.postTicket(newTicket);

    const accessToken = authenticator.generate({ id });
    return accessToken;
  };
}
