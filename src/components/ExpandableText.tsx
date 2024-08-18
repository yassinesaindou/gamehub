import { Badge, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  description: string;
  limit: number;
}
export default function ExpandableText({ description, limit }: Props) {
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  if (description.length < limit) return <Text>{description}</Text>;

  return (
    <Text>
      {isTextExpanded ? description : description.substring(0, limit) + "..."}
      <Badge
        _hover={{ cursor: "pointer" }}
        colorScheme="yellow"
        onClick={() => setIsTextExpanded(!isTextExpanded)}>
        {isTextExpanded ? "Read Less" : "Read More"}
      </Badge>
    </Text>
  );
}
