import { Card, CardActions, CardContent, Typography } from "@mui/material";

export default function RecipeCard() {
  return (
    <Card sx={{ width: "20%", m: 6 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Add recipe name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Add recipe steps
        </Typography>
      </CardContent>
      <CardActions>ADD INGREDIENTS</CardActions>
    </Card>
  );
}
