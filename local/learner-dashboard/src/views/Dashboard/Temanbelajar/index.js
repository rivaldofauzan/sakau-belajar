import { Flex, Text, useColorModeValue, Box } from "@chakra-ui/react";
import React from "react";
import Capaian from "./components/Capaian";
import Badge from "./components/Badge"

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex
      flexDirection="row" 
      flexWrap="wrap" 
      justifyContent="space-between" 
      pt={{ base: "120px", md: "75px" }}
    >
      <Text fontSize="3xl" color={textColor} fontWeight="bold" pb=".5rem">
        Timeline
      </Text>
      <Capaian
        nama="Danu Mahesa"
        tanggalPenyelesaian="18 Mar, 07:00"
        namaCourse="Dasar - dasar pemrograman"
        fotoSrc="/img_normal.jpeg"
      />
      <Badge
        nama="Danu Mahesa"
        tanggalPenyelesaian="18 Mar, 07:00"
        namaBadge="Ambisius"
        fotoSrc="/img_normal.jpeg"
      />
      <Capaian
        nama="Danu Mahesa"
        tanggalPenyelesaian="18 Mar, 07:00"
        namaCourse="Dasar - dasar pemrograman"
        fotoSrc="/img_normal.jpeg"
      />
      <Capaian
        nama="Danu Mahesa"
        tanggalPenyelesaian="18 Mar, 07:00"
        namaCourse="Dasar - dasar pemrograman"
        fotoSrc="/img_normal.jpeg"
      />
      <Badge
        nama="Danu Mahesa"
        tanggalPenyelesaian="18 Mar, 07:00"
        namaBadge="Ambisius"
        fotoSrc="/img_normal.jpeg"
      />
    </Flex>
  );
}