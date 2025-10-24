import React, { useEffect, useRef, useState } from "react";

/**
 * FlashlightCursor - Creates a flashlight effect that follows the cursor
 * Illuminates the background image around the mouse position
 * Click to brighten the light temporarily
 */
export default function FlashlightCursor() {
  const spotlightRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const moveTimeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }

      // Detect movement
      setIsMoving(true);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  // Determine opacity based on state
  const getBackground = () => {
    if (isClicked) {
      // Brightest on click
      return 'radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.22) 30%, rgba(255, 255, 255, 0.12) 50%, transparent 70%)';
    } else if (isMoving) {
      // Medium brightness when moving
      return 'radial-gradient(circle, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.12) 30%, rgba(255, 255, 255, 0.06) 50%, transparent 70%)';
    } else {
      // Dimmest when stationary
      return 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 30%, rgba(255, 255, 255, 0.04) 50%, transparent 70%)';
    }
  };

  return (
    <div
      ref={spotlightRef}
      style={{
        position: 'fixed',
        width: isClicked ? '600px' : '500px',
        height: isClicked ? '600px' : '500px',
        borderRadius: '50%',
        background: getBackground(),
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 5,
        mixBlendMode: 'screen',
        transition: 'width 0.2s ease-out, height 0.2s ease-out, background 0.15s ease-out'
      }}
    />
  );
}

