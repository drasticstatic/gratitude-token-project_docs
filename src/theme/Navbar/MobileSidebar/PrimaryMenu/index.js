import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();

  // DEBUG: Log items to console
  console.log('NavbarMobilePrimaryMenu rendering with items:', items);
  console.log('Items count:', items.length);

  return (
    <ul
      className="menu__list"
      style={{
        background: 'rgba(0,255,0,0.2)',
        padding: '20px',
        display: 'block',
        width: '100%',
        minHeight: '200px',
        position: 'relative',
        zIndex: 1
      }}
    >
      {items.length === 0 && (
        <li style={{color: 'red', fontSize: '20px'}}>NO ITEMS FOUND!</li>
      )}
      {items.map((item, i) => {
        console.log(`Rendering item ${i}:`, item);
        return (
          <li
            key={i}
            className="menu__list-item"
            style={{
              display: 'block',
              margin: '10px 0',
              padding: '10px',
              background: 'rgba(255,0,0,0.3)',
              border: '2px solid yellow',
              minHeight: '50px',
              position: 'relative',
              zIndex: 2
            }}
          >
            <NavbarItem
              mobile
              {...item}
              onClick={() => mobileSidebar.toggle()}
            />
          </li>
        );
      })}
    </ul>
  );
}
