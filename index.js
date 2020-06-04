const title = document.getElementsByTagName("h2")[0];

const superEventHandler = {
  mouseOver: function() {
    title.innerHTML = "Mouseover!";
    title.style.color = colors[0];
  },

  mouseLeave: function() {
    title.innerHTML = "Mouse left.";
    title.style.color = colors[1];
  },

  click: function() {
    title.innerHTML = "The title is clicked!";
    title.style.color = colors[2];
  },

  resize: function() {
    title.innerHTML = "The window is resized!";
    title.style.color = colors[3];
  },

  contextMenu: function() {
    title.innerHTML = "Right Click.";
    title.style.color = colors[4];
  }
};

title.addEventListener("mouseOver", superEventHandler.mouseOver);
title.addEventListener("mouseLeave", superEventHandler.mouseLeave);
title.addEventListener("click", superEventHandler.click);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextMenu", superEventHandler.contextMenu);
