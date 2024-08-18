import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <Box padding={5}>
      <NavBar />
      <Heading>Oops </Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "Unknown Error"}
      </Text>
    </Box>
  );
}
