import React, { useState } from "react"
import {
  AiFillFastBackward,
  AiFillFastForward,
  AiFillCaretRight,
} from "react-icons/ai"
import { BiPauseCircle } from "react-icons/bi"

function MusicControllers({
  playNextSong,
  playPreviousSong,
  onPlay,
  onPause,
  showPrevAndNext = true,
}) {
  const [paused, setPaused] = useState(false)
  const iconsStyle = {
    color: "white",
    size: 32,
  }

  const toggleIcon = () => {
    setPaused(!paused)
  }

  return (
    <div className="w-72 mt-3  h-9 flex justify-between items-center px-3">
      {showPrevAndNext && (
        <AiFillFastBackward
          style={iconsStyle}
          size={26}
          className="hover:bg-glass rounded-full w-8"
          onClick={playPreviousSong}
        />
      )}

      {showPrevAndNext && (
        <div onClick={toggleIcon}>
          {!paused ? (
            <AiFillCaretRight
              style={iconsStyle}
              size={28}
              onClick={onPlay}
              className="hover:bg-glass rounded-full w-8 h-8"
            />
          ) : (
            <BiPauseCircle
              style={iconsStyle}
              size={48}
              onClick={onPause}
              className="hover:bg-glass rounded-full w-8 h-8 "
            />
          )}
        </div>
      )}

      {showPrevAndNext && (
        <AiFillFastForward
          style={iconsStyle}
          size={26}
          className="hover:bg-glass rounded-full w-8"
          onClick={playNextSong}
        />
      )}
    </div>
  )
}

export default MusicControllers
