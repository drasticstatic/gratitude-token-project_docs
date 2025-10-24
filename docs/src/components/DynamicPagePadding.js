import { useEffect } from 'react';

/**
 * DynamicPagePadding - adjusts page content padding based on navbar height
 * Ensures content is never hidden by navbar, even when wallet message appears
 * CRITICAL: Pushes content down instead of covering it with padding
 */
export default function DynamicPagePadding() {
  useEffect(() => {
    const updatePadding = () => {
      const navbar = document.querySelector('.navigation');
      const pageContainers = Array.from(document.querySelectorAll('.page-container, .landing-container'));
      const mycelialTitles = Array.from(document.querySelectorAll('.mycelial-title-wrapper'));
      const heroNetworks = Array.from(document.querySelectorAll('.hero-network-container'));
      const faqButton = document.querySelector('.faq-jump-button');

      if (navbar) {
        const navHeight = navbar.offsetHeight;
        const topPadding = navHeight + 80; // 80px buffer ensures nodes are ALWAYS visible

        // Expose as CSS variable for global use
        document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
        document.documentElement.style.setProperty('--top-padding', `${topPadding}px`);

        // Apply padding to ALL page containers - FORCE it
        pageContainers.forEach(pc => {
          pc.style.paddingTop = `${topPadding}px`;
        });

        // Ensure mycelial titles are visible with extra margin
        mycelialTitles.forEach(title => {
          title.style.marginTop = '40px'; // Increased buffer
        });

        // Let CSS handle mycelial canvas offset via --nav-height

        // Adjust hero networks - reset offsets (exact centering handled in component)
        heroNetworks.forEach(hero => {
          hero.style.top = '0px';
          hero.style.marginTop = '0px';
        });

        // Position FAQ button below navbar
        if (faqButton) {
          faqButton.style.top = `${navHeight + 20}px`;
        }

        // Position roadmap button below FAQ button
        const roadmapButton = document.querySelector('.roadmap-jump-button');
        if (roadmapButton) {
          roadmapButton.style.top = `${navHeight + 80}px`;
        }

        // Position oracle button below roadmap button
        const oracleButton = document.querySelector('.oracle-jump-button');
        if (oracleButton) {
          oracleButton.style.top = `${navHeight + 140}px`;
        }

        // Adjust mycelial canvas to account for navbar height changes
        const mycelialCanvas = document.querySelector('.mycelial-canvas');
        if (mycelialCanvas) {
          mycelialCanvas.style.top = `${navHeight}px`;
        }
      }
    };
    
    // Update immediately
    updatePadding();
    
    // Update frequently to catch wallet connection changes
    const interval = setInterval(updatePadding, 100);
    
    // Also update on window resize
    window.addEventListener('resize', updatePadding);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updatePadding);
    };
  }, []);
  
  return null; // This component doesn't render anything
}

