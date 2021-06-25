import React from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
function VolumeSlider({ onChange }) {
  return (
    <div className="w-16 my-auto mx-auto">
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
      />
    </div>
  )
}

export default VolumeSlider
