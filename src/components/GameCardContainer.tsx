import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function GameCardContainer({ children }: Props) {
  return (
    <Box
      _hover={{ transform: "scale(1.02)", transition: "0.15s" }}
      borderRadius={10}
      minWidth={"300px"}
      overflow="hidden">
      {children}
    </Box>
  );
}
