import { extendTheme } from "@chakra-ui/react";
import { TextStyle as Text } from "./components/Text";
import { HeadingStyle as Heading } from "./components/Text";

const components = {
  Text,
  Heading,
};
export const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Inter, sans-serif",
  },
  components,
});
