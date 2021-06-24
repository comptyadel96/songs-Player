import React from "react"
import PlaylistPlayer from "./pages/PlaylistPlayer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
function App() {
  return (
    <Router>
      <div className="w-screen h-screen items-center flex flex-col bg-gradient-to-b from-purple-500 pt-2 ">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/playlistPlayer">
            <PlaylistPlayer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
