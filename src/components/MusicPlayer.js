import React, { useRef, useState } from "react"
import MusicControllers from "./MusicControllers"
import moment from "moment"
import ProgressBar from "@ramonak/react-progress-bar"
import VolumeSlider from "./VolumeSlider"

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
  const [songBarProgress, setSongBarProgress] = useState(0)
  // const [volume, setVolume] = useState(0)

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
    const barSong =
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    setSongBarProgress(Math.floor(barSong))
  }
  const playAudio = () => audioRef.current.play() // play the song

  const pauseAudio = () => audioRef.current.pause() // pause the song

  // controll the volume of the song
  const handleVolume = (currentVolume) => {
    audioRef.current.volume = currentVolume / 100
  }

  return (
    <div className="max-w-md mx-auto my-2  w-2/3 md:h-auto  xs:w-full  bg-gray-800  flex flex-col items-center justify-between rounded-lg  relative ">
      <img
        alt="artist cover"
        src={photo}
        className="rounded-full w-32 h-32 mt-2 md:w-3/5 md:rounded-lg md:h-full "
      />
      <p className="text-white text-lg font-semibold mt-3 capitalize">
        {artist}
      </p>
      <p className="text-green-400 capitalize text-lg"> {title}</p>

      <p className="text-red-800 text-base">
        {songProgress} / {songDuration}
      </p>

      {/* song progress bar  */}

      <div className=" w-2/3 mt-1 overflow-hidden rounded-lg bg-red-700 ">
        <ProgressBar
          completed={songBarProgress}
          isLabelVisible={false}
          bgColor="crimson"
          height="8px"
          transitionDuration="500"
        />
      </div>

      {/* volume controller */}

      <div className="my-3  absolute left-1 bottom-12   w-10">
        <VolumeSlider onChange={(volume) => handleVolume(volume)} />
      </div>

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
        onError={() =>
          alert("an unexpected error has occured please try again later")
        }>
        your browser dont support mp3 format ...sorry about that .
      </audio>
    </div>
  )
}

export default MusicPlayer
