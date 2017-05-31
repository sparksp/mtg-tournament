var countdown = function (countdownId, informationId, lateInformation, finalInformation, finalTime) {
    "use strict";

    const ONE_MINUTE = 60000;
    const FIVE_MINUTES = 5 * ONE_MINUTE;
    const OVER_FIVE_MINUTES = 5.1 * ONE_MINUTE;

    var pad = function (digit) {
        if (digit < 10) {
            return "0" + digit;
        }
        return digit;
    }

    var formatTime = function (milliseconds) {
        var seconds = parseInt(milliseconds / 1000, 10);
        var minutes = parseInt(seconds / 60, 10);
        seconds = seconds % 60;

        return minutes + ":" + pad(seconds);
    }

    var now = function () {
        return new Date();
    }

    var setText = function (elm, text) {
        if (elm.innerText != text) {
            elm.innerText = text;
        }
    }

    var timer = null;
    var stopTimer = function () {
        if (timer != null) {
            clearInterval(timer);
        }
        timer = null;
    }

    var updateTime = (function () {
        var timeElm = document.getElementById(countdownId);
        var informationElm = document.getElementById(informationId);

        var endTime = new Date(now().getTime() + OVER_FIVE_MINUTES);

        return function () {
            var timeRemaining = endTime - now();
            var timeText = formatTime(timeRemaining);
            var informationText = "";

            if (timeRemaining < FIVE_MINUTES) {
                timeElm.style = "color: red";
                informationText = lateInformation;
            }

            if (timeRemaining <= 0) {
                timeText = finalTime;
                informationText = finalInformation;
                stopTimer();
            }

            setText(timeElm, timeText);
            setText(informationElm, informationText);
        }
    })();

    timer = setInterval(updateTime, 100);
    setTimeout(updateTime, 1); // async
}