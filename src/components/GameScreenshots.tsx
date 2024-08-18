import { Box, Heading, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
interface Props {
    gameId: number;
}
export default function GameScreenshots({ gameId }:Props) {
    const { data, isLoading, error } = useScreenshots(gameId)
    
    if (isLoading) return <Spinner />
    if (error || !data) throw error;

    console.log(data)
    
    return (
        <Box marginTop={10}>
            <Heading as={'h3'}>Game Screenshots</Heading>
            <SimpleGrid marginTop={5} columns={{ sm: 1, md: 2 }} gap={3}  >
                {
                    data.results.map(screenshot => <Image borderRadius={5} src={screenshot.image} key={screenshot.id} />)
                }
            </SimpleGrid>
        </Box>
    )
}
