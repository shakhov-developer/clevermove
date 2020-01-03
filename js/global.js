document.addEventListener("DOMContentLoaded", function() {
  //   "use strict";

  //menu-category

  let submenu = document.getElementsByClassName("submenu"),
    menu = document.getElementsByClassName("menu-category")[0],
    href = document.getElementsByClassName("href"),
    header = document.getElementsByTagName("header")[0];

  // toogle function

  function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className);
    return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
  }

  function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className;
  }

  function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else if (hasClass(el, className)) {
      var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
      el.className = el.className.replace(reg, " ");
    }
  }

  function toggleClass(el, className) {
    if (hasClass(el, className)) removeClass(el, className);
    else addClass(el, className);
  }



  // toogle function

//   function hideSubmenu(a) {
//     for (let i = a; i < submenu.length; i++) {
//       submenu[i].classList.remove("show");
//       submenu[i].classList.add("hide");
//     }
//   }

//   hideSubmenu(0);

  let showSubmenu = b => {
    if (submenu[b].classList.contains("hide")) {
      submenu[b].classList.remove("hide");
      submenu[b].classList.add("show");
    }
  };

  menu.addEventListener("click", function(event) {
    let target = event.target;
    if (target && target.classList.contains("href")) {
      if (target && target.classList.contains("href")) {
        for (let i = 0; i < href.length; i++) {
			
          if (target == href[i]) {
			toggleClass(submenu[i], "active");
            break;
          }
        }
      }
    }
  });
});
