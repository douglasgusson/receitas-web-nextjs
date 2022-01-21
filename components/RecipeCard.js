import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";

function RecipeCard({ recipe }) {
  return (
    <Link key={recipe.slug} href={`/receitas/${recipe.slug}`}>
      <a>
        <Box
          maxW="sm"
          minH="280px"
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
          transition="all 0.3s"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "md",
          }}
        >
          <Image src={recipe.photo.url} alt={recipe.name} />

          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              textTransform="uppercase"
              isTruncated
            >
              {recipe.name}
            </Box>

            <Box
              color="gray.400"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
            >
              {recipe.description}
            </Box>
          </Box>
        </Box>
      </a>
    </Link>
  );
}

export default RecipeCard;
