import React, {useState} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import Link from '@docusaurus/Link';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}

// Collapsible category component
function CollapsibleCategory({label, items, mobileSidebar}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="menu__list-item">
      <button
        className="menu__link menu__link--sublist"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          textAlign: 'left',
          padding: '0.5rem 0.75rem',
          background: 'transparent',
          border: 'none',
          color: 'var(--ifm-menu-color)',
          cursor: 'pointer',
        }}
      >
        <span>{label}</span>
        <span style={{
          transform: isOpen ? 'rotate(90deg)' : 'none',
          transition: 'transform 0.2s ease',
          display: 'inline-block',
        }}>
          ▶
        </span>
      </button>
      {isOpen && (
        <ul className="menu__list" style={{paddingLeft: '1rem'}}>
          {items.map((item, idx) => (
            <li key={idx} className="menu__list-item">
              <Link
                to={`/docs/${item}`}
                className="menu__link"
                onClick={() => mobileSidebar.toggle()}
              >
                {item.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

// The primary menu displays the navbar items + full docs sidebar
export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();

  // Define the docs sidebar structure (matching sidebars.js)
  const docsSidebar = [
    {label: 'Introduction', link: '/docs/intro'},
    {
      label: 'Getting Started',
      items: ['getting-started/overview'],
    },
    {
      label: 'Whitepaper',
      items: ['whitepaper/introduction', 'whitepaper/spiritual-foundation'],
    },
    {
      label: 'Principles',
      items: [
        'principles/overview',
        'principles/generosity',
        'principles/truth',
        'principles/compassion',
        'principles/transparency',
        'principles/communion',
        'principles/regeneration',
      ],
    },
    {
      label: 'Tokenomics',
      items: ['tokenomics/overview'],
    },
    {
      label: 'NFTs',
      items: ['nfts/overview', 'nfts/pob-nfts'],
    },
    {
      label: 'Governance',
      items: ['governance/overview'],
    },
    {
      label: 'For Developers',
      items: ['developers/smart-contracts'],
    },
    {label: 'Security', link: '/docs/security'},
    {label: 'Roadmap', link: '/docs/roadmap'},
    {label: 'FAQ', link: '/docs/faq'},
    {label: 'Glossary', link: '/docs/glossary'},
  ];

  return (
    <ul className="menu__list">
      {/* Navbar items */}
      {items.map((item, i) => (
        <li key={i} className="menu__list-item">
          <NavbarItem mobile {...item} onClick={() => mobileSidebar.toggle()} />
        </li>
      ))}

      {/* Divider */}
      <li className="menu__list-item" style={{margin: '1rem 0', borderTop: '1px solid rgba(124,58,237,0.35)'}} />

      {/* Docs sidebar */}
      <li className="menu__list-item">
        <div className="menu__link" style={{fontWeight: 'bold', color: 'rgba(236,72,153,0.9)', padding: '0.5rem 0.75rem'}}>
          Documentation
        </div>
      </li>
      {docsSidebar.map((section, idx) => {
        if (section.link) {
          return (
            <li key={idx} className="menu__list-item">
              <Link
                to={section.link}
                className="menu__link"
                onClick={() => mobileSidebar.toggle()}
              >
                {section.label}
              </Link>
            </li>
          );
        }
        return (
          <CollapsibleCategory
            key={idx}
            label={section.label}
            items={section.items}
            mobileSidebar={mobileSidebar}
          />
        );
      })}
    </ul>
  );
}
