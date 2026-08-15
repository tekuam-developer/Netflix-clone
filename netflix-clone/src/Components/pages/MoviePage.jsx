import { useEffect, useState, useRef } from "react";
import YouTube from "react-youtube";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
function MoviePage() {
  const [TvshowVideo, setVideo] = useState([]);
  const [banner, setBanner] = useState([]);
  const [trailerUrl, setTrailer] = useState("");
  const trailerRef = useRef(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCCTKQkoq2QGvozo-z8RJ_WQ&q=movie%20trailer&type=video&maxResults=50&key=${API_KEY}`,
        );
        const data = await response.json();
        const myData = data.items;
        setVideo(myData);
        setBanner(myData[Math.floor(Math.random() * myData.length)]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const stringControl = (str, n) => {
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  const playVideo = (video) => {
    if (trailerUrl === video) {
      setTrailer("");
      return;
    }

    setTrailer(video);

    setTimeout(() => {
      trailerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 500);
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
      <div
        className="Banner-Wrapper"
        style={{
          backgroundImage: `url(${banner?.snippet?.thumbnails?.high?.url})`,
        }}
      >
        <div className="text-Content">
          <h1 className="title">{stringControl(banner?.snippet?.title, 20)}</h1>
          <div className="button-wrapper">
            <button
              onClick={() => {
                playVideo(banner?.id?.videoId);
              }}
              className="myButton"
            >
              Play Sodere Movie
            </button>
          </div>
          <p className="discription">
            {stringControl(banner.snippet?.description, 70)}
          </p>
        </div>
      </div>
      <div className="container-fluid tv-wrapper">
        <div className="row align-item-center g-4">
          {trailerUrl && (
            <div ref={trailerRef} className="traile-container">
              <YouTube
                videoId={trailerUrl}
                opts={videoPlaying}
                loading="Loading..."
              />
            </div>
          )}
          {TvshowVideo?.map((singleVideo, i) => {
            var image = singleVideo?.snippet?.thumbnails?.high?.url;
            var videoId = singleVideo?.id?.videoId;
            var title = singleVideo?.snippet?.title;
            var discription = singleVideo?.snippet?.description;

            return (
              <div className="col-6 col-md-3">
                <img
                  onClick={() => playVideo(videoId)}
                  src={image}
                  alt={title}
                  className="posture"
                />
                <h1 className="posture-title">{stringControl(title, 40)}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MoviePage;
