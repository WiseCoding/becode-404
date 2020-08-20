(() => {
  // Dark / Light Modus
  const light = document.querySelector('#light');
  const dark = document.querySelector('#dark');
  const mode = document.querySelector('main');

  // Timed Swap
  timeSwap(2100);

  // Change background image if input time is smaller than actual time
  function timeSwap(inpTime) {
    // get current hour and minutes
    const now = getFullTime();
    if (now < inpTime) {
      mode.style.background = "center / cover no-repeat url('images/Day.jpg')";
    } else {
      mode.style.background = "center / cover no-repeat url('images/Evening.jpg')";
    }
  }
  // Add 0 in front of input if smaller then 10
  function checkTime(time) {
    if (time < 10) {
      time = '0' + time;
    }
    return time;
  }
  // Get current time, and convert it to a full number
  function getFullTime() {
    const date = new Date();
    let h = date.getHours().toString();
    let m = date.getMinutes().toString();
    h = checkTime(h);
    m = checkTime(m);
    let fullTime = h + m;
    fullTime = Number(fullTime);
    return fullTime;
  }

  // Click Swap
  light.onclick = () => {
    mode.style.background = "center / cover no-repeat url('images/Day.jpg')";
  };
  dark.onclick = () => {
    mode.style.background = "center / cover no-repeat url('images/Evening.jpg')";
  };

  // Click Mascot
  document.querySelector('.mascotWrap').onclick = () => {
    const mascot = document.querySelector('.mascotWrap');
    mascot.classList.add('mascotLeave');

    const timeout = setTimeout(() => {
      mascot.classList.remove('mascotLeave');
      clearTimeout(timeout);
    }, 2000);
  };
})();
