import './style.scss'

var now, nowYear, nowMonth, nowDate, nowHour, nowMin, nowSec,
  month10, month1, day10, day1, hour10, hour1, min10, min1, sec10, sec1, timer, nowWeek;

function _clock() {
  document.querySelectorAll('.clock').forEach(el => {
    el.innerHTML =
      '<div class="bg">' +
      '<span class="s1"></span>' +
      '<span class="s2"></span>' +
      '<span class="s3"></span>' +
      '<span class="s4"></span>' +
      '<span class="s5"></span>' +
      '<span class="s6"></span>' +
      '<span class="s7"></span>' +
      '</div>' +
      '<div class="show-time">' +
      '<span class="s1"></span>' +
      '<span class="s2"></span>' +
      '<span class="s3"></span>' +
      '<span class="s4"></span>' +
      '<span class="s5"></span>' +
      '<span class="s6"></span>' +
      '<span class="s7"></span>' +
      '</div>'
  })

  document.querySelectorAll('.clock-dot').forEach(el => {
    el.innerHTML =
      '<div class="dot1"></div>' +
      '<div class="dot1-bg"></div>' +
      '<div class="dot2"></div>' +
      '<div class="dot2-bg"></div>'
  })
}

function setTime() {
  document.querySelector('.sec1 .show-time').classList.remove('clock-' + sec1)
  document.querySelector('.sec10 .show-time').classList.remove('clock-' + sec10)
  document.querySelector('.min1 .show-time').classList.remove('clock-' + min1)
  document.querySelector('.min10 .show-time').classList.remove('clock-' + min10)
  document.querySelector('.hour1 .show-time').classList.remove('clock-' + hour1)
  document.querySelector('.hour10 .show-time').classList.remove('clock-' + hour10)

  now = new Date()
  nowYear = now.getFullYear()
  nowMonth = now.getMonth() + 1
  nowDate = now.getDate()
  nowHour = now.getHours()
  nowMin = now.getMinutes()
  nowSec = now.getSeconds()
  sec10 = Math.floor(nowSec / 10)
  sec1 = nowSec % 10;
  min10 = Math.floor(nowMin / 10)
  min1 = nowMin % 10
  hour10 = Math.floor(nowHour / 10)
  hour1 = nowHour % 10

  document.querySelector('.sec1 .show-time').classList.add('clock-' + sec1)
  document.querySelector('.sec10 .show-time').classList.add('clock-' + sec10)
  document.querySelector('.min1 .show-time').classList.add('clock-' + min1)
  document.querySelector('.min10 .show-time').classList.add('clock-' + min10)
  document.querySelector('.hour1 .show-time').classList.add('clock-' + hour1)
  document.querySelector('.hour10 .show-time').classList.add('clock-' + hour10)
  
  setTimeout(function() {
    setTime()
  }, 1000)
}

window.onload = function() {
  _clock()
  setTime()
}
