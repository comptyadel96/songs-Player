import React, { useRef } from "react"
import MusicPlayer from "../components/MusicPlayer"
import songs from "../components/Songs"

function Home() {
  const genreRef = useRef(null)

  return (
    <div className=" mb-5 mt-5 md:w-3/4  rounded-lg shadow-2xl my-auto flex flex-wrap justify-around items-center relative pt-4">
      {songs.map((song) => (
        <MusicPlayer
          title={song.title}
          artist={song.artist}
          photo={song.photo}
          audio={song.audio}
          showPrevAndNext={false}
          key={song.id}
          showProgressBar={false}
        />
      ))}
    </div>
  )
}

export default Home
