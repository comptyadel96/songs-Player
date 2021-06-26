import React from "react"
import PlaylistPlayer from "./pages/PlaylistPlayer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="w-screen h-screen  items-center flex flex-col relative  pb-2 m-0 bg-gradient-to-tr from-black   ">
      <div
        className="w-screen h-72 min-h-72 items-start pt-2 flex  m-0 relative md:mb-5 bg-black"
        style={{
          background: "url(/images/casque.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <Navbar />
      </div>

      <p className=" mix-blend-luminosity absolute top-24  text-2xl   md:top-8 md:right-2 text-white md:text-4xl font-semibold ">
        Compty's player 🎼
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1439 310"
        preserveAspectRatio="true"
        className="absolute bottom-8 w-screen">
        <path
          // fill="rgba(155, 254, 116 ,0.16)"
          fill="rgba(255,255,255,0.2)"
          fillOpacity="1"
          d="M0,160L6.2,160C12.3,160,25,160,37,160C49.2,160,62,160,74,181.3C86.2,203,98,245,111,250.7C123.1,256,135,224,148,224C160,224,172,256,185,229.3C196.9,203,209,117,222,74.7C233.8,32,246,32,258,42.7C270.8,53,283,75,295,112C307.7,149,320,203,332,192C344.6,181,357,107,369,90.7C381.5,75,394,117,406,138.7C418.5,160,431,160,443,181.3C455.4,203,468,245,480,245.3C492.3,245,505,203,517,186.7C529.2,171,542,181,554,160C566.2,139,578,85,591,85.3C603.1,85,615,139,628,160C640,181,652,171,665,154.7C676.9,139,689,117,702,144C713.8,171,726,245,738,229.3C750.8,213,763,107,775,90.7C787.7,75,800,149,812,186.7C824.6,224,837,224,849,218.7C861.5,213,874,203,886,208C898.5,213,911,235,923,208C935.4,181,948,107,960,90.7C972.3,75,985,117,997,128C1009.2,139,1022,117,1034,96C1046.2,75,1058,53,1071,42.7C1083.1,32,1095,32,1108,69.3C1120,107,1132,181,1145,229.3C1156.9,277,1169,299,1182,304C1193.8,309,1206,299,1218,298.7C1230.8,299,1243,309,1255,272C1267.7,235,1280,149,1292,101.3C1304.6,53,1317,43,1329,48C1341.5,53,1354,75,1366,85.3C1378.5,96,1391,96,1403,128C1415.4,160,1428,224,1434,256L1440,288L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path>
      </svg>
      <PlaylistPlayer />
    </div>
  )
}

export default App
