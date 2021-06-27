import React, { useRef } from "react"
import { GrTurbolinux, GrClose, GrGithub } from "react-icons/gr"

function Navbar() {
  const aboutRef = useRef(null)
  const showAboutInfos = () => {
    aboutRef.current.style.width = "60vw"
  }
  const closeInfos = () => {
    aboutRef.current.style.width = "0px"
  }
  return (
    <div className="flex flex-col justify-evenly mr-auto h-full  md:w-full  md:flex md:flex-row md:justify-around md:items-center md:h-12  z-10">
      {/* about */}
      <div className=" mb-auto mt-2 md:mr-auto md:ml-5 md:mb-0 bg-greenglass rounded-lg px-2 py-1">
        <div
          className="flex items-center cursor-pointer hover:text-white"
          onClick={showAboutInfos}>
          <GrTurbolinux size={24} />
          <p className="text-lg font-semibold">About</p>
        </div>
      </div>

      {/* about container */}
      <div
        ref={aboutRef}
        className="w-0 z-9999 overflow-x-hidden absolute h-full left-0  top-0 bg-gradient-to-l from-glass pt-10 transition-all duration-700">
        <GrClose
          className="absolute top-1 right-1 z-10 bg-red-600  cursor-pointer"
          onClick={closeInfos}
        />
        <p className="text-white ml-6 mt-4">
          well, this project is just for fun 😄 Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Minus voluptatem maxime itaque dolor,
          placeat ex beatae voluptates, ab iure enim sit totam labore!
          Consequuntur impedit reprehenderit aspernatur sapiente. Cum, illo?
        </p>
        <div className="mx-auto text-white flex items-center mt-2 w-56">
          <a
            href="https://github.com/comptyadel96"
            target="_blank"
            rel="noreferrer">
            <GrGithub size={32} />
          </a>
          <p className="ml-2"> my github</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
