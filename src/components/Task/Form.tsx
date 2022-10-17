import { TaskInput } from "@/domain/Task/Task.entity";
import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

interface TaskFormProps {
  loading: boolean;
  task: TaskInput;
  onSubmit: (task: TaskInput) => void;
}

export function TaskForm({ loading, task, onSubmit }: TaskFormProps) {
  const taskForm = useForm<TaskInput>({
    initialValues: task,
  });

  return (
    <form onSubmit={taskForm.onSubmit(onSubmit)}>
      <TextInput
        label="Task Title"
        placeholder="Give a brief description of the task"
      />
      <Textarea
        label="Task Description"
        placeholder="Describe thoroughly the task, given as much information as possible about the issue and the required steps to reproduce it"
      />

      <Group position="right" mt="md">
        <Button type="submit" loading={loading}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
