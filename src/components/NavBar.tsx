import { Box, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import MenuIcon from "../assets/MenuIcon.png";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Flex mx={20}>
      <Box>
        <HStack gap={5}>
          <Image src={logo} />
          <Text color="white">Movie Box</Text>
        </HStack>
      </Box>
      <Spacer />
      <SearchBar />
      <Spacer />
      <Box>
        <HStack gap={5}>
          <Text color="white">Sign in</Text>
          <Image src={MenuIcon} />
        </HStack>
      </Box>
    </Flex>
  );
};

export default NavBar;
