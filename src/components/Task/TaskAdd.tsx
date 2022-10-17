import { TaskInput } from "@/domain/Task/Task.entity";
import { useTask } from "@/domain/Task/useTask";
import { Ticket } from "@/domain/Ticket/Ticket.entity";
import { Button, createStyles, Modal } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { useState } from "react";
import { TaskForm } from "./Form";

export function TaskAdd({ ticket }: { ticket: Ticket }) {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { classes } = useStyles();
  const { createTask } = useTask();

  async function onSubmit(task: TaskInput) {
    setLoading(true);
    await createTask(task);
    setLoading(false);
  }

  return (
    <>
      <Button
        onClick={(e) => setOpenModal(true)}
        leftIcon={<IconPlus />}
        variant="outline"
        className={classes.newTaskButton}
      >
        New Task
      </Button>
      <Modal
        withCloseButton={false}
        opened={openModal}
        onClose={() => setOpenModal(false)}
        size="lg"
        title={`Add Task to the ticket ${ticket?.title}`}
      >
        <TaskForm
          loading={loading}
          onSubmit={onSubmit}
          task={{
            description: "",
            title: "",
            ticketId: ticket.id,
          }}
        />
      </Modal>
    </>
  );
}

const useStyles = createStyles({
  newTaskButton: {
    width: "100%",
  },
});
