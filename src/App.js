import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import Controller  from "./components/Controller";
import TrackList from "../src/components/Tracklist";
import "./styles.css"

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <div className="music-player">
        <TrackList />
        <Controller />
        </div>
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
