import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  AppShell,
  Button,
  Group,
  MantineProvider,
  createTheme,
} from "@mantine/core";
import "@mantine/core/styles.css";
import Image from "next/image";
import Link from "next/link";
const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 115 }} padding="md">
        <AppShell.Header styles={{ header: { backgroundColor: "#E6D7AA" } }}>
          <HeaderData />
        </AppShell.Header>
        <AppShell.Main>
          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

function HeaderData() {
  return (
    <Group justify="space-between" pl={"sm"} pr={"sm"}>
      <Button component={Link} href={"/sport"}>
        Sport
      </Button>
      <Button>Science</Button>
      <Button component={Link} href={"/village"}>
        The Village
      </Button>
      <Image width={200} height={100} src={"/site_banner.png"} alt={"banner"} />
      <Button component={Link} href={"/"}>
        Home
      </Button>
      <Button>Nature</Button>
      <Button>Automobile</Button>
    </Group>
  );
}
