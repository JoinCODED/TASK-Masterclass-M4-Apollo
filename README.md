Your task is to render the list of recipes, and filter them by cuisine. The filtering should happen in the backend not the frontend.

## Setup

1. Fork and clone this repository.
2. Install Apollo Client and Graphql.
   ```shell
     npm i @apollo/client graphql
   ```
3. In `index.js`, import the following: `import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"`;
4. Create an instance of `ApolloClient` called `client`, pass it an object. The first property is `uri`, pass it your API. The second property is `cache`, pass it an instance of `InMemoryCache`.
5. Wrap your `App` component with `ApolloProvider`, and pass it `client` as a prop.

## Steps

### Recipe List

We prepared `RecipeList` and `RecipeCard` components for you.

1. Create a `graphQL` folder and inside it create a file called `queries.ts`.
2. In this file, import gql: `import {gql} from @apollo/client`.
3. Create a new query that will fetch all recipes. What fields do you think we need?
4. Create a new folder called `models`, inside it create two files: `index.ts` and `recipe.ts`.
5. In `models` create an interface for a `Recipe`, and an interface called `Recipes` that has an array for `Recipe`.
6. Export both interfaces and export everything inside it in `index.ts`.
7. In recipe list call your recipes query and map your data.
8. Don't forget to add conditions for the loading and error.

### Cuisine List

1. In `queries.ts`, create a new query that will fetch all cuisines. What fields do you think we need?
2. Render a dropdown list that has a list of all the cuisines.
3. When clicking on one of the cuisines, the get recipes query should be triggered again to only fetch the recipes from the category.
