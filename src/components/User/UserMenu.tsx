import { Button, Menu } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { ThemeSwitcher } from "../UI/ThemeSwitcher";

export function UserMenu() {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <Menu transition="pop-top-right" position="top-end" width={220}>
          <Menu.Target>
            <Button
              variant="subtle"
              style={{
                height: "100%",
                padding: "5px",
                borderRadius: "50%",
              }}
            >
              <Image
                src={session.user!.image!}
                height={40}
                width={40}
                style={{
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>{session.user!.name}</Menu.Label>
            <Menu.Item>
              <ThemeSwitcher />
            </Menu.Item>
            <Menu.Item>
              <Button onClick={(e) => signOut()} variant="subtle">
                Logout
              </Button>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      )}
    </>
  );
}
