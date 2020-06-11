import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000; // Where to use it???

const DAY_MILLISECONDS = 86400000;
const HOUR_MILLISECONDS = 3600000;
const MINUTE_MILLISECONDS = 60000;
const SECOND_MILLISECONDS = 1000;

const clockTitle = document.querySelector("h2");

function getTime() {
  // Don't delete this.
  const now = new Date();
  const xmasDay = new Date("2020-12-24:00:00:00+0900");

  const elapsed = xmasDay - now;

  const days = parseInt(elapsed / DAY_MILLISECONDS, 10);
  const hours = parseInt((elapsed % DAY_MILLISECONDS) / HOUR_MILLISECONDS, 10);
  const minutes = parseInt(
    ((elapsed % DAY_MILLISECONDS) % HOUR_MILLISECONDS) / MINUTE_MILLISECONDS,
    10
  );
  const seconds = parseInt(
    (((elapsed % DAY_MILLISECONDS) % HOUR_MILLISECONDS) % MINUTE_MILLISECONDS) /
      SECOND_MILLISECONDS,
    10
  );

  clockTitle.innerText = `${
    days < 10 ? `00${days}` : days < 100 ? `0${days}` : days
  }D ${hours < 10 ? `0${hours}` : hours}H ${
    minutes < 10 ? `0${minutes}` : minutes
  }M ${seconds < 10 ? `0${seconds}` : seconds}S`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
