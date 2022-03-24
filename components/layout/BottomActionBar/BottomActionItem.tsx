import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

type BottomActionItemProps = {
  icon: React.ReactNode;
  label: string;
  styles?: React.CSSProperties;
};

export const BottomActionItem = ({
  styles,
  icon,
  label,
}: BottomActionItemProps) => {
  return (
      <Button
        width="50px"
        height="50px"
        backgroundColor="whatsapp.500"
        borderRadius="50%"
        title={label}
        padding="0"
      >
        {icon}
      </Button>
  );
};
