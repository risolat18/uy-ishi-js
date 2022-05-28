const stopWatchHour = document.querySelector('.stopwatch__hours'),
stopWatchMin = document.querySelector('.stopwatch__minutes'),
stopWatchSec = document.querySelector('.stopwatch__seconds'),
stopWatchBtn = document.querySelectorAll('.stopwatch__btn'),
stopWatchSpan = document.querySelector('.tabsLink__span')
for (let i = 0; i < stopWatchBtn.length; i++) {
  const stopWatchBtns = stopWatchBtn[i];
  stopWatchBtns.addEventListener('click', function () {
    if (this.innerHTML == 'start') {
      stopWatchSpan.classList.add('active')
      interval = setInterval(() => {
        stopWatch()
      }, 1000);
      
      
    }else if (this.innerHTML == 'clear') {
      stopWatchBtn.innerHTML = 'clear'
      stopWatchSpan.classList.remove('active')
      stopWatchSpan.classList.add('active_clear')
      clearInterval(interval)
      
    }else if (this.innerHTML == 'stop') {
      stopWatchBtn.innerHTML = 'stop'
      stopWatchSpan.classList.remove('active_clear')
      stopWatchSec.innerHTML = 0
      stopWatchMin.innerHTML = 0
      stopWatchHour.innerHTML = 0
      hisob = 0
    }
  })
}
let hisob = 0
function stopWatch() {
  hisob++
  if (hisob <= 59) {
    stopWatchSec.innerHTML = hisob
  }else if (hisob > 59) {
    hisob = 0
    stopWatchSec.innerHTML = hisob
    stopWatchMin.innerHTML++
  }
  if (stopWatchMin.innerHTML > 59) {
    stopWatchMin.innerHTML = 0 
    stopWatchHour.innerHTML++
  }
}
