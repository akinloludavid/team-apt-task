import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  keyframes,
} from "@chakra-ui/react";
import {
  mainBg,
  mainLogo,
  DateIcon,
  ChevronRight,
  coinPot,
  coinLeft,
  coinRight,
  light1,
  light2,
  light3,
  light4,
  light5,
} from "../assets";
import { motion } from "framer-motion";

const Home = () => {
  const animationKeyframes = keyframes`
  0% { transform: translateY(20px) }
  25% { transform: translateY(60px)  }
  50% { transform: translateY(120px) ); }
  75% { transform: translateY(60px) ); }
  100% { transform:translateY(20px)  }
`;

  const animation = `${animationKeyframes} 2s ease-in-out infinite`;

  //   const lightKeyframes = keyframes`
  //   0% { transform: rotate(0); }
  //   100% { transform: rotate(-360deg); }
  // `;

  //   const lightAnimation = `${lightKeyframes} 10s ease-in infinite`;

  const convertPriceToNaira = (price: string | number) => {
    const options = { style: "currency", currency: "NGN" };
    return new Intl.NumberFormat("en-NG", options).format(Number(price));
  };

  const cashPrize = convertPriceToNaira(3000000);
  return (
    <Box
      height="100%"
      minHeight={"100vh"}
      bgImage={mainBg}
      px={[4, 4, 8, 32]}
      pt={"44px"}
      overflowX="hidden"
    >
      <Flex justify={"space-between"}>
        <Box>
          <Image src={mainLogo} />
        </Box>
        <Box>
          <Flex gap={3}>
            <Box>
              <Image src={DateIcon} />
            </Box>
            <Box display={"flex"} flexDirection="column">
              <Heading
                as="h2"
                fontSize={"18px"}
                fontWeight="700"
                color={"#FFFFFF"}
                lineHeight="109%"
              >
                Day 1
              </Heading>
              <Text
                mt="auto"
                color={"#FFFFFF99"}
                fontSize="14px"
                fontWeight={"400"}
                lineHeight="109%"
                letterSpacing={"-0.02em"}
              >
                of 5
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Box textAlign={"center"} mt={"8"}>
        <Heading
          as={motion.h1}
          fontSize={["40px", "70px"]}
          fontWeight="300"
          lineHeight={"0.91"}
          display={["none", "block"]}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.6,
              ease: "easeInOut",
            },
          }}
        >
          Unlock to
        </Heading>
        <Heading
          as={motion.h1}
          fontWeight={"700"}
          fontSize={["40px", "70px"]}
          lineHeight={"0.91"}
          display={["none", "block"]}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.6,
              ease: "easeInOut",
            },
          }}
        >
          Power your dreams!
        </Heading>
        <Heading
          as={motion.h1}
          fontSize={["40px", "70px"]}
          fontWeight="300"
          lineHeight={"0.91"}
          display={["block", "none"]}
          mx="auto"
          textAlign={"center"}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.6,
              ease: "easeInOut",
            },
          }}
        >
          Unlock to Power
        </Heading>
        <Heading
          as={motion.h1}
          fontWeight={"700"}
          fontSize={["40px", "70px"]}
          lineHeight={"0.91"}
          display={["block", "none"]}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.6,
              ease: "easeInOut",
            },
          }}
        >
          your dreams!
        </Heading>
        <Box
          display={["none", "block"]}
          as={motion.div}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.4,
              ease: "easeInOut",
            },
          }}
        >
          <Text fontSize={["16px", "29.43px"]} mt={4} lineHeight="20px">
            Stand a chance to win
          </Text>
          <Text as="p" fontSize={["16px", "29.43px"]}>
            <Text as="span" fontSize={["16px", "29.43px"]} fontWeight={"700"}>
              {cashPrize}
            </Text>{" "}
            everyday for the next 5 days
          </Text>
        </Box>

        <Box display={["block", "none"]}>
          <Text fontSize={["16px", "29.43px"]} mt={4} lineHeight="20px">
            Stand a chance to win{" "}
            <Text as="span" fontSize={["16px", "29.43px"]} fontWeight={"700"}>
              {cashPrize}
            </Text>{" "}
          </Text>
          <Text as="p" fontSize={["16px", "29.43px"]}>
            everyday for the next 5 days
          </Text>
        </Box>
      </Box>

      <Box
        as={motion.div}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        mt={6}
        mx="auto"
        maxW="425px"
        p={["24px 27px"]}
        borderRadius="8px"
        bg="linear-gradient(180deg, rgba(255, 255, 255, 0.39) -213.5%, rgba(255, 255, 255, 0) 100%)"
        boxShadow={
          "inset 0px -1px 11px rgba(255, 255, 255, 0.17), inset 0px 2px 0px rgba(255, 255, 255, 0.24)"
        }
      >
        <Text textAlign={"center"} mb={4}>
          🚀 How To Play
        </Text>
        <OrderedList as="ol" spacing={2}>
          <ListItem as="li" color={"#fff"} fontSize="14px">
            <Text letterSpacing={"-0.02em"} fontSize="14px">
              Guess the right combination of numbers
            </Text>
          </ListItem>
          <ListItem as="li" color={"#fff"} fontSize="14px">
            <Text letterSpacing={"-0.02em"}>Win N3,000,000 instantly</Text>
          </ListItem>
        </OrderedList>
        <Text as="p" mt={2} mb={4} letterSpacing={"-0.02em"} fontSize="14px">
          Sounds unbelievable? Well, guess right & see for yourself!
        </Text>
        <Box bgColor={"#0000004D"} p="10px" borderRadius={"10px"}>
          <Flex gap={2}>
            <Box>💡</Box>
            <Text fontSize={"12px"}>
              Think well before you guess. You have only 2 attempts per day and
              even after you wi, you can come back the next day to try for
              another jackpot!
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box w="100%" mt={"44px"} display="flex" justifyContent={"center"}>
        <Button
          as={motion.button}
          initial={{
            opacity: 0,
            y: "40px",
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              ease: "backInOut",
            },
          }}
          py="7px"
          px="16px"
          w="265px"
          height={"56px"}
          borderRadius="4px"
          mx="auto"
          bgColor={"#ECAB03"}
          fontSize="14px"
          fontWeight={"600"}
          color="#ffffff"
          outline={"none"}
          _active={{
            bgColor: "#ECAB03",
          }}
          _hover={{
            bgColor: "#ECAB03",
          }}
          lineHeight="17px"
          rightIcon={<Image src={ChevronRight} height="15.75px" w="9px" />}
          gap={8}
        >
          Play The Games
        </Button>
      </Box>

      <Box mt={12} position="relative">
        <Image
          position={"absolute"}
          top={[-10]}
          left={["-10%", "0%", "30%"]}
          w={["20%", "20%", "105.22px"]}
          src={coinLeft}
          mx="auto"
          animation={animation}
          as={motion.img}
        />
        <Image
          position={"absolute"}
          top={10}
          right={["-6%", "20%"]}
          w={["10%", "20%", "85.13px"]}
          src={coinRight}
          mx="auto"
          animation={animation}
          as={motion.img}
        />
        <Image
          zIndex={"9999"}
          w={["100%", "100%", "40%"]}
          initial={{
            y: 200,
            opacity: 0,
          }}
          animate={{
            y: 100,
            opacity: 1,
            transition: {
              delay: 0.1,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          as={motion.img}
          src={coinPot}
          mx="auto"
        />
      </Box>
      <Box
        overflowX={"clip"}
        maxW="100%"
        display={["none", "none", "none", "block"]}
      >
        <Image
          zIndex={"3333"}
          left={["-39vw", "16vw"]}
          bottom={10}
          position={"absolute"}
          src={light1}
        />
        <Image
          zIndex={"3333"}
          bottom={10}
          left={["-39vw", "22vw"]}
          position={"absolute"}
          src={light2}
        />
        <Image
          zIndex={"3333"}
          bottom={10}
          left={["25vw", "45vw"]}
          position={"absolute"}
          src={light3}
        />
        <Image
          bottom={10}
          left={["39vw", "48vw"]}
          zIndex={"3333"}
          position={"absolute"}
          src={light4}
        />
        <Image
          bottom={10}
          left={["39vw", "49vw"]}
          zIndex={"3333"}
          position={"absolute"}
          src={light5}
        />
      </Box>
    </Box>
  );
};

export default Home;
