import {
    Flex,
    Text,
    useColorModeValue,
    Box,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Temanbelajar = ({
    nama,
    tanggalPenyelesaian,
    namaBadge,
    fotoSrc, 
    data
  }) => {
    const textColor = useColorModeValue("gray.700", "white");
  
    return (
      <Flex
        p="20px"
        position="relative"
        overflowX={{ sm: "scroll", xl: "hidden" }}
        width="100%"
        justifyContent="center"
      >
        <Box
          width="100%"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          p="20px"
          display="flex"
          alignItems="center"
          position="relative"
          ml="auto"
          mr="auto"
          flex="1"
        >
          <img
            src={fotoSrc} 
            alt="Foto"
            style={{ marginRight: "20px" }}
            width="50px"
            height="50px"
          />
          <Flex flexDirection="column">
            <Text
              fontSize="sm"
              color={textColor}
              position="absolute"
              top="20px"
              right="20px"
            >
              {tanggalPenyelesaian}
            </Text>
            <Text fontSize="lg" color={textColor} pb=".5rem">{nama}</Text>
            <Text fontSize="lg" color="gray.500" pb=".5rem">Telah Mendapatkan Badge</Text>
            <Box bg="gray.200" borderRadius="md" p="0.5rem" mb=".5rem">
              <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
                {namaBadge}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  };
  
  export default Temanbelajar;
  