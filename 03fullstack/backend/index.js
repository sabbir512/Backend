import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//get a list of 8 jokes

app.get("/api/jokes", (req, res) => {
  const programmingJokes = [
    {
      id: 1,
      title: "Dark Mode Preference",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "Java Developer Glasses",
      content: "Why do Java developers wear glasses? Because they can't C#.",
    },
    {
      id: 3,
      title: "Light Bulb Change",
      content:
        "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    },
    {
      id: 4,
      title: "Python Programmer Self-Esteem",
      content:
        "Why do Python programmers have low self-esteem? Because they're constantly comparing their self to others.",
    },
    {
      id: 5,
      title: "Finnish Programmer",
      content: "What do you call a programmer from Finland? Nerdic.",
    },
    {
      id: 6,
      title: "Sad JavaScript Developer",
      content:
        "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
    },
    {
      id: 7,
      title: "Computer Lifeguard",
      content:
        "What do you get when you cross a computer and a lifeguard? A screensaver!",
    },
    {
      id: 8,
      title: "Nature and Programmers",
      content: "Why do programmers hate nature? It has too many bugs.",
    },
  ];

  res.send(programmingJokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
