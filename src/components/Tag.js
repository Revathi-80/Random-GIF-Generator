import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  //   const [gif, setGif] = useState("");
  const [tag, setTag] = useState("");
  //   const [loading, setLoading] = useState(false);

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const { data } = await axios.get(url);
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     setLoading(false);
  //   }
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  const { gif, loading, fetchData } = useGif(tag);
  function clickHandler() {
    fetchData(tag);
    console.log("printing");
  }

  return (
    <div
      className=" w-1/2 bg-blue-400 rounded-lg border border-black 
    flex flex-col items-center  mt-[15px] "
    >
      <h1 className="text-3xl uppercase underline font-bold mb-[20px] ">
        Random {tag} Gif
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="gif" width="450" className="mb-[20px]" />
      )}

      <input
        className="w-10/12 bg-lime-100 py-2 rounded-lg text-center mb-[10px]"
        onChange={(event) => {
          setTag(event.target.value);
        }}
        value={tag}
      />

      <button
        className="w-10/12 text-lg bg-lime-100 py-2 rounded-lg mb-[20px] "
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
