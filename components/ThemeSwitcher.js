import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Mudar tema do site"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      title={
        colorMode === "light"
          ? "Mudar para o tema escuro"
          : "Mudar para o tema claro"
      }
      mx={1}
    />
  );
}

export default ThemeSwitcher;
