import { Box } from "@chakra-ui/layout";
import { VscAdd } from "react-icons/vsc";
import { BottomActionItem } from "./layout/BottomActionBar/BottomActionItem";
const icons = [{ icon: <VscAdd fill="white" />, label: "Agregar reserva" }];

export const BottomBar = () => {
  return (
    <Box width="100%" backgroundColor="whitesmoke" position="fixed" bottom="0">
      <Box
        display="flex"
        justifyContent="center"
        padding="20px"
        alignItems="center"
      >
        {icons.map((icon) => (
          <BottomActionItem key={`botton-bar-${icon.label}`} {...icon} />
        ))}
      </Box>
    </Box>
  );
};
