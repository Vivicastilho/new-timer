import Controls from "./controls.js";
import Timer from "./timer.js";
import { elements } from "./elements.js";
import Sounds from "./sounds.js";

const sound = Sounds() 

const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} = elements

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,  
  resetControls: controls.reset
  
  })

buttonPlay.addEventListener('click', function() { 
  controls.play()
  timer.countdown()
  sound.pressButton()
})
  
buttonPause.addEventListener('click', function() {
 controls.pause()
 timer.hold()
 sound.pressButton()
  
})

buttonStop.addEventListener('click', function() {
  controls.reset() 
  timer.reset()  
  sound.pressButton()
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  sound.bgAudio.play()
})
buttonSoundOn.addEventListener('click', function () {
  buttonSoundOff.classList.remove('hide')
  buttonSoundOn.classList.add('hide')  
  sound.bgAudio.pause()
})

buttonSet.addEventListener('click', function() {
  let newMinutes = prompt('Quantos minutos?') 
  if (!newMinutes) {
    return
  }
 
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

