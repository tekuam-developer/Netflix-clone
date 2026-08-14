import MyAxios from "../../utils/axios";
import { useState, useEffect } from "react";
import requests from "../../utils/requests";
import "./banner.css";
function Banner() {
  const [banner, setBanner] = useState({});
  const [base, setBase] = useState({});

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
  console.log(banner);

  const ControlString = (str, n) => {
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
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
            <button className="play btn btn-primary">Play</button>
            <button className="Mylists btn btn-primary">My Lists</button>
          </div>
          <h1 className="discription">
            {ControlString(banner?.overview, 100)}
          </h1>
        </div>
        <div className="bottom"></div>
      </div>
    </>
  );
}

export default Banner;
