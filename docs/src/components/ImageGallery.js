import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ImageGallery - Display images in a responsive grid with lightbox
 * @param {Array} images - Array of image paths
 * @param {String} title - Gallery title
 * @param {Number} maxDisplay - Maximum images to display on page (default 5)
 */
export default function ImageGallery({ images = [], title = "Gallery", maxDisplay = 5 }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);

  // Filter out placeholders for lightbox
  const realImages = images.filter(img => img !== 'placeholder');
  const displayImages = images.slice(0, maxDisplay);
  const hasMore = images.length > maxDisplay;

  const openLightbox = (image, index) => {
    // Find the index in realImages array
    const realIndex = realImages.indexOf(image);
    setSelectedImage(image);
    setSelectedIndex(realIndex);

    // Show toast on first click
    if (!showToast) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % realImages.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(realImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (selectedIndex - 1 + realImages.length) % realImages.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(realImages[prevIndex]);
  };

  if (!images || images.length === 0) {
    return (
      <div style={{
        padding: '40px',
        textAlign: 'center',
        background: 'rgba(124, 58, 237, 0.1)',
        borderRadius: '12px',
        border: '1px dashed rgba(124, 58, 237, 0.3)'
      }}>
        <p style={{ color: '#9ca3af' }}>No images to display</p>
      </div>
    );
  }

  return (
    <div>
      <h3 style={{
        fontSize: '1.5rem',
        marginBottom: '24px',
        color: '#a78bfa',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Basket */}
          <path d="M 20 60 L 25 85 L 75 85 L 80 60 Z" fill="#92400e" stroke="#78350f" strokeWidth="2"/>
          <path d="M 15 60 Q 50 55, 85 60" stroke="#78350f" strokeWidth="3" fill="none"/>
          <line x1="30" y1="60" x2="33" y2="85" stroke="#78350f" strokeWidth="1.5"/>
          <line x1="50" y1="60" x2="50" y2="85" stroke="#78350f" strokeWidth="1.5"/>
          <line x1="70" y1="60" x2="67" y2="85" stroke="#78350f" strokeWidth="1.5"/>

          {/* Mushrooms in basket */}
          <ellipse cx="35" cy="55" rx="8" ry="4" fill="#7c3aed" opacity="0.3" />
          <rect x="31" y="40" width="8" height="15" rx="2" fill="#fbbf24" />
          <path d="M 35 25 Q 25 28, 23 35 Q 23 40, 28 43 L 42 43 Q 47 40, 47 35 Q 45 28, 35 25 Z" fill="#ec4899"/>
          <ellipse cx="30" cy="32" rx="2" ry="3" fill="#fbbf24" opacity="0.8" />

          <ellipse cx="55" cy="50" rx="8" ry="4" fill="#7c3aed" opacity="0.3" />
          <rect x="51" y="35" width="8" height="15" rx="2" fill="#a78bfa" />
          <path d="M 55 20 Q 45 23, 43 30 Q 43 35, 48 38 L 62 38 Q 67 35, 67 30 Q 65 23, 55 20 Z" fill="#7c3aed"/>
          <ellipse cx="50" cy="27" rx="2" ry="3" fill="#fbbf24" opacity="0.8" />

          <ellipse cx="70" cy="55" rx="7" ry="4" fill="#7c3aed" opacity="0.3" />
          <rect x="67" y="42" width="6" height="13" rx="2" fill="#ec4899" />
          <path d="M 70 30 Q 62 32, 61 37 Q 61 41, 65 43 L 75 43 Q 79 41, 79 37 Q 78 32, 70 30 Z" fill="#a78bfa"/>
        </svg>
        {title}
      </h3>

      {/* Gallery Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '32px'
      }}>
        {displayImages.map((image, index) => {
          const isPlaceholder = image === 'placeholder';

          return (
            <motion.div
              key={index}
              whileHover={{ scale: isPlaceholder ? 1.0 : 1.05, y: isPlaceholder ? 0 : -5 }}
              whileTap={{ scale: isPlaceholder ? 1.0 : 0.95 }}
              onClick={() => !isPlaceholder && openLightbox(image, index)}
              style={{
                cursor: isPlaceholder ? 'default' : 'pointer',
                borderRadius: '12px',
                overflow: 'visible',
                background: isPlaceholder ? 'rgba(124, 58, 237, 0.15)' : 'rgba(0, 0, 0, 0.3)',
                border: isPlaceholder ? '2px dashed rgba(124, 58, 237, 0.6)' : '1px solid rgba(124, 58, 237, 0.3)',
                aspectRatio: '1',
                position: 'relative',
                opacity: isPlaceholder ? 0.8 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isPlaceholder ? '0 0 20px rgba(124, 58, 237, 0.3)' : 'none'
              }}
            >
              {isPlaceholder ? (
                <>
                  {/* Sparkle trail animation around border */}
                  <svg
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '-10px',
                      width: 'calc(100% + 20px)',
                      height: 'calc(100% + 20px)',
                      pointerEvents: 'none',
                      zIndex: 10
                    }}
                    viewBox="0 0 220 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Traveling sparkle - slower speed */}
                    <circle r="3" fill="#fbbf24">
                      <animateMotion
                        dur="6s"
                        repeatCount="indefinite"
                        path="M 10,10 L 210,10 L 210,210 L 10,210 Z"
                      />
                      <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                    </circle>
                    <circle r="2" fill="#ec4899">
                      <animateMotion
                        dur="6s"
                        repeatCount="indefinite"
                        begin="2s"
                        path="M 10,10 L 210,10 L 210,210 L 10,210 Z"
                      />
                      <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                    </circle>
                    <circle r="2.5" fill="#a78bfa">
                      <animateMotion
                        dur="6s"
                        repeatCount="indefinite"
                        begin="4s"
                        path="M 10,10 L 210,10 L 210,210 L 10,210 Z"
                      />
                      <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                    </circle>
                  </svg>

                  <div style={{ textAlign: 'center', padding: '20px', position: 'relative', zIndex: 1, animation: 'heartbeat 2s ease-in-out infinite' }}>
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ opacity: 0.6 }}
                    >
                      {/* Mushroom silhouette */}
                      <ellipse cx="50" cy="85" rx="25" ry="8" fill="#7c3aed" opacity="0.3" />
                      <rect x="42" y="50" width="16" height="35" rx="3" fill="#7c3aed" />
                      <path
                        d="M 50 20 Q 30 25, 25 40 Q 25 50, 35 55 L 65 55 Q 75 50, 75 40 Q 70 25, 50 20 Z"
                        fill="#7c3aed"
                      />
                      <ellipse cx="40" cy="35" rx="4" ry="6" fill="#a78bfa" opacity="0.6" />
                      <ellipse cx="55" cy="32" rx="3" ry="5" fill="#a78bfa" opacity="0.6" />
                      <ellipse cx="48" cy="40" rx="2" ry="3" fill="#a78bfa" opacity="0.6" />
                    </svg>
                    <p style={{ color: '#a78bfa', fontSize: '0.875rem', marginTop: '8px', opacity: 0.9, fontWeight: 'bold' }}>
                      To Be Determined
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={image}
                    alt={`Gallery item ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #9ca3af;">
                          <span>🖼️</span>
                        </div>
                      `;
                    }}
                  />

                  {/* Hover overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(236, 72, 153, 0.3))',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: 'bold'
                  }}
                  className="gallery-overlay">
                    View
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* "View More" message if there are more images */}
      {hasMore && (
        <div style={{
          textAlign: 'center',
          padding: '16px',
          background: 'rgba(124, 58, 237, 0.1)',
          borderRadius: '8px',
          border: '1px dashed rgba(124, 58, 237, 0.3)',
          marginBottom: '32px'
        }}>
          <p style={{ color: '#a78bfa', margin: 0, fontSize: '0.875rem' }}>
            📸 Click any image to enlarge and see all {images.length} photos in the lightbox
          </p>
        </div>
      )}

      {/* Toast notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.95), rgba(236, 72, 153, 0.95))',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(124, 58, 237, 0.5)',
            zIndex: 10000,
            fontSize: '0.875rem',
            fontWeight: '600'
          }}
        >
          🔍 Click to enlarge and navigate through all photos
        </motion.div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white',
                transition: 'all 0.3s',
                zIndex: 10001
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <X size={24} />
            </button>

            {/* Previous button */}
            {realImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                style={{
                  position: 'absolute',
                  left: '20px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                  transition: 'all 0.3s',
                  zIndex: 10001
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Next button */}
            {realImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                style={{
                  position: 'absolute',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                  transition: 'all 0.3s',
                  zIndex: 10001
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Image */}
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Lightbox view"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            />

            {/* Image counter */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.875rem',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-overlay:hover {
          opacity: 1 !important;
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          30% { transform: scale(1.04); }
          60% { transform: scale(1.0); }
        }
      `}</style>
    </div>
  );
}

