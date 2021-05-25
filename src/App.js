import './App.css';
import GoogleMap from "./components/GoogleMap";
import LandingPage from "./components/LandingPage";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/googlemap" component={GoogleMap} />
        </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
