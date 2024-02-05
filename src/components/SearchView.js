import Hero from "./Hero";
import { Link } from "react-router-dom";
import generic from "../jon-tyson-A-obUh61bKw-unsplash.jpg";
const NotFound = ({ text }) => {
  const notFoundMess = `Couldn't find ${text}`;
  return (
    <header>
      <Hero text={notFoundMess} />
      <h1>404 NOT FOUND</h1>
    </header>
  );
};
const MovieCard = ({ movie }) => {
  const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailURL = `/movies/${movie.id}`;
  
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xl-3 my-4 ">
      <div className="card" style={{ width: "18rem" }}>
        {posterURL !== "https://image.tmdb.org/t/p/w500null" ? (
          <img
            src={posterURL}
            className="card-img-top"
            alt={movie.original_title}
          />
        ) : (
          <img src={generic} className="card-img-top" alt={"..."} />
        )}

        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>

          <Link to={detailURL} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  let resultsHTML = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <div>
      <Hero text={title} />
      <div className="container">
        <div className="row">
          {resultsHTML.length === 0
            ? (resultsHTML = (
                <h1 className="m-4 text-center">
                  <NotFound />
                </h1>
              ))
            : resultsHTML}
        </div>
      </div>
    </div>
  );
};

export default SearchView;
