function initializeToasts() {
  var triggers = document.querySelectorAll("[toast]");
  triggers.forEach((trigger) => {
    // Remove existing event listeners to prevent duplicates
    trigger.removeEventListener("click", handleToastClick);
    trigger.addEventListener("click", handleToastClick);
  });
}

function handleToastClick(event) {
  let trigger = event.currentTarget;
  let toastId = trigger.getAttribute("data-target");
  let toast = document.querySelector("#" + toastId);
  
  if (trigger.getAttribute("aria-hidden") == "true" && toast) {
    trigger.setAttribute("aria-hidden", "false");
    toast.classList.remove("hidden");
    setTimeout(function () {
      toast.classList.remove("opacity-0");
    }, 100);
    setTimeout(function () {
      trigger.setAttribute("aria-hidden", "true");
      toast.classList.add("opacity-0");
      setTimeout(function () {
        toast.classList.add("hidden");
      }, 200);
    }, 3800);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeToasts);

// Also initialize when Angular finishes loading
if (typeof window !== 'undefined') {
  window.addEventListener('load', initializeToasts);
  
  // For Angular, we need to reinitialize after route changes
  setTimeout(initializeToasts, 1000);
  setTimeout(initializeToasts, 2000);
}
