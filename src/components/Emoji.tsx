import { Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}
export default function Emoji({ rating }: Props) {
  if (rating < 3) return null;
  const emoji = rating == 3 ? "😐" : rating == 4 ? "👍🏼" : "🎯";
  return <Text fontSize={'2xl'} >{emoji}</Text>;
}
