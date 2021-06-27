import React, { useState } from "react"
import {
  AiFillFastBackward,
  AiFillFastForward,
  AiFillCaretRight,
} from "react-icons/ai"
import { BiPauseCircle } from "react-icons/bi"

function MusicControllers({ playNextSong, playPreviousSong, onPlay, onPause }) {
  const [paused, setPaused] = useState(false)
  const iconsStyle = {
    color: "white",
    margin: "0 2px",
  }

  const toggleIcon = () => {
    setPaused(!paused)
  }

  return (
    <div className=" mt-3 w-full flex justify-between items-center px-3  ">
      <AiFillFastBackward
        style={iconsStyle}
        size={26}
        className="hover:bg-glass rounded-full w-8"
        onClick={playPreviousSong}
      />

      <div onClick={toggleIcon}>
        {!paused ? (
          <AiFillCaretRight
            style={iconsStyle}
            onClick={onPlay}
            className="hover:bg-glass rounded-full w-8 h-8"
          />
        ) : (
          <BiPauseCircle
            style={iconsStyle}
            onClick={onPause}
            className="hover:bg-glass rounded-full w-8 h-8 "
          />
        )}
      </div>

      <AiFillFastForward
        style={iconsStyle}
        size={26}
        className="hover:bg-glass rounded-full w-8"
        onClick={playNextSong}
      />
    </div>
  )
}

export default MusicControllers
