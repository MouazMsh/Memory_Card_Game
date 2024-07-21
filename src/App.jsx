import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import items from "./lib/data";
import { toast } from "react-toastify";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [newItems, setNewItems] = useState(items);
  const [passedId, setPassedId] = useState([]);

  function handlePassedIdArray(itemId) {
    if (passedId.includes(itemId)) {
      return true;
    } else {
      setPassedId([...passedId, itemId]);
      setScore(score + 1);
    }
  }

  function shuffleItems() {
    setNewItems(
      newItems
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  }

  function handleClick(itemId) {
    if (handlePassedIdArray(itemId)) {
      setScore(0);
      setPassedId([]);
      setBestScore(score > bestScore ? score : bestScore);
      shuffleItems();
    } else {
      shuffleItems();
    }
  }

  useEffect(() => {
    if (score === 12) {
      toast.success("Congratulations! You've nailed the game!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [score]);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        flexWrap={{ xs: "nowrap", sm: "wrap" }}
        justifyContent="center"
        alignItems="center"
        rowGap={3}
        columnGap={2}
        spacing={2}
        mt={2}
      >
        {newItems.map((item) => {
          return (
            <Card className="card" onClick={() => handleClick(item.id)}>
              <CardMedia
                component="img"
                height="300"
                image={item.scr}
                sx={{
                  padding: 1,
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography variant="body1" textAlign="center">
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </>
  );
}
