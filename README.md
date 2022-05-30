Your task is to render the list of recipes, and filter them by cuisine. The filtering should happen in the backend not the frontend.

## Setup

1. Fork and clone this repository.
2. Install Apollo Client and Graphql.
   ```shell
     npm i @apollo/client graphql
   ```

## Steps

### Recipe List

We prepared `RecipeList` and `RecipeCard` components for you.

1. Create a `graphQL` folder and inside it create a file called `queries.ts`.
2. In this file, import gql: `import {gql} from @apollo/client`.
3. Create a new query that will fetch all recipes. What fields do you think we need?
4. Create a new folder called `models`, inside it create two files: `index.ts` and `recipe.ts`.
5. In `models` create an interface for a `Recipe`, and an interface called `Recipes` that has an array for `Recipe`.
6. Export both interfaces and export everything inside it in `index.js`.
