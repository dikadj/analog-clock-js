import React from "react"
import Helmet from "react-helmet"
import $ from "jquery"
import "./App.scss"

const App = () => (
  <div>
    <Helmet>
      <title>Clock JS</title>
    </Helmet>

    <div id="clock">
      <div id="frame">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <title>frame</title>
          <g>
            <g>
              <circle class="frame-cls-1" cx="100" cy="100" r="99"/>
              <circle class="frame-cls-2" cx="190" cy="100" r="1.5"/>
              <circle class="frame-cls-2" cx="100" cy="100" r="5"/>
              <circle class="frame-cls-2" cx="10" cy="100" r="1.5"/>
              <circle class="frame-cls-2" cx="100" cy="10" r="1.5"/>
              <circle class="frame-cls-2" cx="100" cy="190" r="1.5"/>
            </g>
          </g>
        </svg>
      </div>
      <div id="min-hand">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <title>minute hand</title>
          <g>
            <g>
              <circle class="min-hand-cls-1" cx="100" cy="100" r="100"/>
              <polygon class="min-hand-cls-2" points="100 100 95 70 100 10 105 70 100 100"/>
            </g>
          </g>
        </svg>
      </div>
      <div id="hour-hand">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <title>hour hand</title>
          <g>
            <g>
              <circle class="hour-hand-cls-1" cx="100" cy="100" r="100"/>
              <polygon class="hour-hand-cls-2" points="100 100 105 80 100 30 95 80 100 100"/>
            </g>
          </g>
        </svg>
      </div>
      <div id="sec-hand">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <title>second hand</title>
          <g>
            <g>
              <circle class="sec-hand-cls-1" cx="100" cy="100" r="100"/>
              <line class="sec-hand-cls-2" x1="100" y1="10" x2="100" y2="100"/>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
)

const runClock = () => {
  const date = new Date()

  const sec = date.getSeconds()
  const min = date.getMinutes()
  const hour = date.getHours()

  const minToSec = min*60
  const hourToSec = hour*3600

  const totSecPerMin = 60
  const totSecPerHour = 60*60
  const totSecPerDay = 24*60*60

  const minHand = Math.round(((sec+minToSec)/totSecPerHour)*360)
  const hourHand = Math.round(((sec+minToSec+hourToSec)/totSecPerDay)*720)
  const secHand = Math.round((sec/totSecPerMin)*360)

  $("#sec-hand").css({ transform: `rotate(${secHand}deg)`})
  $("#min-hand").css({ transform: `rotate(${minHand}deg)`})
  $("#hour-hand").css({ transform: `rotate(${hourHand}deg)`})
}

setInterval(runClock, 1000)

export default App
