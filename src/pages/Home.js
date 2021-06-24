import React from "react"
import MusicPlayer from "../components/MusicPlayer"
import songs from "../components/Songs"

function Home() {
  return (
    <div className="bg-blackglass md:w-3/4  rounded-lg shadow-2xl my-auto flex flex-wrap justify-around items-center ">
      {songs.map((song) => (
        <MusicPlayer
          title={song.title}
          artist={song.artist}
          photo={song.photo}
          audio={song.audio}
          showPrevAndNext={false}
          key={song.id}
        />
      ))}
    </div>
  )
}

export default Home
