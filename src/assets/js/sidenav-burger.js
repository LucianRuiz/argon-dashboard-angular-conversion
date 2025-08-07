// sidenav transition-burger

// Función auxiliar para verificar si un elemento existe
function safeAddEventListener(element, event, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(event, callback);
  }
}

// Función auxiliar para manipular clases de manera segura
function safeClassAction(element, action, className) {
  if (element && element.classList) {
    element.classList[action](className);
  }
}

// Función auxiliar para manipular atributos de manera segura
function safeSetAttribute(element, attribute, value) {
  if (element && element.setAttribute) {
    element.setAttribute(attribute, value);
  }
}

function safeGetAttribute(element, attribute) {
  if (element && element.getAttribute) {
    return element.getAttribute(attribute);
  }
  return null;
}

// Función principal para inicializar el sidenav burger
function initializeSidenavBurger() {
  try {
    var sidenav = document.querySelector("aside");
    var sidenav_trigger = document.querySelector("[sidenav-trigger]");
    var sidenav_close_button = document.querySelector("[sidenav-close-btn]");
    
    // Verificar que los elementos principales existan
    if (!sidenav || !sidenav_trigger) {
      console.warn('Sidenav burger: Required elements not found');
      return;
    }
    
    var sidenav_burger = sidenav_trigger.firstElementChild;
    var top_bread = sidenav_burger ? sidenav_burger.firstElementChild : null;
    var bottom_bread = sidenav_burger ? sidenav_burger.lastElementChild : null;

    // Event listener para el trigger del sidenav
    safeAddEventListener(sidenav_trigger, "click", function () {
      if (typeof pageName !== 'undefined' && pageName != "rtl-page") {
        if (safeGetAttribute(sidenav_trigger, "aria-expanded") == "false") {
          safeSetAttribute(sidenav_trigger, "aria-expanded", "true");
          safeClassAction(sidenav, "add", "translate-x-0");
          safeClassAction(sidenav, "remove", "-translate-x-full");
          safeClassAction(sidenav, "add", "shadow-xl");
      
          safeClassAction(top_bread, "add", "translate-x-[5px]");
          safeClassAction(bottom_bread, "add", "translate-x-[5px]");
        } else {
          safeSetAttribute(sidenav_trigger, "aria-expanded", "false");
          safeClassAction(sidenav, "remove", "translate-x-0");
          safeClassAction(sidenav, "add", "-translate-x-full");
          safeClassAction(sidenav, "remove", "shadow-xl");
      
          safeClassAction(top_bread, "remove", "translate-x-[5px]");
          safeClassAction(bottom_bread, "remove", "translate-x-[5px]");
        }
      } else {
        if (safeGetAttribute(sidenav_trigger, "aria-expanded") == "false") {
          safeSetAttribute(sidenav_trigger, "aria-expanded", "true");
          safeClassAction(sidenav, "add", "translate-x-0");
          safeClassAction(sidenav, "remove", "translate-x-full");
          safeClassAction(sidenav, "add", "shadow-xl");
      
          safeClassAction(top_bread, "add", "-translate-x-[5px]");
          safeClassAction(bottom_bread, "add", "-translate-x-[5px]");
        } else {
          safeSetAttribute(sidenav_trigger, "aria-expanded", "false");
          safeClassAction(sidenav, "remove", "translate-x-0");
          safeClassAction(sidenav, "add", "translate-x-full");
          safeClassAction(sidenav, "remove", "shadow-xl");
      
          safeClassAction(top_bread, "remove", "-translate-x-[5px]");
          safeClassAction(bottom_bread, "remove", "-translate-x-[5px]");
        }
      }
    });

    // Event listener para el botón de cerrar (si existe)
    if (sidenav_close_button) {
      safeAddEventListener(sidenav_close_button, "click", function () {
        if (sidenav_trigger && sidenav_trigger.click) {
          sidenav_trigger.click();
        }
      });
    }

    // Event listener para cerrar al hacer clic fuera
    safeAddEventListener(window, "click", function (e) {
      if (sidenav && sidenav_trigger && 
          !sidenav.contains(e.target) && !sidenav_trigger.contains(e.target)) {
        if (safeGetAttribute(sidenav_trigger, "aria-expanded") == "true") {
          if (sidenav_trigger.click) {
            sidenav_trigger.click();
          }
        }
      }
    });

  } catch (error) {
    console.warn('Error in sidenav-burger.js:', error.message);
    // El error se registra pero no se propaga para evitar romper la aplicación
  }
}

// Ejecutar la función de manera segura
// Esperar a que el DOM esté completamente cargado antes de ejecutar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSidenavBurger);
} else {
  // El DOM ya está cargado
  initializeSidenavBurger();
}

// También ejecutar cuando Angular termine de renderizar (para SPAs)
setTimeout(initializeSidenavBurger, 100);
