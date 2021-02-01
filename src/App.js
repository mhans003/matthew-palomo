//React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Allow for rendering of different pages using React Router.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import pages
import Home from "./pages/Home";
import Covid19 from "./pages/Covid19";

function App() {
  return (
    <Router>
      <Route exact path="/" render={(props) => (<Home {...props} current="home"/>)}/>
      <Route exact path="/home" render={(props) => (<Home {...props} current="home"/>)}/>
      <Route exact path="/covid19" render={(props) => (<Covid19 {...props} current="covid19"/>)}/>
    </Router>
  );
}

export default App;
