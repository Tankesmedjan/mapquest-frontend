import './App.css';
import GoogleMap from "./components/GoogleMap";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      <h1 className="maps-header">MapQuest</h1>
      <LandingPage />
        <h1>MapQuest</h1>
      <GoogleMap />
    </div>
  );
}

export default App;
