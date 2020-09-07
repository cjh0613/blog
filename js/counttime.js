var cjhurl;
cjhurl = window.location.host;
pthurl = window.location.pathname;
var lang = navigator.language||navigator.userLanguage;//常规浏览器语言和IE浏览器
lang = lang.substr(0, 2);//截取lang前2位字符

if(cjhurl == 'cjh0613.com'){}
else if(cjhurl == '127.0.0.1:4000'){}
else{pthurl=pthurl.replace('/blog','');
    window.location.href="https://cjh0613.com"+pthurl;}

$(document).ready(function () {
var $runtimeCount = $('#webinfo-runtime-count')
    var startDate = $runtimeCount.attr('start_date')
    var showDateTime = function () {
      var BirthDay = new Date(startDate)
      var today = new Date()
      var timeold = (today.getTime() - BirthDay.getTime())
      var daysold = Math.floor(timeold / (24 * 60 * 60 * 1000))
      $('#webinfo-runtime-count').text(daysold + ' ' + '天')
    }
    var interval
    showDateTime()
    clearInterval(interval)
    interval = setInterval(showDateTime, 10000)
    
    $(".reward-qrcode").attr("style","opacity: 1; display: block; transform: translateY(0px);");});