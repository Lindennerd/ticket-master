import { Comment } from "@/domain/Comment/Comment.entity";
import { Task } from "@/domain/Task/Task.entity";
import { Entity, Fields } from "remult";

@Entity("ticket", { allowApiCrud: true })
export class Ticket {
  @Fields.uuid()
  id!: string;

  @Fields.string()
  title = "";

  @Fields.string()
  description = "";

  @Fields.date()
  createdAt = new Date();

  @Fields.date()
  startedAt?: Date;

  @Fields.date()
  doneAt?: Date;

  @Fields.object()
  status = TicketStatus.CREATED;

  @Fields.object<Comment>((options, remult) => {
    options.serverExpression = async (ticket) => {
      remult.repo(Comment).find({ where: { ticketId: ticket.id } });
    };
  })
  comments!: Comment[];

  @Fields.object<Task>((options, remult) => {
    options.serverExpression = async (ticket) => {
      remult.repo(Task).find({ where: { ticketId: ticket.id } });
    };
  })
  tasks!: Task[];
}

export enum TicketStatus {
  CREATED,
  BACKLOG,
  STARTED,
  PAUSED,
  DONE,
}

export type TicketCreateInput = {
  title: string;
  description: string;
};

export interface TicketUpdateInput extends TicketCreateInput {
  id: string;
}
