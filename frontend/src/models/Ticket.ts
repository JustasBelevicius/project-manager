import { User } from "./User";

export interface Ticket {
    assignee?: User,
    code: string,
    creator: User,
    description?: string,
    parent?: string,
    priority: number,
    status: TicketStatus,
    title: string,
    type: TicketType,
};

export enum TicketType {
    PROJECT, TASK, BUG
};

export enum TicketStatus {
    OPEN, IN_PROGRESS, CLOSED
};