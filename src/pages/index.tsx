import { useSession } from "next-auth/react";
import { NextPageWithLayout } from "./_app";
import { LandingPageLayout } from "../layout/LandingPageLayout";

const Home: NextPageWithLayout = () => {
  const { status } = useSession();

  if (status === "authenticated")
    return <div>redirect to organization page</div>;
  else return <div>Landing Page</div>;
};

Home.getLayout = function getLayout(page) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Home;
