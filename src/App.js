//React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Allow for rendering of different pages using React Router.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" render={(props) => (<Home {...props} current="home"/>)}/>
      <Route exact path="/home" render={(props) => (<Home {...props} current="home"/>)}/>
    </Router>
  );
}

export default App;
