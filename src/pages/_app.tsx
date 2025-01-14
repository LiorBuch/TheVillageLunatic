import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  AppShell,
  Button,
  Center,
  Flex,
  Group,
  MantineProvider,
  Stack,
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
      <AppShell header={{ height: 155 }} padding="md">
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
    <Center>
      <Flex justify={"center"} direction={"column"}>
        <Center>
          <Image
            width={200}
            height={100}
            src={"/site_banner.png"}
            alt={"banner"}
          />
        </Center>
        <Group justify="space-between" pl={"sm"} pr={"sm"}>
          <Button component={Link} href={"/sport"}>
            Sport
          </Button>
          <Button>Gaming and Digital</Button>
          <Button>Science</Button>
          <Button component={Link} href={"/village"}>
            The Village
          </Button>
          <Button>Gossip</Button>
          <Button component={Link} href={"/"}>
            Home
          </Button>
          <Button>Nature</Button>
          <Button>Automobile</Button>
          <Button>Food</Button>
          <Button>Fashion</Button>
        </Group>
      </Flex>
    </Center>
  );
}
