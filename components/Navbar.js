import { Box, Flex, Link, useColorModeValue, Text } from "@chakra-ui/react";
import ThemeSwitcher from "./ThemeSwitcher";

const NavLink = ({ children, href }) => (
  <Link
    px={2}
    py={2}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href ?? "#"}
  >
    {children}
  </Link>
);

function Navbar() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <NavLink href="/">
            <Text
              as="span"
              bgGradient={useColorModeValue(
                "linear(to-l, #FF0080, #7928CA)",
                "linear(to-l, #7928CA, #FF0080)"
              )}
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              px={4}
            >
              ReceitasWeb
            </Text>
          </NavLink>

          <Flex alignItems={"center"}>
            <ThemeSwitcher />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
