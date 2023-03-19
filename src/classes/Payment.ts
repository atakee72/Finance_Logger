import { HasFormatter } from "../interfaces/hasFormatter.js";

export class Payment implements HasFormatter {
  readonly recipient: string; // only read inside and outside
  private details: string; // only read and change inside
  public amount: number;

  constructor(client: string, details: string, amount: number) {
    this.recipient = client;
    this.details = details;
    this.amount = amount;
  }
  format() {
    return `${this.recipient} is owed EUR${this.amount} for ${this.details}`;
  }
}
