'use client';

import { useState, useEffect } from 'react';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen">
        {/* Return a simplified version without animations for SSR */}
        {children}
      </div>
    );
  }

  return <>{children}</>;
} 