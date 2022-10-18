import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated" && !publicPaths.includes(router.asPath))
      router.push({
        pathname: "/",
      });
  }, [status]);

  const publicPaths = ["/"];

  return <>{children}</>;
}
