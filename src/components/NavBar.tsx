import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props{
   onSearch: (input: string) => void
 }

export default function NavBar({onSearch}:Props) {
   
  return (
    <HStack justifyContent={"space-between"} padding='10px'>
      <Image src={logo} boxSize={"60px"} alt="logo" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}
