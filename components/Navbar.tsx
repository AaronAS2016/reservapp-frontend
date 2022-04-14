import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { VscMenu, VscSearch } from "react-icons/vsc";

export const Navbar = () => {
  return (
    <Box width="100wv" backgroundColor="whitesmoke">
      <Box
        display="flex"
        justifyContent="space-between"
        padding="20px"
        alignItems="center"
      >
        <VscMenu fill="black" />
        <Text> 16 de Febrero </Text>
        <VscSearch fill="black" />
      </Box>
    </Box>
  );
};
