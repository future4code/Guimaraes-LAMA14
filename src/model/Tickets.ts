export class Ticket {
  constructor(
    private id: string,
    private name: string,
    private value: number,
    private tickets_qty: number,
    private tickets_balance: number,
    private id_show: string
  ) {}

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }
  getTickets_qty() {
    return this.tickets_qty;
  }
  getTickets_balance() {
    return this.tickets_balance;
  }
  getId_show() {
    return this.id_show;
  }
}

export interface TicketInputSTO {
  name: string;
  value: number;
  tickets_qty: number;
  tickets_balance: number;
  id_show: string;
}
