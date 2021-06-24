import React, { useRef, useState } from "react"
import MusicControllers from "./MusicControllers"
import moment from "moment"
function MusicPlayer({
  photo,
  artist,
  title,
  audio,
  playNextSong,
  playPreviousSong,
}) {
  const audioRef = useRef(null)
  const [songDuration, setSongDuration] = useState()
  const [songProgress, setSongProgress] = useState("00:00")

  // function to show the total duration of the song
  const handleSongDuration = () => {
    const formated = moment()
      .startOf("day")
      .seconds(audioRef.current.duration)
      .format("mm:ss")
    setSongDuration(formated)
  }
  // show the progress time of the song (when it's playing)
  const handleSongProgress = () => {
    const formated = moment()
      .startOf("day")
      .seconds(audioRef.current.currentTime)
      .format("mm:ss")
    setSongProgress(formated)
  }
  const playAudio = () => audioRef.current.play() // play the song

  const pauseAudio = () => audioRef.current.pause() // pause the song

  return (
    <div className="w-96 h-72  bg-gray-800 mx-auto flex flex-col items-center rounded-lg ">
      <img
        alt="artist cover"
        src={photo}
        className="rounded-full w-28 h-28 mt-2"
      />
      <p className="text-white text-lg font-semibold mt-3 capitalize">
        {artist}
      </p>
      <p className="text-green-400 capitalize"> {title}</p>
      <p className="text-red-800 text-lg">
        {songProgress} / {songDuration}
      </p>
      <MusicControllers
        playNextSong={playNextSong}
        playPreviousSong={playPreviousSong}
        onPause={pauseAudio}
        onPlay={playAudio}
      />
      <audio
        src={audio}
        ref={audioRef}
        onLoadedData={handleSongDuration}
        onTimeUpdate={handleSongProgress}
        onEnded={playNextSong}
      />
    </div>
  )
}

export default MusicPlayer
