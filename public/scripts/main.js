var now, nowYear, nowMonth, nowDate, nowHour, nowMin, nowSec,
      month10, month1, day10, day1, hour10, hour1, min10, min1, sec10, sec1, timer, nowWeek;
$(document).ready(function() {
  _clock();
  setTime();
});
  function setTime() {
  $('.sec1 .show-time').removeClass('clock-' + sec1);
  $('.sec10 .show-time').removeClass('clock-' + sec10);
  $('.min1 .show-time').removeClass('clock-' + min1);
  $('.min10 .show-time').removeClass('clock-' + min10);
  $('.hour1 .show-time').removeClass('clock-' + hour1);
  $('.hour10 .show-time').removeClass('clock-' + hour10);
  now = new Date();
  nowYear = now.getFullYear();
  nowMonth = now.getMonth() + 1;
  nowDate = now.getDate();
  nowHour = now.getHours();
  nowMin = now.getMinutes();
  nowSec = now.getSeconds();
  console.log(nowHour);
  sec10 = Math.floor(nowSec / 10);
  sec1 = nowSec % 10;
  min10 = Math.floor(nowMin / 10);
  min1 = nowMin % 10;
  hour10 = Math.floor(nowHour / 10);
  hour1 = nowHour % 10;
  
  $('.sec1 .show-time').addClass('clock-' + sec1);
  $('.sec10 .show-time').addClass('clock-' + sec10);
  $('.min1 .show-time').addClass('clock-' + min1);
  $('.min10 .show-time').addClass('clock-' + min10);
  $('.hour1 .show-time').addClass('clock-' + hour1);
  $('.hour10 .show-time').addClass('clock-' + hour10);
  
  var t = setTimeout(function() {
    setTime()
  }, 1000);
}

    function _clock() {
      $('.clock').html(
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
      );
      $('.clock-dot').html(
        '<div class="dot1"></div>' +
        '<div class="dot1-bg"></div>' +
        '<div class="dot2"></div>' +
        '<div class="dot2-bg"></div>'
      );
      
    }