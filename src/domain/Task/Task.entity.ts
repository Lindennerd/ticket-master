import { Comment } from "@/domain/Comment/Comment.entity";
import { Entity, Field, Fields } from "remult";

@Entity("task", { allowApiCrud: true })
export class Task {
  @Fields.uuid()
  id!: string;

  @Fields.string()
  title = "";

  @Fields.string()
  description = "";

  @Fields.string()
  ticketId!: string;

  @Fields.date()
  createdAt = Date.now();

  @Fields.date()
  startedAt?: Date;

  @Fields.date()
  doneAt?: Date;

  @Fields.object()
  status = TaskStatus.CREATED;

  @Fields.object<Comment>((options, remult) => {
    options.serverExpression = async (task) => {
      remult.repo(Comment).find({ where: { taskId: task.id } });
    };
  })
  comments!: Comment[];
}

export enum TaskStatus {
  CREATED,
  BACKLOG,
  STARTED,
  PAUSED,
  DONE,
}
