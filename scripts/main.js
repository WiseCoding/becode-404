(function () {
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

  // Translation
  document.querySelector('#en').onclick = () => {
    // English
    document.querySelector('h1 code').textContent = 'Whoops, 404d!';
    document.querySelector('#subtext').textContent =
      "Everyone makes mistakes, let's solve it together...";
    document.querySelector('#btn1').textContent = 'Learn to Code';
    document.querySelector('#btn2').textContent = 'Hire a Coder';
  };
  document.querySelector('#nl').onclick = () => {
    //Dutch
    document.querySelector('h1 code').textContent = 'Oeps, 404!';
    document.querySelector('#subtext').textContent =
      'We maken allemaal eens fouten, laten we het samen oplossen...';
    document.querySelector('#btn1').textContent = 'Leer Coderen';
    document.querySelector('#btn2').textContent = 'Zoek Talent';
  };
  document.querySelector('#fr').onclick = () => {
    //French
    document.querySelector('h1 code').textContent = 'Oups, 404!';
    document.querySelector('#subtext').textContent =
      'Tout le monde fait des erreurs, résolvons-le ensemble ...';
    document.querySelector('#btn1').textContent = 'Apprenez Code';
    document.querySelector('#btn2').textContent = 'Embaucher Talents';
  };
})();
