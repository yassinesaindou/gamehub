import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const searchRef = useRef<HTMLInputElement>(null);

  const navigate =useNavigate()
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) setSearchText(searchRef.current.value);
        navigate('/')
      }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search Games"
          variant={"filled"}
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
}
