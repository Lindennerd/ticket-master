import { Task, TaskStatus } from "@/domain/Task/Task.entity";
import { Table } from "@mantine/core";

export function TaskList({ tasks }: { tasks: Task[] }) {
  const tasksMap =
    tasks && tasks.length ? (
      tasks.map((task) => (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{`${task.createdAt.toLocaleDateString()} ${task.createdAt.toLocaleTimeString()}`}</td>
          <td>{TaskStatus[task.status]}</td>
          <td></td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={5}>No Tasks added here yet</td>
      </tr>
    );

  return (
    <>
      <Table>
        <thead>
          <th>Title</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>{tasksMap}</tbody>
      </Table>
    </>
  );
}
