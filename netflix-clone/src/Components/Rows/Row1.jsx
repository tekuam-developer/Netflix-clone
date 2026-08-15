import { useState, useEffect } from "react";
import MyAxios from "../../utils/axios";
import "./row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row1({ title, fetchUrl, isLarge }) {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState("");

  const image_Base_url = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    (async () => {
      try {
        await MyAxios.get(fetchUrl).then((res) => {
          setMovie(res.data.results);
        });
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const openVideo = (movies) => {
    if (trailer) {
      setTrailer("");
      return;
    } else {
      movieTrailer(movies?.title || movies?.name || movies?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailer(urlParams.get("v"));
        },
      );
    }
  };
  const videoPlaying = {
    height: "500",
    width: "100",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <h1 className="titles">{title}</h1>
      <div className="container-fluid row-wrapper">
        <div className="my-row">
          {movie?.map((SingleVideo, i) => {
            var postur = SingleVideo.poster_path;
            return (
              <div
                className={`posture ${isLarge ? "col-3" : "col-2"}`}
                key={SingleVideo.id}
              >
                <img
                  onClick={() => openVideo(SingleVideo)}
                  src={image_Base_url + postur}
                  alt={SingleVideo.name}
                  className="posture-image"
                />
              </div>
            );
          })}
        </div>
        {trailer && (
          <div className={trailer ? "traile-container" : ""}>
            {trailer && (
              <YouTube
                videoId={trailer}
                opts={videoPlaying}
                loading="Loading..."
                onReady={(Event) => {
                  Event.target.openVideo(movie);
                }}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Row1;
