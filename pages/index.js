import Head from "next/head";

import { SimpleGrid } from "@chakra-ui/react";

import RecipeCard from "../components/RecipeCard";
import gqlClient from "../graphql/client";
import { GetRecipes } from "../graphql/queries";
import HeroSection from "../components/HeroSection";

export async function getStaticProps() {
  const { recipes } = await gqlClient.request(GetRecipes);

  return {
    revalidate: 300,
    props: {
      receitas: recipes,
    },
  };
}

function Home({ receitas }) {
  return (
    <>
      <Head>
        <title>Página inicial | ReceitasWeb</title>
      </Head>
      <HeroSection
        title={"ReceitasWeb"}
        subtitle={"O seu site de receitas de cozinha"}
        description={
          "Aprenda a fazer receitas de cozinha com receitas de outros cozinheiros e acompanhe as melhores receitas de cozinha do Brasil."
        }
      />
      <SimpleGrid columns={[2, 2, 3, 3, 4]} spacing={4}>
        {receitas.map((receita) => (
          <RecipeCard key={receita.slug} recipe={receita} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Home;
