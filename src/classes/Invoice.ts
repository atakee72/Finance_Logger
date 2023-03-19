import { HasFormatter } from "../interfaces/hasFormatter.js";

export class Invoice implements HasFormatter {
  readonly client: string; // only read inside and outside
  private details: string; // only read and change inside
  public amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }
  format() {
    return `${this.client} owes EUR${this.amount} for ${this.details}`;
  }
}
