var collapse_triggers = document.querySelectorAll("[collapse_trigger]");

collapse_triggers.forEach((trigger) => {
  var collapse = trigger.nextElementSibling;

  trigger.addEventListener("click", function () {
    if (trigger.getAttribute("aria-expanded") == "true") {
      var collapse_height = collapse.scrollHeight;
      close_collapse(trigger, collapse, collapse_height);
    } else {
      var collapse_height = collapse.scrollHeight;
      open_collapse(trigger, collapse, collapse_height);
    }
  });
});

function open_collapse(trigger, collapse, height) {
  if (current_page != "landing.html") {
    trigger.classList.remove("after:text-slate-800/50");
    trigger.classList.add("after:rotate-180", "after:text-slate-800");
  }
  trigger.classList.add("after:rotate-180");

  if (!trigger.hasAttribute("active_primary")) {
    trigger.classList.add("dark:after:text-white");
    trigger.classList.remove("dark:after:text-white/50");
  }

  collapse.classList.remove("max-h-0");
  collapse.style.maxHeight = height + "px";

  if (trigger.getAttribute("collapse_trigger") == "secondary") {
    collapse_parent = trigger.closest("div");
    parent_height = collapse_parent.scrollHeight + height;
    collapse_parent.style.maxHeight = parent_height + "px";
  }

  trigger.setAttribute("aria-expanded", "true");
}

function close_collapse(trigger, collapse, height) {
  if (current_page != "landing.html") {
    trigger.classList.remove("after:rotate-180", "after:text-slate-800");
    trigger.classList.add("after:text-slate-800/50");
  }
  trigger.classList.remove("after:rotate-180");

  if (!trigger.hasAttribute("active_primary")) {
    trigger.classList.add("dark:after:text-white/50");
    trigger.classList.remove("dark:after:text-white");
  }

  collapse.removeAttribute("style");
  collapse.classList.add("max-h-0");

  if (trigger.getAttribute("collapse_trigger") == "secondary") {
    collapse_parent = trigger.closest("div");
    parent_height = collapse_parent.scrollHeight - height;
    collapse_parent.style.maxHeight = parent_height + "px";
  }

  trigger.setAttribute("aria-expanded", "false");
}

var page = window.location.pathname.split("/").pop().split(".")[0];
var aux = window.location.pathname.split("/");

var page_name = window.location.pathname.split("/");
var current_page = page_name.pop();
var parent_page = page_name.pop();
var root_page = page_name.pop();
var root_folder = page_name.pop();

function safeSetAttribute(element, attribute, value) {
  if (element && element.setAttribute) {
    element.setAttribute(attribute, value);
  }
}

function safeSetStyle(element, property, value) {
  if (element && element.style) {
    element.style[property] = value;
  }
}

function handleActiveElements() {
  try {
    if (root_folder == "pages") {
      var a_href = "../../../pages/" + root_page + "/" + parent_page + "/" + current_page;
      var active_page = document.querySelector('a[href="' + a_href + '"]');
      
      if (active_page) {
        var active_secondary = active_page.closest("div");
        if (active_secondary) {
          active_secondary = active_secondary.previousElementSibling;
        }

        if (active_secondary) {
          var active_primary = active_secondary.closest("div");
          if (active_primary) {
            active_primary = active_primary.previousElementSibling;
          }
          
          if (active_primary) {
            var active_primary_icon = active_primary.querySelector("div");
            if (active_primary_icon) {
              var active_primary_icon_fills = active_primary_icon.querySelectorAll(".fill-slate-800");
            }

            safeSetAttribute(active_primary, "active_primary", "");

            if (active_primary.nextElementSibling && active_secondary.nextElementSibling) {
              safeSetStyle(active_primary.nextElementSibling, "maxHeight", 
                active_primary.nextElementSibling.scrollHeight + active_secondary.nextElementSibling.scrollHeight + "px");
            }
            
            if (active_secondary.nextElementSibling) {
              safeSetStyle(active_secondary.nextElementSibling, "maxHeight", 
                active_secondary.nextElementSibling.scrollHeight + "px");
            }
          }
        }
      }
    } else if(aux.includes("pages")) {
      root_folder = root_page;
      root_page = parent_page;
      parent_page = current_page;

      var a_href = "../../pages/" + root_page + "/" + parent_page;
      var active_page = document.querySelector('a[href="' + a_href + '"]');
      
      if (active_page) {
        safeSetAttribute(active_page, "active_page", "");
        safeSetAttribute(active_page, "active_secondary", "");

        var active_primary = active_page.closest("div");
        if (active_primary) {
          active_primary = active_primary.previousElementSibling;
        }
        
        if (active_primary) {
          var active_primary_icon = active_primary.querySelector("div");
          if (active_primary_icon) {
            var active_primary_icon_fills = active_primary_icon.querySelectorAll(".fill-slate-800");
          }

          if (active_primary.nextElementSibling) {
            safeSetStyle(active_primary.nextElementSibling, "maxHeight", 
              active_primary.nextElementSibling.scrollHeight + "px");
          }
        }
      }
    } else {
      var a_href = "./pages/dashboards/default.html";
      var active_page = document.querySelector('a[href="' + a_href + '"]');
      
      if (!active_page) {
        active_page = document.querySelector('a.router-link-active') || 
                     document.querySelector('a[aria-current="page"]') ||
                     document.querySelector('a.active');
      }
      
      if (active_page) {
        safeSetAttribute(active_page, "active_page", "");
        safeSetAttribute(active_page, "active_secondary", "");

        var active_primary = active_page.closest("div");
        if (active_primary) {
          active_primary = active_primary.previousElementSibling;
        }
        
        if (active_primary) {
          var active_primary_icon = active_primary.querySelector("div");
          if (active_primary_icon) {
            var active_primary_icon_fills = active_primary_icon.querySelectorAll(".fill-slate-800");
          }

          if (active_primary.nextElementSibling) {
            safeSetStyle(active_primary.nextElementSibling, "maxHeight", 
              active_primary.nextElementSibling.scrollHeight + "px");
          }
        }
      }
    }
  } catch (error) {
    console.warn('Error in sidenav.js:', error.message);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', handleActiveElements);
} else {
  handleActiveElements();
}

setTimeout(handleActiveElements, 100);
