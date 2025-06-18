import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup startElement={<LuSearch />}>
        <Input ref={ref} placeholder="Search games...." borderRadius={20} variant="outline" _placeholder={{ color: "gray.500" }} borderColor={"gray.200"} />
      </InputGroup>
    </form>
  );
}
