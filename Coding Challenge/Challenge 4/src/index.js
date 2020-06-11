// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");

const currentCountry = localStorage.getItem("country");

function handleChange() {
  localStorage.setItem("country", select.value);
}

function loadCountry() {
  select.value = currentCountry;
}

loadCountry();
select.addEventListener("change", handleChange);
