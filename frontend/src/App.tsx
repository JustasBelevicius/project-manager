import React from 'react';
import './App.scss';
import { useSelector, connect, useDispatch } from 'react-redux';
import { AppState } from './store';
import { Ticket, TicketStatus, TicketType } from './models/Ticket';
import { createTicket, updateTicket } from './store/reducers/TicketReducer';

const createdTicket: Ticket = {
  code: "NEW-TICKET",
  title: "This is a new ticket",
  priority: 0,
  status: TicketStatus.OPEN,
  type: TicketType.TASK,
  creator: {
    email: "john@doe.com",
    name: "jdoe",
    firstname: "John",
    lastname: "Doe"
  }
};

const updatedTicket: Ticket = {
  code: "MOCK-666",
  title: "Updated ticket",
  priority: 0,
  status: TicketStatus.IN_PROGRESS,
  type: TicketType.BUG,
  creator: {
    name: 'boostas',
    firstname: 'Justas',
    lastname: 'Belevicius',
    email: 'jube1997@gmail.com'
  }
};

const App = () => {
  const tickets = useSelector<AppState, Ticket[]>(state => state.tickets);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => {dispatch(createTicket(createdTicket))}}>Add item</button>
      <button onClick={() => {dispatch(updateTicket(updatedTicket))}}>Update item</button>
      <ul>
        {tickets.map(ticket => <li key={ticket.code}>{ticket.title}</li>)}
      </ul>
    </>
  );
}

export default connect()(App);
