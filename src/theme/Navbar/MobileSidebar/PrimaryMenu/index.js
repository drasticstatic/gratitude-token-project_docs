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
    <ul className="menu__list" style={{background: 'rgba(0,255,0,0.2)', padding: '20px'}}>
      {items.map((item, i) => {
        console.log(`Rendering item ${i}:`, item);
        return (
          <NavbarItem
            mobile
            {...item}
            onClick={() => mobileSidebar.toggle()}
            key={i}
          />
        );
      })}
    </ul>
  );
}
