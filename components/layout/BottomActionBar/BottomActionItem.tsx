import React from "react";
import { Button } from "@chakra-ui/react";

type BottomActionItemProps = {
  icon: React.ReactNode;
  label: string;
};

export const BottomActionItem = ({ icon, label }: BottomActionItemProps) => {
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
