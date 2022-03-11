import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { AxiosError } from "axios";
import services from "../../services";
// @ts-ignore
import movieTrailer from "movie-trailer";
import YouTube, { YouTubeProps } from "react-youtube";

interface IMovie extends YouTubeProps {
  title: string;
  name: string;
  originalName: string;
  overview: string;
  backdropPath: string;
}

export const Banner = () => {
  const [movie, setMovie] = useState<IMovie>();
  const [trailerurl, setTrailerurl] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(services.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const truncate = (str: any, n: any) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handleClick = movie => {
    if (trailerurl) {
      setTrailerurl("");
    } else {
      movieTrailer(movie.name || "")
        .then((url: string) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          //@ts-ignore
          setTrailerurl(urlParams.get("v"));
        })
        .catch(e => console.log(e as AxiosError["message"]));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div>
      <header
        className='banner'
        onClick={() => setTrailerurl("")}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
               "https://image.tmdb.org/t/p/original/${movie?.backdropPath}"
           )`,
          backgroundPosition: "center-center"
        }}
      >
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie?.title || movie?.name || movie?.originalName}
          </h1>
          <div className='banner__buttons'>
            <button
              onClick={() => handleClick(movie)}
              className='banner__button'
            >
              Play
            </button>
            <button className='banner__button'>My List</button>
          </div>
          <h1 className='banner__description'>
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        <div className='banner--fadeBottom' />
      </header>

      {trailerurl && (
        <YouTube videoId={trailerurl} opts={{ height: "390", width: "100%" }} />
      )}
    </div>
  );
};
