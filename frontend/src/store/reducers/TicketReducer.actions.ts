import { Action } from "redux";
import { Ticket } from "../../models/Ticket";

export enum ActionType {
    CREATE_TICKET,
    UPDATE_TICKET
}

export interface TicketAction extends Action<ActionType> {
    ticket: Ticket;
}