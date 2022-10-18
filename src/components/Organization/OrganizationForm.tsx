import { Button, Group, TextInput } from "@mantine/core";
import { createStyles } from "@mantine/styles";

export function OrganizationForm() {
  const { classes } = styles();

  return (
    <form className={classes.formLayout}>
      <TextInput label="Organization Name" />
      <Group>
        <Button className={classes.fullWidthButtonGroup}>Create</Button>
      </Group>
    </form>
  );
}

const styles = createStyles({
  fullWidthButtonGroup: {
    width: "100%",
  },
  formLayout: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});
