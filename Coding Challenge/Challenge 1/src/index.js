// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

// ok, ok I never Delete that, please calm down~ everything is ok~

const title = document.getElementsByTagName("h2")[0];

const superEventHandler = {
  mouseOver: () => {
    title.innerHTML = "The Mouse is HERE!!";
    title.style.color = colors[0];
  },

  mouseLeave: () => {
    title.innerHTML = "The Mouse is GONE!!";
    title.style.color = colors[1];
  },

  resize: () => {
    title.innerHTML = "You just RESIZED!!";
    title.style.color = colors[2];
  },

  contextMenu: () => {
    title.innerHTML = "That was a RIGHT CLICK!!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.contextMenu);
