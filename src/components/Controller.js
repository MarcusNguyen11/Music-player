import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import "./styles.css";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PauseIcon from "@mui/icons-material/Pause";

const Controller = () => {
  const { togglePlay, playNextTrack, playPreviousTrack, isPlaying } =
    useMusicPlayer();
  return (
    <Stack className="controller" direction="row" spacing={2}>
      <Button variant="outlined">
        <SkipPreviousIcon onClick={playPreviousTrack} />
      </Button>
      {isPlaying ? (
        <Button variant="outlined" onClick={togglePlay}>
          <PauseIcon />
        </Button>
      ) : (
        <Button variant="outlined" onClick={togglePlay}>
          <PlayArrowIcon />
        </Button>
      )}
      <Button variant="outlined" onClick={playNextTrack}>
        <SkipNextIcon />
      </Button>
    </Stack>
  );
};
export default Controller;
