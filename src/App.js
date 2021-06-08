import './App.css';
import GoogleMap from "./components/GoogleMap";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import PurchaseAccess from "./components/PurchaseAccess";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ScanQR from "./components/ScanQR";
import Dashboard from "./components/Dashboard";
import ChooseStory from "./components/ChooseStory";
import ManageTeams from "./components/ManageTeams";
import CreateTeam from "./components/CreateTeam";
import Scoreboard from "./components/Scoreboard";
import HamburgerMenu from "./components/HamburgerMenu";
import GameArea from "./components/GameArea";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import appInfo from '../package.json';
import build from './metadata.json';
import Contact from "./components/Contact";
import AdminStories from "./components/AdminStories";
import AdminMission from "./components/AdminMission";
import {About} from "./components/About";
import {Information} from "./components/Information";
import PlacePins from "./components/PlacePins";
import {GenerateQR} from "./components/GenerateQR";

function App() {
  return (
    <div className="App">
      <title>MapQuest {appInfo.version}.{build.build} </title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <HamburgerMenu />
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/googlemap" component={GoogleMap} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/purchaseaccess" component={PurchaseAccess} />
            <Route exact path="/qrscanner" component={ScanQR} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/choosestory" component={ChooseStory} />
            <Route exact path="/manageteams" component={ManageTeams} />
            <Route exact path="/createteam" component={CreateTeam} />
            <Route exact path="/scoreboard" component={Scoreboard} />
            <Route exact path="/gamearea" component={GameArea} />
            <Route exact path="/missionpins" component={PlacePins} />
            <Route exact path="/admin" component={AdminLogin} />
            <Route exact path="/admin/dashboard" component={AdminDashboard} />
            <Route exact path="/admin/stories" component={AdminStories} />
            <Route exact path="/admin/mission" component={AdminMission} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/information" component={Information} />
            <Route exact path="/qrcode" component={GenerateQR} />

        </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
