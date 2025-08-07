/*!

=========================================================
* Argon Dashboard 2 Pro Tailwind - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-tailwind
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Función para inicializar componentes de Argon
function initializeArgonComponents() {
  var page_path = window.location.pathname.split("/");
  var current_page = page_path.pop();
  var parent_page = page_path.pop();
  var root_page = page_path.pop();
  var root = page_path.pop();

  // Ajustar para Angular - siempre usar assets/
  var to_build = "assets/";

  loadStylesheet(to_build + "css/perfect-scrollbar.css");
  loadJS(to_build + "js/perfect-scrollbar.js", true);

  if (document.querySelector("[slider]")) {
    loadJS(to_build + "js/carousel.js", true);
  }

  if (document.querySelector("canvas")) {
    loadJS(to_build + "js/charts.js", false);
  }

  if (document.querySelector('[data-toggle="widget-calendar"]')) {
    loadStylesheet(to_build + "css/full-calendar.css");
    loadJS(to_build + "js/full-calendar.js", false);
  }

  if (document.querySelector('[data-toggle="calendar"]')) {
    loadStylesheet(to_build + "css/full-calendar.css");
    loadJS(to_build + "js/full-calendar.js", false);
  }

  if (document.querySelector("[data-target='tooltip_trigger']")) {
    loadJS(to_build + "js/tooltips.js", true);
    loadStylesheet(to_build + "css/tooltips.css");
  }
  if (document.querySelector("#sliderRegular")) {
    loadStylesheet(to_build + "css/noui-slider.css");
    loadJS(to_build + "js/slider.js", true);
  }

  if (document.querySelector("[choice]")) {
    loadStylesheet(to_build + "css/choices.css");
    loadJS(to_build + "js/choices.js", true);
  }

  if (document.querySelector("#mapid.leaflet")) {
    loadStylesheet(to_build + "css/leaflet.css");
    loadJS(to_build + "js/map.js", true);
  }

  if (document.querySelector("[countTo]")) {
    loadJS(to_build + "js/count-to.js", true);
  }

  if (document.querySelector("[nav-pills]")) {
    if (document.querySelector("[nav-pills][aria-controls='camera-gallery']")) {
      loadJS(to_build + "js/pills-gallery.js", true);
    }
    if (document.querySelector("[nav-pills][aria-controls='pricing-plans']")) {
      loadJS(to_build + "js/pills-pricing.js", true);
    }
    loadJS(to_build + "js/nav-pills.js", true);
  }

  if (document.querySelector("aside")) {
    loadJS(to_build + "js/sidenav.js", true);
    if (current_page != "landing.html") {
      loadJS(to_build + "js/sidenav-burger.js", true);
    }
  }

  if (document.querySelector("[dropdown-trigger]")) {
    loadJS(to_build + "js/dropdown.js", true);
  }

  if (document.querySelector("[navbar-main]")) {
    loadJS(to_build + "js/navbar-sticky.js", true);
  }

  if (document.querySelector(".github-button")) {
    loadJS("https://buttons.github.io/buttons.js", true);
  }

  if (document.querySelector("[multisteps-form]")) {
    loadJS(to_build + "js/multisteps-form.js", true);
  }

  if (document.querySelector("[profile-visibility-toggle]")) {
    loadJS(to_build + "js/toggle.js", true);
  }

  if (document.querySelector("[editor-quill]")) {
    loadStylesheet(to_build + "css/editor-quill.css");
    loadJS(to_build + "js/editor-quill.js", true);
  }

  if (document.querySelector("[datetimepicker]")) {
    loadStylesheet(to_build + "css/flatpickr.css");
    loadJS(to_build + "js/flatpickr.js", true);
  }

  if (document.querySelector("[dropzone]")) {
    loadStylesheet(to_build + "css/dropzone.css");
    loadJS(to_build + "js/dropzone.js", true);
  }

  if (document.querySelector("[notification]")) {
    loadJS(to_build + "js/notify.js", true);
  }

  if (document.querySelector("[alert]")) {
    loadJS(to_build + "js/alert.js", true);
  }

  if (document.querySelector("[toast]")) {
    loadJS(to_build + "js/toast.js", true);
  }

  if (document.querySelector("[accordion]")) {
    loadJS(to_build + "js/accordion.js", true);
  }

  if (document.querySelector("[nav-nested-menu]")) {
    loadJS(to_build + "js/navbar-dropdown.js", true);
  }

  if (document.querySelector("[nav-collapse-trigger]")) {
    loadJS(to_build + "js/navbar-collapse.js", true);
  }

  if (document.querySelector("#myKanban")) {
    loadJS(to_build + "js/kanban.js", true);
    loadStylesheet(to_build + "css/kanban.css");
  }

  if (document.querySelector("[checkbox-color-label]")) {
    loadJS(to_build + "js/label-color.js", true);
  }

  if (document.querySelector("[data-toggle='modal']")) {
    loadJS(to_build + "js/modal.js", true);
  }

  if (document.querySelector("[datatable]")) {
    loadStylesheet(to_build + "css/datatable.css");
    loadJS(to_build + "js/datatable.js", true);
  }

  if (document.querySelector("[onclick^='soft.showSwal']")) {
    loadJS(to_build + "js/sweet-alerts.js", true);
    loadStylesheet(to_build + "css/sweet-alerts.css");
  }

  if (document.querySelector("[photo-swipe-gallery]")) {
    loadJS(to_build + "js/photo-swipe.js", true);
    loadStylesheet(to_build + "css/photo-swipe.css");
  }
}

// Inicialización inicial
setTimeout(initializeArgonComponents, 1000);

// Observador para detectar cambios en el DOM (para Angular)
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      // Verificar si se agregaron elementos con datatable
      let hasDataTable = false;
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType === 1) { // Element node
          if (node.querySelector && node.querySelector('[datatable]')) {
            hasDataTable = true;
          }
          if (node.hasAttribute && node.hasAttribute('datatable')) {
            hasDataTable = true;
          }
        }
      });
      
      if (hasDataTable) {
        // Esperar un poco más para que Angular termine de renderizar
        setTimeout(initializeArgonComponents, 500);
      }
    }
  });
});

// Configurar el observador para monitorear cambios en el body
observer.observe(document.body, {
  childList: true,
  subtree: true
});

function loadStylesheet(FILE_URL) {
  let dynamicStylesheet = document.createElement("link");

  dynamicStylesheet.setAttribute("href", FILE_URL);
  dynamicStylesheet.setAttribute("type", "text/css");
  dynamicStylesheet.setAttribute("rel", "stylesheet");

  document.head.appendChild(dynamicStylesheet);
}

function loadJS(FILE_URL, async) {
  let dynamicScript = document.createElement("script");

  dynamicScript.setAttribute("src", FILE_URL);
  dynamicScript.setAttribute("type", "text/javascript");
  dynamicScript.setAttribute("async", async);

  document.head.appendChild(dynamicScript);
}
