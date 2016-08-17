document.addEventListener('DOMContentLoaded', function(e) {

  var menu = document.getElementsByClassName("menu")[0];
  var background = "bisque";

  makeSection = function(option) {
    var section = document.createElement("section");
    section.className = option + "-section";
    addShowButton(section, option);
    addHideButton(section, option);
    addColorMenu(section, option);
    menu.appendChild(section);
  };

  addShowButton = function(section, sectionName) {
    var showButton = document.createElement("button");
    showButton.className = "show-" + sectionName;
    showButton.innerHTML = sectionName;
    section.appendChild(showButton);
  };

  addHideButton = function(section, sectionName) {
    var hideButton = document.createElement("button");
    hideButton.className = "hide-" + sectionName + " hide";
    hideButton.innerHTML = "x";
    section.appendChild(hideButton);
  };

  addColorMenu = function(section, option) {
    var colors = [" #ff274d", "#ED5E59", "#008542", "#034A2C", "#00baae", "#5B9DFD", "#1F5C99", "#00008B", "#93080e", "#871145", "#580054"];
    var colorUl = document.createElement("ul");
    colors.map(function(color){
      var colorLi = document.createElement("li");
      colorLi.className = "colorLi";
      colorLi.style.backgroundColor = color;
      colorUl.appendChild(colorLi);
    });
    section.appendChild(colorUl);
  };

  changeColor = function(colorLi) {
    var color = colorLi.style.backgroundColor;
    var elName = colorLi.parentElement.parentElement.className.split("-")[0];
    var el = document.getElementsByClassName(elName)[0];
    if (elName == "hat") {
      el.style.borderBottomColor = color;
    }
    else if (elName == "cake") {
      var candles = el.children[0].children;
      for (var i = 0; i < candles.length; i++) {
        candles[i].style.background = color;
      }
    }
    else if (elName == "present") {
      el.style.background = color;
    }
    else if (elName == "balloon") {
      el.style.background = "radial-gradient(circle at top left, transparent, oldlace 10%, " + color + " 75%, oldlace 100%)";
    }
  };

  ["hat", "balloon", "present", "cake"].map(function(option){
    makeSection(option);
  });

  var lights = document.createElement("button");
  lights.innerHTML = "lights";
  menu.appendChild(lights);

  document.addEventListener('click', function(e) {
    var elName;
    if (e.target.tagName == "BUTTON") {
        if (e.target.className.split("-")[0] == "show") {
          elName = e.target.innerHTML;
          show(elName);
        }
        else if (e.target.className.split("-")[0] == "hide") {
          elName = e.target.className.split("-")[1].split(" ")[0];
          hide(elName);
        }
        else if (e.target.innerHTML == "lights") {
          toggleLights();
        }
    }
    else if (e.target.className == "colorLi") {
      changeColor(e.target);
    }
  });

  var toggleLights = function () {
      var html = document.getElementsByTagName("HTML")[0];
      var flames = document.getElementsByClassName("flame");
      var buttons = document.getElementsByTagName("BUTTON");
      var balloon = document.getElementsByClassName("balloon")[0];
      if (background == "bisque") {
        html.style.backgroundColor = "black";
        background = "black";
        document.getElementsByTagName("H1")[0].style.color = "white";
        document.getElementsByTagName("H1")[0].style.textShadow = "3px 3px 8px #BF7F00, -3px -3px 8px #BF7F00";
        for (var i = 0; i < buttons.length; i ++) {
          buttons[i].style.color = "white";
          buttons[i].style.textShadow = "3px 3px 8px #BF7F00, -3px -3px 8px #BF7F00";
        }
        for (var i = 0; i < flames.length; i++) {
          flames[i].style.display = "block";
        }
        balloon.style.animationPlayState = "running";
      }
      else {
        html.style.backgroundColor = "bisque";
        background = "bisque";
        document.getElementsByTagName("H1")[0].style.color = "#1aa093";
        document.getElementsByTagName("H1")[0].style.textShadow = "none";
        for (var i = 0; i < buttons.length; i ++) {
          buttons[i].style.color = "#1aa093";
          buttons[i].style.textShadow = "none";
        }
        for (var i = 0; i < flames.length; i++) {
          flames[i].style.display = "none";
        }
        balloon.style.animationPlayState = "paused";
      }
  };

  var show = function(elName){
    var el = document.getElementsByClassName(elName)[0];
    el.style.display = "block";
  };

  var hide = function(elName){
    var el = document.getElementsByClassName(elName)[0];
    el.style.display = "none";
  };







});
