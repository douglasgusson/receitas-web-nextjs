import { Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

function HeroSection({ title, subtitle, description }) {
  const descriptionColor = useColorModeValue("gray.700", "gray.300");
  return (
    <>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          as={"h1"}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl" }}
        >
          <Text
            d="block"
            as="span"
            fontSize={{ base: "4xl", sm: "5xl" }}
            mb={4}
            color={"pink.400"}
          >
            {title}
          </Text>
          <Text as={"span"}>{subtitle}</Text>
        </Heading>
        {description && <Text color={descriptionColor}>{description}</Text>}
      </Stack>
    </>
  );
}

export default HeroSection;
