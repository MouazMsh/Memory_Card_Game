import { Typography, Box } from "@mui/material";

export default function Header({ score, bestScore }) {
  return (
    <Box display={"flex"} justifyContent="space-between" color={"#b8860b"}>
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems={"flex-start"}
        ml={1}
      >
        <Typography f variant="h3" mt={2}>
          Gumball Memory Game
        </Typography>
        <Typography variant="body1" mt={5}>
          Get points by clicking on an image but don't click on any more than
          once!
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        mr={1}
      >
        <Typography variant="body1">Score: {score}</Typography>
        <Typography variant="body1">Best score: {bestScore}</Typography>
      </Box>
    </Box>
  );
}
