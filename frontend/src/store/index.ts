import { createStore, combineReducers } from 'redux';
import TicketReducer  from './reducers/TicketReducer';
import { Ticket } from '../models/Ticket';

const reducer = combineReducers<AppState>({
    tickets: TicketReducer
});


export interface AppState {
    tickets: Ticket[]
}

export default () => createStore(reducer);