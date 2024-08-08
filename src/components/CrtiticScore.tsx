import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
export default function CrtiticScore({ score }: Props) {
    const color = score > 75 ? "green" : score > 60 ? "yellow" : ''
    return (
    <Badge fontSize={"14px"} colorScheme={color} borderRadius={"2px"} p={"1px 8px"}>
      {score}
    </Badge>
  );
}
