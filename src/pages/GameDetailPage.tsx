import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

export default function GameDetailPage() {

    const { slug } = useParams();
    console.log(slug)

    const { data:game, isLoading, error } = useGame(slug!);
    
    if (isLoading) return <Spinner />
    if (error || !game) throw error
    

   
    return <>
        <Heading>{game.name}</Heading>
        <Text>{game.description_raw}</Text>
    </>;
}
