/**
 * Swizzled ColorModeToggle to add a cosmic dust transition on theme toggle
 */
import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';
import IconSystemColorMode from '@theme/Icon/SystemColorMode';
import styles from './styles.module.css';
import { spawnCosmicDust } from '@site/src/components/CosmicDust';

function getNextColorMode(colorMode, respectPrefersColorScheme) {
  if (!respectPrefersColorScheme) {
    return colorMode === 'dark' ? 'light' : 'dark';
  }
  switch (colorMode) {
    case null:
      return 'light';
    case 'light':
      return 'dark';
    case 'dark':
      return null;
    default:
      throw new Error(`unexpected color mode ${colorMode}`);
  }
}

function getColorModeLabel(colorMode) {
  switch (colorMode) {
    case null:
      return translate({
        message: 'system mode',
        id: 'theme.colorToggle.ariaLabel.mode.system',
        description: 'The name for the system color mode',
      });
    case 'light':
      return translate({
        message: 'light mode',
        id: 'theme.colorToggle.ariaLabel.mode.light',
        description: 'The name for the light color mode',
      });
    case 'dark':
      return translate({
        message: 'dark mode',
        id: 'theme.colorToggle.ariaLabel.mode.dark',
        description: 'The name for the dark color mode',
      });
    default:
      throw new Error(`unexpected color mode ${colorMode}`);
  }
}

function getColorModeAriaLabel(colorMode) {
  return translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the color mode toggle',
    },
    {
      mode: getColorModeLabel(colorMode),
    },
  );
}

function CurrentColorModeIcon({value}) {
  switch (value) {
    case 'light':
      return <IconLightMode aria-hidden className={clsx(styles.toggleIcon)} />;
    case 'dark':
      return <IconDarkMode aria-hidden className={clsx(styles.toggleIcon)} />;
    default:
      return <IconSystemColorMode aria-hidden className={clsx(styles.toggleIcon)} />;
  }
}

function ColorModeToggle({ className, buttonClassName, respectPrefersColorScheme, value, onChange }) {
  const isBrowser = useIsBrowser();
  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        className={clsx('clean-btn', styles.toggleButton, !isBrowser && styles.toggleButtonDisabled, buttonClassName)}
        type="button"
        onClick={(e) => {
          try {
            const x = e?.clientX ?? undefined;
            const y = e?.clientY ?? undefined;
            spawnCosmicDust({ x, y, count: 15 });
          } catch {}
          onChange(getNextColorMode(value, respectPrefersColorScheme));
        }}
        disabled={!isBrowser}
        title={getColorModeLabel(value)}
        aria-label={getColorModeAriaLabel(value)}>
        <CurrentColorModeIcon value={value} />
      </button>
    </div>
  );
}

export default React.memo(ColorModeToggle);

