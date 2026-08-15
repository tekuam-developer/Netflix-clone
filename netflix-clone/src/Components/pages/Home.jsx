import requests from "../../utils/requests";
import Banner from "../banner/Banner";
import Row1 from "../Rows/Row1";
function Home() {
  return (
    <>
      <Banner />
      <Row1
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row1 title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row1 title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row1 title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
      <Row1 title="Commedy Movie" fetchUrl={requests.fetchComedyMovies} />
      <Row1 title="Documentaris" fetchUrl={requests.fetchDocumentaries} />
      <Row1 title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row1 title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row1 title="TV Shows" fetchUrl={requests.fetchTvShow} />
    </>
  );
}

export default Home;
