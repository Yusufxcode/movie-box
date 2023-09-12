import { Box, Image } from "@chakra-ui/react";
import poster from "../assets/Poster.png";
import NavBar from "./NavBar";

const header: React.FC = () => {
  return (
    <Box position="relative">
      <Image
        src={poster}
        alt="Background"
        objectFit="cover"
        width="100%"
        zIndex={-1}
        position="absolute"
        top={0}
        left={0}
      />
      {}
      <Box position="relative" zIndex={1}>
        {<NavBar />}
      </Box>
    </Box>
  );
};

export default header;
