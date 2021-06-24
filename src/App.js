import React, { useState } from "react"
import MusicPlayer from "./components/MusicPlayer"

function App() {
  const [songs] = useState([
    {
      id: 1,
      artist: "booba",
      title: "mona lisa",
      photo: "/images/booba.jpg",
      audio: "/music/booba-mona-lisa.mp3",
    },
    {
      id: 2,
      artist: "2pac",
      title: "ambitionz as a ridah",
      photo: "/images/2pac.jpg",
      audio: "/music/2pac-ambitionz-az-a-ridah.mp3",
    },
    {
      id: 3,
      artist: "brennan-savage",
      title: "look at me now",
      photo: "/images/brennan-savage.jpg",
      audio: "/music/brennan-savage-look-at-me-now.mp3",
    },
    {
      id: 4,
      artist: "selena gomez",
      title: "feel good",
      photo: "/images/selena-gomez.jpg",
      audio: "/music/selena-gomez-feel-good.mp3",
    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex] = useState(currentSongIndex)

  const currentSong = songs[currentSongIndex]
  const nextSong = songs[nextSongIndex]

  const getNextSong = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1)
    } else {
      setCurrentSongIndex(0)
    }
  }

  const getPreviousSong = () => {
    currentSongIndex > 0 && setCurrentSongIndex(currentSongIndex - 1)
  }

  return (
    <div className="w-full h-screen items-center flex bg-gradient-to-b from-green-400 via-black to-gray-600 ">
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

export default App
