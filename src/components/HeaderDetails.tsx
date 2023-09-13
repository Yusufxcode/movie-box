import { VStack, Text, Box, Image, Button, Flex } from "@chakra-ui/react";
import IMDb from "../assets/IMDb.png";
import play from "../assets/PlayIcon.png";
import tomatoes from "../assets/RottenTomatoes.png";

const HeaderDetails = () => {
  return (
    <VStack width="400px" align="left" m={20}>
      <Text
        fontFamily="sans-serif"
        fontSize="4xl"
        fontWeight="700"
        color="white"
        className="title"
      >
        {" "}
        John Wick 3: Parabellum
      </Text>
      <Box className="rating">
        <Flex gap={5}>
          <div className="imdb">
            <Flex gap={2}>
              <Image src={IMDb} />
              <Text color="white" fontSize="xs">
                86.0/100
              </Text>
            </Flex>
          </div>

          <div className="tomatoes">
            <Flex gap={2}>
              <Image src={tomatoes} />
              <Text color="white" fontSize="xs">
                97%{" "}
              </Text>
            </Flex>
          </div>
        </Flex>
      </Box>
      <Text color="white" className="description">
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </Text>
      <Button backgroundColor="#BE123C" color="#fff" width={40} gap={2}>
        <Image src={play} />
        Watch Trailer
      </Button>
    </VStack>
  );
};

export default HeaderDetails;
