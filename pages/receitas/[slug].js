import { Box } from "@chakra-ui/react";
import Head from "next/head";
import HeroSection from "../../components/HeroSection";

import gqlClient from "../../graphql/client";
import { GetRecipeBySlug, GetRecipes } from "../../graphql/queries";

export async function getStaticPaths() {
  const { recipes } = await gqlClient.request(GetRecipes);

  const paths = recipes.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { recipe } = await gqlClient.request(GetRecipeBySlug, {
    slug: params.slug,
  });

  if (!recipe) return { notFound: true };

  return {
    revalidate: 300,
    props: {
      recipe,
    },
  };
}

function Receita({ recipe }) {
  return (
    <>
      <Head>
        <title>{recipe?.name} | ReceitasWeb</title>
      </Head>
      <HeroSection title={recipe?.name} subtitle={recipe?.description} />
      <Box
        py={4}
        dangerouslySetInnerHTML={{ __html: recipe?.ingredients.html }}
      />
      <Box
        py={4}
        dangerouslySetInnerHTML={{ __html: recipe?.preparation.html }}
      />
    </>
  );
}

export default Receita;
