function tick() {
  document.getElementById('digital-clockface').innerHTML = String((new Date()).toString().slice(16, 21))
  setTimeout(
    tick,
    1000
  )
}

tick()