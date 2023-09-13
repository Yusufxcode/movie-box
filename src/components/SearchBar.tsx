import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <Input
          placeholder="What do you want to search for?"
          htmlSize={50}
          width="auto"
        />
        <InputRightElement>
          <SearchIcon color="white" />
        </InputRightElement>
      </InputGroup>
    </Stack>
    // <>
    //   <InputGroup>
    //     <InputRightElement pointerEvents="none">
    //       <SearchIcon />
    //     </InputRightElement>

    //     <Input
    //       htmlSize={60}
    //       width="auto"
    //       placeholder="What do you want to search?"
    //     />
    //   </InputGroup>
    // </>
  );
};

export default SearchBar;
