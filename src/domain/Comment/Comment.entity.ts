import { Entity, Fields } from "remult";

@Entity("comment", { allowApiCrud: true })
export class Comment {
  @Fields.uuid()
  id!: string;

  @Fields.string()
  content = "";

  @Fields.string()
  taskId?: string;

  @Fields.string()
  ticketId?: string;

  @Fields.date()
  createdAt = Date.now();
}
