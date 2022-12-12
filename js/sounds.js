export default function () {

  const buttonPressAudio = new Audio("https://github.com/Vivicastilho/music-timer/blob/main/audios_timer/audios_button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/Vivicastilho/music-timer/blob/main/audios_timer/audios-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/Vivicastilho/music-timer/blob/main/audios_timer/audios-background.mp3?raw=true")

  bgAudio.loop = true

  function pressButton () {
    buttonPressAudio.play()
  }
  function timeEnd () {
    kitchenTimer.play()
  }  

  return {
    pressButton,
    timeEnd,
    bgAudio
  }
}