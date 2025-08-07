// Angular-specific toast handler
(function() {
  'use strict';

  function initializeToasts() {
    console.log('Initializing toasts...');
    
    // Find all buttons with toast attribute
    var triggers = document.querySelectorAll("[toast]");
    console.log('Found', triggers.length, 'toast triggers');
    
    triggers.forEach((trigger, index) => {
      console.log('Setting up trigger', index, 'with target:', trigger.getAttribute("data-target"));
      
      // Remove any existing listeners
      trigger.removeEventListener("click", handleToastClick);
      
      // Add new click listener
      trigger.addEventListener("click", handleToastClick);
      
      // Ensure aria-hidden is set to true initially
      trigger.setAttribute("aria-hidden", "true");
    });
  }

  function handleToastClick(event) {
    event.preventDefault();
    event.stopPropagation();
    
    let trigger = event.currentTarget;
    let toastId = trigger.getAttribute("data-target");
    let toast = document.querySelector("#" + toastId);
    
    console.log('Toast clicked:', toastId, 'Toast element:', toast);
    
    if (!toast) {
      console.error('Toast element not found:', toastId);
      return;
    }
    
    if (trigger.getAttribute("aria-hidden") == "true") {
      console.log('Showing toast:', toastId);
      
      // Update trigger state
      trigger.setAttribute("aria-hidden", "false");
      
      // Show toast
      toast.classList.remove("hidden");
      
      // Animate in
      setTimeout(function () {
        toast.classList.remove("opacity-0");
      }, 100);
      
      // Auto-hide after 3.8 seconds
      setTimeout(function () {
        console.log('Hiding toast:', toastId);
        
        // Update trigger state
        trigger.setAttribute("aria-hidden", "true");
        
        // Animate out
        toast.classList.add("opacity-0");
        
        setTimeout(function () {
          toast.classList.add("hidden");
        }, 200);
      }, 3800);
    }
  }

  // Initialize immediately
  initializeToasts();
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeToasts);
  }
  
  // Initialize on window load
  window.addEventListener('load', initializeToasts);
  
  // Re-initialize periodically for Angular route changes
  setInterval(initializeToasts, 2000);
  
  // Also initialize after a delay for Angular
  setTimeout(initializeToasts, 500);
  setTimeout(initializeToasts, 1000);
  setTimeout(initializeToasts, 3000);
  
  // Make it globally available
  window.initializeToasts = initializeToasts;
  
})(); 