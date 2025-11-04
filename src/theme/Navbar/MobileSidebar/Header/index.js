import React from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {useColorMode} from '@docusaurus/theme-common';
import {translate} from '@docusaurus/Translate';
import IconClose from '@theme/Icon/Close';
import NavbarLogo from '@theme/Navbar/Logo';

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
        message: 'Close navigation bar',
        description: 'The ARIA label for close button of mobile sidebar',
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}>
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </button>
  );
}

function SimpleColorModeToggle() {
  const {colorMode, setColorMode} = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      className="clean-btn"
      onClick={() => setColorMode(isDark ? 'light' : 'dark')}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: 8,
        border: '1px solid rgba(124,58,237,0.35)',
        background: 'transparent',
      }}
    >
      <span style={{fontSize: 18}}>{isDark ? '🌙' : '☀️'}</span>
    </button>
  );
}

export default function NavbarMobileSidebarHeader() {
  return (
    <div className="navbar-sidebar__brand navbar-sidebar__brand--stacked">
      <SimpleColorModeToggle />
      <CloseButton />
    </div>
  );
}
