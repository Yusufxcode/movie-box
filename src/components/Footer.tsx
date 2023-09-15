import { Box, HStack, Image, Text } from "@chakra-ui/react";
import FacebookIcon from "../assets/facebookIcon.png";
import instagramIcon from "../assets/instagramIcon.png";
import twitterIcon from "../assets/twitterIcon.png";
import youtubeIcon from "../assets/youtubeIcon.png";

const Footer = () => {
  return (
    <Box display="grid" placeItems="center" mt={50}>
      <HStack gap={10}>
        <Image src={FacebookIcon} />
        <Image src={instagramIcon} />
        <Image src={twitterIcon} />
        <Image src={youtubeIcon} />
      </HStack>

      <HStack gap={10} my={10}>
        <Text fontWeight="bold">Conditions of use</Text>
        <Text fontWeight="bold">Policy & Privacy</Text>
        <Text fontWeight="bold">Press Room</Text>
      </HStack>
      <Text color="gray.500" fontWeight="bold" mb={10}>
        © 2021 MovieBox by Adebakin Yusuf
      </Text>
    </Box>
  );
};

export default Footer;
