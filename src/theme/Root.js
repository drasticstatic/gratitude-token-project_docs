import React from 'react';

// Keep Root as a simple passthrough to avoid conflicts with Docusaurus navbar state
export default function Root({ children }) {
  return <>{children}</>;
}
