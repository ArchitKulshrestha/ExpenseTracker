import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Colormode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button variant={"ghost"} onClick={toggleColorMode}>
      <Icon fontSize={"22"}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </Icon>{" "}
    </Button>
  );
};

export default Colormode;
