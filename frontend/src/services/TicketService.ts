import { Ticket, TicketType, TicketStatus } from "../models/Ticket";
import { User } from "../models/User";

const mockUser: User = {
    name: 'boostas',
    firstname: 'Justas',
    lastname: 'Belevicius',
    email: 'jube1997@gmail.com'
}

const mockTask: Ticket = {
    code: 'MOCK-666',
    creator: mockUser,
    title: "Mock ticket 1",
    type: TicketType.BUG,
    status: TicketStatus.OPEN,
    priority: 4,
    parent: 'MOCK-001'
};

const mockProject: Ticket = {
    code: 'MOCK-001',
    creator: mockUser,
    assignee: mockUser,
    title: "Mock project 1",
    type: TicketType.PROJECT,
    status: TicketStatus.OPEN,
    priority: 4
}

const mockTickets = [mockProject, mockTask]

export default {
    fetchTickets(): Ticket[] {
        return mockTickets;
    }
}