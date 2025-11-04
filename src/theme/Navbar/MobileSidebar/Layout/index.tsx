import React, {version, type ReactNode, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';
import {ThemeClassNames} from '@docusaurus/theme-common';
import type {Props} from '@theme/Navbar/MobileSidebar/Layout';

// TODO Docusaurus v4: remove temporary inert workaround
//  See https://github.com/facebook/react/issues/17157
//  See https://github.com/radix-ui/themes/pull/509
function inertProps(inert: boolean) {
  const isBeforeReact19 = parseInt(version!.split('.')[0]!, 10) < 19;
  if (isBeforeReact19) {
    return {inert: inert ? '' : undefined};
  }
  return {inert};
}

function NavbarMobileSidebarPanel({
  children,
  inert,
}: {
  children: ReactNode;
  inert: boolean;
}) {
  return (
    <div
      className={clsx(
        ThemeClassNames.layout.navbar.mobileSidebar.panel,
        'navbar-sidebar__item menu',
      )}
      {...inertProps(inert)}>
      {children}
    </div>
  );
}

export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}: Props): ReactNode {
  const {shown: secondaryMenuShown} = useNavbarSecondaryMenu();
  const itemsRef = useRef<HTMLDivElement | null>(null);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const el = itemsRef.current;
    if (!el) return;
    const onScroll = () => {
      setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 4);
    };
    el.addEventListener('scroll', onScroll);
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, [itemsRef]);

  const handleScrollHintClick = () => {
    const el = itemsRef.current;
    if (!el) return;
    if (atBottom) {
      el.scrollTo({top: 0, behavior: 'smooth'});
    } else {
      el.scrollTo({top: el.scrollHeight, behavior: 'smooth'});
    }
  };

  return (
    <div
      className={clsx(
        ThemeClassNames.layout.navbar.mobileSidebar.container,
        'navbar-sidebar',
      )}>
      {header}
      <div
        ref={itemsRef}
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenuShown,
        })}>
        <NavbarMobileSidebarPanel inert={false}>
          {primaryMenu}
        </NavbarMobileSidebarPanel>
        <NavbarMobileSidebarPanel inert={!secondaryMenuShown}>
          {secondaryMenu}
        </NavbarMobileSidebarPanel>
        <button
          type="button"
          className="navbar-sidebar__scrollHint clean-btn"
          onClick={handleScrollHintClick}
          aria-label={atBottom ? 'Click to return to top' : 'Click to scroll to bottom'}
        >
          <span style={{transform: atBottom ? 'rotate(180deg)' : 'none', display: 'inline-block', marginRight: 8}}>↓</span>
          {atBottom ? 'Click to return to top' : 'Click to scroll to bottom'}
        </button>
      </div>
    </div>
  );
}
