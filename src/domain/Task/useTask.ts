import { remult } from "remult";
import { Task, TaskInput } from "./Task.entity";

export function useTask() {
  return {
    createTask: async (task: TaskInput) => {
      return await remult.repo(Task).insert(task);
    },
  };
}
