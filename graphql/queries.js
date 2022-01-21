import { gql } from "graphql-request";

export const GetRecipes = gql`
  query GetRecipes {
    recipes {
      slug
      name
      description
      photo {
        url
        fileName
        width
        height
      }
    }
  }
`

export const GetRecipeBySlug = gql`
  query GetRecipeBySlug($slug: String!) {
    recipe(where: {slug: $slug}) {
      name
      description
      category {
        name
        slug
      }
      photo {
        url
        fileName
        width
        height
      }
      ingredients {
        html
      }
      preparation {
        html
      }
    }
  }
`

export const GetCategoryBySlug = gql`
  query GetCategoryBySlug($slug: String!) {
    category(where: {slug: $slug}) {
      name
      slug
      recipes {
        slug
        name
        description
        photo {
          url
          fileName
          width
          height
        }
      }
    }
  }
`

export const GetCategoriesMenu = gql`
  query GetCategoriesMenu {
    categories(where: {showOnMenu: true}) {
      name
      slug
    }
  }
`