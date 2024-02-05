import "./App.css";

import Navbar from "./components/Navbar";
// tmdb api key: 6716401c690e5607610f4400feddf42e

//route 'https://api.themoviedb.org/3/search/movie?api_key=6716401c690e5607610f4400feddf42e&query=star%20wars&include_adult=false&language=en-US&page=1'
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieView from "./components/MovieView";
import NotFound from "./components/NotFound";

function App() {
  //useState => this.state
  const [searchResults, setSearchResults] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [inputText, setInputText] = useState('');
  

  useEffect(() => {
    console.log(searchText, " is the search text");
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=6716401c690e5607610f4400feddf42e&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.films);
          
          if(data===undefined){
            setSearchResults(data)
          }
          else{
            setSearchResults(data.results);
          }
        });
    }
    
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} inputText={inputText} setInputText={setInputText}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <AboutView />
        </Route>
        <Route path="/search" exact>
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route path="*" keyword= {searchText} component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
