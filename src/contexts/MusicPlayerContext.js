import React, { useState } from "react";
import Track1 from "../assets/Cam-On-Anh-Hoang-Yen-Chibi.mp3";
import Track2 from "../assets/Hen-Uoc-Tu-Hu-Vo-My-Tam.mp3";
import Track3 from "../assets/Nang-Tho-Hoang-Dung.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Cảm Ơn Anh - Hoàng Yến Chibi",
      file: Track1,
    },
    {
      name: "Hẹn Ước Từ Hư Vô - Mỹ Tâm",
      file: Track2,
    },
    {
      name: "Nàng Thơ - Hoàng Dũng",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
