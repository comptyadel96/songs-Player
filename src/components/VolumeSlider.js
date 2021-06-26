import React from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import { BsFillVolumeUpFill } from "react-icons/bs"

function VolumeSlider({ onChange }) {
  return (
    <div className="w-5 h-32 flex flex-col items-center p-3 justify-evenly   ">
      <Slider
        onChange={onChange}
        railStyle={{ backgroundColor: "grey" }}
        trackStyle={{
          backgroundColor: "rgba(155, 254, 116 ,0.9)",
          height: "5px",
        }}
        handleStyle={{
          backgroundColor: "black",
          border: "none",
          cursor: "grab",
        }}
        defaultValue={100}
        vertical
      />
      <BsFillVolumeUpFill size={36} className="mt-3 text-greenglass" />
    </div>
  )
}

export default VolumeSlider
