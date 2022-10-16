import { IconDotsVertical } from "@tabler/icons";
import { ActionIcon, Menu } from "@mantine/core";
import { useRouter } from "next/router";

export function TicketListMenu({ ticket }: { ticket: string }) {
  const { push } = useRouter();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon>
          <IconDotsVertical />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Ticket Actions</Menu.Label>
        <Menu.Item onClick={(e) => push(`tickets/details/${ticket}`)}>
          Details
        </Menu.Item>
        <Menu.Item>Add Task</Menu.Item>
        <Menu.Item>Add Comment</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
