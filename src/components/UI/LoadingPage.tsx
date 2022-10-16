import { createStyles, Loader, LoadingOverlay } from "@mantine/core";

export function LoadingPage() {
  const { classes } = useClasses();

  return (
    <div className={classes.loadingPageLayout}>
      <LoadingOverlay visible={true} />
      <Loader />
    </div>
  );
}

const useClasses = createStyles({
  loadingPageLayout: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
  },
});
