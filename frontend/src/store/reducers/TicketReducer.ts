import { Ticket } from "../../models/Ticket"
import TicketService from "../../services/TicketService";
import { ActionType, TicketAction } from "./TicketReducer.actions";

const initialState = TicketService.fetchTickets();

export const createTicket = (ticket: Ticket): TicketAction => {
    return {
        type: ActionType.CREATE_TICKET,
        ticket
    }
};

export const updateTicket = (ticket: Ticket): TicketAction => {
    return {
        type: ActionType.UPDATE_TICKET,
        ticket
    }
};

export default (prevState: Ticket[] = initialState, action: TicketAction): Ticket[] => {
    switch(action.type) {
        case ActionType.CREATE_TICKET:
            return [...prevState, action.ticket];
        case ActionType.UPDATE_TICKET:
            return [...prevState.filter(value => value.code !== action.ticket.code), action.ticket];
        default:
            return prevState;
    }
}