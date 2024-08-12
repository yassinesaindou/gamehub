import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props{
  onSearch: (input: string) => void;
}
export default function SearchInput({ onSearch }: Props) {
  
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form style={{width:'100%'}} onSubmit={(e) => {
      e.preventDefault()
      if (searchRef.current)
        onSearch(searchRef.current.value)
      
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input borderRadius={20} placeholder="Search Games" variant={"filled"} ref={searchRef} />
      </InputGroup>
    </form>
  );
}
