import { Comment } from "@/domain/Comment/Comment.entity";
import { Task } from "@/domain/Task/Task.entity";
import { Ticket } from "@/domain/Ticket/Ticket.entity";
import { createRemultServer } from "remult/server";

export const api = createRemultServer({
  entities: [Comment, Task, Ticket],
});
