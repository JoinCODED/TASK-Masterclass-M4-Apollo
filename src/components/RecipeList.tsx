import { Box, Container } from "@mui/material";
import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  return (
    <Container>
      <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </Box>
    </Container>
  );
}
