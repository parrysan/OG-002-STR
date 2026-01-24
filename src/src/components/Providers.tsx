'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { ReactNode } from 'react';

/**
 * Client-side providers wrapper for Next.js App Router
 * This component wraps all client-side contexts and providers
 */
export function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}
