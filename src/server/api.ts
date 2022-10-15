import { Comment } from "@/Comment/Comment.entity";
import { Task } from "@/Task/Task.entity";
import { Ticket } from "@/Ticket/Ticket.entity";
import { createRemultServer } from "remult/server";

export const api = createRemultServer({
  entities: [Comment, Task, Ticket],
});
