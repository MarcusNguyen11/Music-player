import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import "./styles.css";
import HeadsetIcon from "@mui/icons-material/Headset";
import PauseIcon from "@mui/icons-material/Pause";
const TrackList = () => {
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying,
    currentTrackIndex,
  } = useMusicPlayer();
  return (
    <>
      <div className="display-title">
        <marquee className="name-song">{currentTrackName}</marquee>
      </div>
      <div className="list-song">
        {trackList.map((track, index) => (
          // ( Surprise us with your code here)
          <div className="btn-song-list" key={index}>
            <button
              className="btn-song"
              variant="contained"
              disableElevation
              onClick={() => playTrack(index)}
            >
              {isPlaying && currentTrackIndex === index ? (
                <div className="song-title">
                  <span>
                    <PauseIcon />
                  </span>
                  <p className="track-name">{track.name}</p>
                </div>
              ) : (
                <div className="song-title">
                  <span>
                    <HeadsetIcon />
                  </span>
                  <p className="track-name">{track.name}</p>
                </div>
              )}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default TrackList;
