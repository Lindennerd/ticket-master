import {
  TicketCreateInput,
  TicketUpdateInput,
} from "@/domain/Ticket/Ticket.entity";
import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

interface TicketFormProps {
  title?: string;
  description?: string;
  loading: boolean;
  onSubmit: (values: TicketCreateInput | TicketUpdateInput) => void;
}

export function TicketForm({
  title,
  description,
  loading,
  onSubmit,
}: TicketFormProps) {
  const form = useForm<TicketCreateInput>({
    initialValues: {
      title: title ?? "",
      description: description ?? "",
    },
    validate: {
      title: (value) => (value === "" ? "this field can't be empty" : null),
      description: (value) =>
        value === "" || value.length < 10
          ? "provide a description at least 10 character long"
          : null,
    },
  });

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        label="Title"
        placeholder="Give a brief description of your ticket"
        {...form.getInputProps("title")}
      />
      <Textarea
        label="Description"
        placeholder="Describe thoroughly the ticket, given as much information as possible about the issue and the required steps to reproduce it"
        {...form.getInputProps("description")}
      />

      <Group position="right" mt="md">
        <Button type="submit" disabled={loading}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
