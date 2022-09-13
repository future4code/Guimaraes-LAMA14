export class TicketShop {
  constructor(
    private id: string,
    private id_user: string,
    private ticket: number,
    private id_tickets: number
  ) {}

  getId() {
    return this.id;
  }
  getId_user() {
    return this.id_user;
  }
  getTicket() {
    return this.ticket;
  }
  getId_tickets() {
    return this.id_tickets;
  }
}
