import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    const getNav = () => document.querySelector('nav.navbar');

    const openSidebar = () => {
      const nav = getNav();
      if (nav) nav.classList.add('navbar-sidebar--show');
      document.body.style.overflow = 'hidden';
    };

    const closeSidebar = () => {
      const nav = getNav();
      if (nav) nav.classList.remove('navbar-sidebar--show');
      document.body.style.overflow = '';
    };

    const onDocClick = (e) => {
      const target = e.target;
      // Open when hamburger is clicked (fallback in case React state fails)
      if (target.closest?.('.navbar__toggle') || target.closest?.('[aria-label="Toggle navigation bar"]')) {
        openSidebar();
        return;
      }
      // Close when backdrop or close button is clicked
      if (
        target.classList?.contains('navbar-sidebar__backdrop') ||
        target.closest?.('.navbar-sidebar__close') ||
        target.closest?.('[aria-label="Close navigation bar"]')
      ) {
        closeSidebar();
      }
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeSidebar();
    };

    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return <>{children}</>;
}

