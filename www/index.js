'use strict';

document.addEventListener('deviceready', function() {

  var badges = document.querySelectorAll('.badge');

  navigator.accelerometer.watchAcceleration(
    handleAcceleration,
    handleError,
    { frequency: 100 }
  );

  function handleAcceleration(acceleration) {
    badges[0].innerHTML = acceleration.x;
    badges[1].innerHTML = acceleration.y;
    badges[2].innerHTML = acceleration.z;
    badges[3].innerHTML = getPitch(acceleration);
    badges[4].innerHTML = getRoll(acceleration);
  }

  function handleError() {
    alert('Error reading acceleration');
  }

  function getPitch(acceleration) {
    return Math.atan2(acceleration.y, acceleration.z) * 180 / Math.PI;
  }

  function getRoll(acceleration) {
    return Math.atan2(-acceleration.x, Math.sqrt(Math.pow(acceleration.y, 2) + Math.pow(acceleration.z, 2))) * 180 / Math.PI;
  }

  function tuneAngle(value) {
    return 0.98 * value + 0.02 * value;
  }

}, false);
