import React, { useState } from "react"
import MusicPlayer from "../components/MusicPlayer"
import songs from "../components/Songs"

function PlaylistPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const currentSong = songs[currentSongIndex]

  // function that fire once the user click the forward icon of the music player
  const getNextSong = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1)
    } else {
      setCurrentSongIndex(0)
    }
  }
  // function fire when user click the player's backward icon
  const getPreviousSong = () => {
    currentSongIndex > 0
      ? setCurrentSongIndex(currentSongIndex - 1)
      : setCurrentSongIndex(songs.length - 1)
  }
  return (
    <div className="z-10 mt-5 mx-3  bg-gradient-to-b from-greenglass to-black border-none p-8 rounded-lg ">
      <MusicPlayer
        title={currentSong.title}
        artist={currentSong.artist}
        photo={currentSong.photo}
        key={currentSong.id}
        audio={currentSong.audio}
        playNextSong={getNextSong}
        playPreviousSong={getPreviousSong}
      />
    </div>
  )
}

export default PlaylistPlayer
