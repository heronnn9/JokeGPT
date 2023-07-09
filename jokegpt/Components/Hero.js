"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const jokes = [
  "<h2>Why don't scientists trust atoms?</h2><br><p>Because they make up everything!</p>",
  "<h2>Why don't skeletons fight each other?</h2><br><p>They don't have the guts!</p>",
  "<h2>Why don't oysters donate to charity?</h2><br><p>Because they are shellfish!</p>",
  "<h2>Why did the scarecrow win an award?</h2><br><p>Because he was outstanding in his field!</p>",
  "<h2>Why couldn't the bicycle stand up by itself?</h2><br><p>It was two-tired!</p>",
  "<h2>What's the best way to organize a space party?</h2><br><p>Planet it!</p>",
  "<h2>Why don't eggs tell jokes?</h2><br><p>Because they might crack up!</p>",
  "<h2>How do you organize a fantastic space party?</h2><br><p>You planet!</p>",
  "<h2>Why did the tomato turn red?</h2><br><p>Because it saw the salad dressing!</p>",
  "<h2>What do you call a snowman with a six-pack?</h2><br><p>An abdominal snowman!</p>",
];
const Hero = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    regenerate();
  }, []);

  const regenerate = () => {
    const ind = [Math.floor(Math.random() * (jokes.length - 1 + 1) + 1)];
    setJoke(jokes[ind]);
  };

  return (
    <div className=" min-h-screen mx-auto max-w-7xl ">
      <div className="flex justify-center align-center items-center h-screen text-4xl">
        {joke}
        <button
          onClick={regenerate}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Regenerate
        </button>
      </div>
    </div>
  );
};

export default Hero;
