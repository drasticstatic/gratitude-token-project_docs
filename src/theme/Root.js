import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    // Fix mobile hamburger menu backdrop click
    const handleBackdropClick = (e) => {
      // Check if click is on backdrop
      if (e.target.classList.contains('navbar-sidebar__backdrop') || 
          e.target.className?.includes?.('navbar-sidebar__backdrop')) {
        // Find and click the close button
        const closeButton = document.querySelector('[aria-label="Close navigation bar"]') ||
                           document.querySelector('.navbar-sidebar__close') ||
                           document.querySelector('.clean-btn.navbar-sidebar__close');
        
        if (closeButton) {
          closeButton.click();
        } else {
          // Fallback: try to find the toggle button
          const toggleButton = document.querySelector('.navbar__toggle') ||
                               document.querySelector('[aria-label="Toggle navigation bar"]');
          if (toggleButton) {
            toggleButton.click();
          }
        }
      }
    };

    // Add click listener to document
    document.addEventListener('click', handleBackdropClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  return <>{children}</>;
}

