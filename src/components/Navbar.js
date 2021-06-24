import React, { useRef } from "react"
import { NavLink } from "react-router-dom"
import {
  GrDxc,
  GrTurbolinux,
  GrAssistListening,
  GrClose,
  GrGithub,
} from "react-icons/gr"

function Navbar() {
  const aboutRef = useRef(null)
  const showAboutInfos = () => {
    aboutRef.current.style.width = "60vw"
  }
  const closeInfos = () => {
    aboutRef.current.style.width = "0px"
  }
  return (
    <div className="w-full  flex justify-around items-center">
      <div className="mr-auto ml-5 flex  justify-around bg-glass2 rounded-lg py-1 px-2 w-64 ">
        <NavLink exact to="/" className="text-lg font-semibold  ">
          <div className="flex items-center">
            <GrDxc size={24} />
            <p className="ml-1 hover:text-red-100 ">Home </p>
          </div>
        </NavLink>

        <NavLink
          to="/playlistPlayer"
          className="text-lg font-semibold hover:text-red-100 ">
          <div className="flex items-center ">
            <GrAssistListening size={24} /> <p className="ml-1">Playlist </p>
          </div>
        </NavLink>
      </div>

      <div className="ml-auto mr-5 bg-glass2 rounded-lg px-2 py-1">
        <div
          className="flex items-center cursor-pointer hover:text-red-100"
          onClick={showAboutInfos}>
          <GrTurbolinux size={24} />
          <p className="text-lg font-semibold">About</p>
        </div>
      </div>
      <div
        ref={aboutRef}
        className="w-0 overflow-x-hidden absolute left-0 h-full top-0 bg-black pt-10 transition-all duration-700">
        <GrClose
          className="absolute top-1 right-1 z-10 bg-red-600  cursor-pointer"
          onClick={closeInfos}
        />
        <p className="text-3xl text-purple-500 text-center">infos</p>
        <p className="text-white ml-6 mt-4">
          well, this project is just for fun feel free to take it and use it for
          you own buisness or make it more interesting ....(add a backend with
          payment method/add animations etc ){" "}
        </p>
        <div className="mx-auto text-white flex items-center  w-56">
          <a
            href="https://github.com/comptyadel96"
            target="_blank"
            rel="noreferrer">
            <GrGithub size={32} />
          </a>
          <p className="ml-2" > my github</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
