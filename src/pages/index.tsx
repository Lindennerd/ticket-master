import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import LandingPage from "../components/Pages/LandingPage";

const Home = () => {
  const { status } = useSession();
  const {
    data: organization,
    isLoading,
    error,
  } = trpc.organization.getUsersOrganization.useQuery(undefined, {
    enabled: status === "authenticated",
  });

  const { push } = useRouter();

  if (status === "authenticated")
    if (organization) push(`organization/${organization.organizationId}`);
    else push("organization/new");
  else return <LandingPage />;
};

export default Home;
