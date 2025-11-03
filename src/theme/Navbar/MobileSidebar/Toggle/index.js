import React, { useState, useRef } from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import IconMenu from '@theme/Icon/Menu';
import SporeGlitter from '@site/src/components/SporeGlitter';

export default function MobileSidebarToggle() {
  const {toggle, shown} = useNavbarMobileSidebar();
  const [glitterTrigger, setGlitterTrigger] = useState(0);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    // Get click position for particle origin
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setClickPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    // Trigger spore glitter animation
    setGlitterTrigger(prev => prev + 1);

    // Toggle the menu
    toggle();
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleClick}
        aria-label={translate({
          id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
          message: 'Toggle navigation bar',
          description:
            'The ARIA label for hamburger menu button of mobile navigation',
        })}
        aria-expanded={shown}
        className="navbar__toggle clean-btn"
        type="button">
        <IconMenu />
      </button>
      <SporeGlitter
        trigger={glitterTrigger}
        x={clickPosition.x}
        y={clickPosition.y}
      />
    </>
  );
}
