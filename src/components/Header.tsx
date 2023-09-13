import { Box } from "@chakra-ui/react";
import poster from "../assets/Poster.png";

interface Props {
  children: React.ReactNode;
}

const header = ({ children }: Props) => {
  return (
    <Box
      backgroundImage={`url(${poster})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      width="100vw"
      height="100vh"
      position="relative"
      pt={5}
    >
      {children}
    </Box>
  );
};

export default header;
