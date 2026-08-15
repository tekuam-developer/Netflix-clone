import MyAxios from "../../utils/axios";
import { useState, useEffect, use } from "react";
import requests from "../../utils/requests";
import "./banner.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
function Banner() {
  const [banner, setBanner] = useState({});
  const [trailerurl, setTrailer] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const request = await MyAxios.get(requests.fetchNetflixOriginals);
        const OneData = request.data.results;
        setBanner(
          OneData[Math.floor(Math.random() * request.data.results.length)],
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const ControlString = (str, n) => {
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  const playVideo = (movie) => {
    if (trailerurl) {
      setTrailer("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          const useparams = new URLSearchParams(new URL(url).search);
          setTrailer(useparams.get("v"));
        },
      );
    }
  };
  const opts = {
    height: 400,
    width: 100,
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div
        className="banner-wraper"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1280${banner?.backdrop_path}')`,
        }}
      >
        <div className="text-content">
          <h1 className="title">
            {banner?.name || banner?.original_name || banner?.title}
          </h1>
          <div className="Banner-button">
            <button
              className="play btn btn-primary"
              onClick={() => {
                playVideo(banner);
              }}
            >
              Play
            </button>
            <button className="Mylists btn btn-primary">My Lists</button>
          </div>
          <h1 className="discription">
            {ControlString(banner?.overview, 100)}
          </h1>
        </div>
        <div className="bottom"></div>
      </div>
      <div className={trailerurl ? "traile-container" : ""}>
        {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
      </div>
    </>
  );
}

export default Banner;
