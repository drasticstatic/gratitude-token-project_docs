/**
 * TransactionSporeEffect - Creates a full-page spore rain effect
 * Triggered when transactions complete (donate, collect, cross-breed, burn, swap)
 * Colors: Green for success, Red for failure, Purple for neutral
 */

export function createTransactionSporeEffect(type = 'neutral') {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '10003';
  container.style.overflow = 'hidden';
  document.body.appendChild(container);

  const sporeCount = 100; // More spores for dramatic effect
  const spores = [];

  // Color schemes based on transaction type
  const colorSchemes = {
    success: [
      'rgba(34, 197, 94, 0.8)',   // Green
      'rgba(22, 163, 74, 0.8)',   // Dark green
      'rgba(74, 222, 128, 0.8)',  // Light green
      'rgba(16, 185, 129, 0.8)',  // Emerald
    ],
    error: [
      'rgba(239, 68, 68, 0.8)',   // Red
      'rgba(220, 38, 38, 0.8)',   // Dark red
      'rgba(248, 113, 113, 0.8)', // Light red
      'rgba(239, 68, 68, 0.8)',   // Red
    ],
    neutral: [
      'rgba(124, 58, 237, 0.8)',  // Purple
      'rgba(88, 28, 135, 0.8)',   // Dark purple
      'rgba(168, 85, 247, 0.8)',  // Light purple
      'rgba(147, 51, 234, 0.8)',  // Medium purple
    ]
  };

  const colors = colorSchemes[type] || colorSchemes.neutral;
  const shadowColor = type === 'success' ? 'rgba(34, 197, 94, 0.6)' :
                      type === 'error' ? 'rgba(239, 68, 68, 0.6)' :
                      'rgba(124, 58, 237, 0.6)';

  for (let i = 0; i < sporeCount; i++) {
    const spore = document.createElement('div');
    const size = Math.random() * 8 + 4; // 4-12px
    const startX = Math.random() * window.innerWidth;
    const delay = Math.random() * 2000; // Stagger the start
    const duration = 3000 + Math.random() * 2000; // 3-5 seconds fall time
    const drift = (Math.random() - 0.5) * 200; // Horizontal drift

    spore.style.position = 'absolute';
    spore.style.left = `${startX}px`;
    spore.style.top = '-20px';
    spore.style.width = `${size}px`;
    spore.style.height = `${size}px`;
    spore.style.borderRadius = '50%';
    spore.style.pointerEvents = 'none';

    spore.style.background = colors[Math.floor(Math.random() * colors.length)];
    spore.style.boxShadow = `0 0 10px ${shadowColor}`;

    container.appendChild(spore);
    spores.push({ element: spore, startX, drift, duration, delay });
  }

  // Animate spores falling
  spores.forEach(({ element, startX, drift, duration, delay }) => {
    setTimeout(() => {
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for natural fall
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        // Calculate position
        const y = easeProgress * (window.innerHeight + 20);
        const x = startX + Math.sin(progress * Math.PI * 4) * drift;
        const rotation = progress * 720; // Two full rotations
        const opacity = progress < 0.9 ? 0.8 : (1 - (progress - 0.9) / 0.1) * 0.8;
        
        element.style.transform = `translate(${x - startX}px, ${y}px) rotate(${rotation}deg)`;
        element.style.opacity = opacity;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }, delay);
  });

  // Clean up after all spores have fallen
  setTimeout(() => {
    container.remove();
  }, 7000); // Max duration + buffer

  console.log('🍄 Transaction spore effect triggered!');
}

// Export a function to trigger the effect with a message
export function celebrateTransaction(message = 'Transaction Complete!', type = 'neutral', errorDetails = null) {
  console.log(`🎉 ${message} (Type: ${type})`);
  createTransactionSporeEffect(type);

  // Create toast container
  const toastContainer = document.createElement('div');
  toastContainer.style.position = 'fixed';
  toastContainer.style.top = '20%';
  toastContainer.style.left = '50%';
  toastContainer.style.transform = 'translate(-50%, -50%)';
  toastContainer.style.zIndex = '10003';
  toastContainer.style.pointerEvents = 'none';

  // Toast background based on type
  const toastBackgrounds = {
    success: 'linear-gradient(135deg, rgba(34, 197, 94, 0.95), rgba(16, 185, 129, 0.95))',
    error: 'linear-gradient(135deg, rgba(239, 68, 68, 0.95), rgba(220, 38, 38, 0.95))',
    neutral: 'linear-gradient(135deg, rgba(124, 58, 237, 0.95), rgba(236, 72, 153, 0.95))'
  };

  const toastShadows = {
    success: '0 8px 32px rgba(34, 197, 94, 0.5)',
    error: '0 8px 32px rgba(239, 68, 68, 0.5)',
    neutral: '0 8px 32px rgba(124, 58, 237, 0.5)'
  };

  // Create toast
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.background = toastBackgrounds[type] || toastBackgrounds.neutral;
  toast.style.color = 'white';
  toast.style.padding = '20px 40px';
  toast.style.borderRadius = '16px';
  toast.style.fontSize = '1.2rem';
  toast.style.fontWeight = '600';
  toast.style.boxShadow = toastShadows[type] || toastShadows.neutral;
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.3s ease';
  toast.style.position = 'relative';
  toast.style.zIndex = '2';

  // Add error details if provided
  if (type === 'error' && errorDetails) {
    const errorText = document.createElement('div');
    errorText.textContent = errorDetails;
    errorText.style.fontSize = '0.9rem';
    errorText.style.marginTop = '8px';
    errorText.style.opacity = '0.9';
    toast.appendChild(errorText);
  }

  toastContainer.appendChild(toast);

  // Create sparkle spores around toast (color-coded by type)
  const sparkleColors = {
    success: [
      'rgba(34, 197, 94, 0.9)',
      'rgba(74, 222, 128, 0.9)',
      'rgba(16, 185, 129, 0.9)',
      'rgba(52, 211, 153, 0.9)',
    ],
    error: [
      'rgba(239, 68, 68, 0.9)',
      'rgba(248, 113, 113, 0.9)',
      'rgba(220, 38, 38, 0.9)',
      'rgba(252, 165, 165, 0.9)',
    ],
    neutral: [
      'rgba(124, 58, 237, 0.9)',
      'rgba(236, 72, 153, 0.9)',
      'rgba(251, 191, 36, 0.9)',
      'rgba(168, 85, 247, 0.9)',
    ]
  };

  const sparkleColorSet = sparkleColors[type] || sparkleColors.neutral;
  const sparkleShadow = type === 'success' ? 'rgba(34, 197, 94, 0.8)' :
                        type === 'error' ? 'rgba(239, 68, 68, 0.8)' :
                        'rgba(124, 58, 237, 0.8)';

  for (let i = 0; i < 30; i++) {
    const spore = document.createElement('div');
    const size = Math.random() * 6 + 3; // 3-9px
    const angle = (i / 30) * Math.PI * 2;
    const distance = 80 + Math.random() * 40; // 80-120px from center
    const delay = Math.random() * 500;
    const duration = 2000 + Math.random() * 1000;

    spore.style.position = 'absolute';
    spore.style.width = `${size}px`;
    spore.style.height = `${size}px`;
    spore.style.borderRadius = '50%';
    spore.style.left = '50%';
    spore.style.top = '50%';
    spore.style.transform = 'translate(-50%, -50%)';
    spore.style.zIndex = '3'; // Increased from 1 to ensure visibility above toast

    spore.style.background = sparkleColorSet[Math.floor(Math.random() * sparkleColorSet.length)];
    spore.style.boxShadow = `0 0 15px ${sparkleShadow}, 0 0 25px ${sparkleShadow}`; // Enhanced glow

    toastContainer.appendChild(spore);

    // Animate spore outward
    setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const x = Math.cos(angle) * distance * easeProgress;
        const y = Math.sin(angle) * distance * easeProgress;
        const rotation = progress * 360;
        const opacity = progress < 0.7 ? 0.9 : (1 - (progress - 0.7) / 0.3) * 0.9;

        spore.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotation}deg)`;
        spore.style.opacity = opacity;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }, delay);
  }

  document.body.appendChild(toastContainer);

  setTimeout(() => { toast.style.opacity = '1'; }, 10);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => { toastContainer.remove(); }, 300);
  }, 3000);
}

