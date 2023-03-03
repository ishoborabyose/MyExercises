import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="p-[36px]">
      <div className="grid grid-cols-2 gap-[17px] mb-[17px]">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          className="rounded border border-solid border-[#d5d4d8] indent-1"
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          className="rounded border border-solid border-[#d5d4d8] indent-1"
        />
        <button
          className="grid col-span-2 rounded bg-[#672280] text-white border-none cursor-pointer"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative">
        <img
          src={meme.randomImage}
          className="max-w-[100%] mx-auto border-[3px]"
        />
        <h2 className="absolute w-[80%] text-center left-[50%] translate-x-[-50%] my-[15px] px-[5px] text-[2em] uppercase text-white drop-shadow-lg top-0">
          {meme.topText}
        </h2>
        <h2 className="absolute w-[80%] text-center left-[50%] translate-x-[-50%] my-[15px] px-[5px] text-[2em] uppercase text-white drop-shadow-lg  bottom-0">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}
