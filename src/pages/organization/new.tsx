import { Paper, Text } from "@mantine/core";
import { OrganizationForm } from "../../components/Organization/OrganizationForm";

const NewOrganizationPage = () => {
  return (
    <>
      <Paper shadow={"md"} p={"md"} withBorder>
        <Text>Looks like you dont have an organization yet..</Text>
        <Text>Let's create one!</Text>
      </Paper>

      <Paper shadow={"md"} p={"md"} withBorder>
        <OrganizationForm />
      </Paper>
    </>
  );
};

export default NewOrganizationPage;
