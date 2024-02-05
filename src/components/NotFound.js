import Hero from "./Hero";
import {useHistory } from "react-router-dom";
const NotFound = ({ text}) => {
  const history = useHistory();

  history.push("*")
  const notFoundMess = `Couldn't find ${text}`;
  return (
    <header>
      <Hero text={notFoundMess} />
      <h1>404 NOT FOUND</h1>
    </header>
  );
};
export default NotFound;
