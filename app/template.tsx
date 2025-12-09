'use client';

import { useState } from 'react';
import LoadingAnimation from '@/components/LoadingAnimation';

export default function Template({ children }: { children: React.ReactNode }) {
     const [isLoading, setIsLoading] = useState(true);

     if (isLoading) {
          return <LoadingAnimation onComplete={() => setIsLoading(false)} />;
     }

     return <>{children}</>;
}
