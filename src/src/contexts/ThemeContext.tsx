'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Theme types
export type ThemePalette = 'scientific-blue' | 'precision-purple';
export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  palette: ThemePalette;
  mode: ThemeMode;
  setPalette: (palette: ThemePalette) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY_PALETTE = 'str-theme-palette';
const STORAGE_KEY_MODE = 'str-theme-mode';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialize from localStorage or defaults
  const [palette, setPaletteState] = useState<ThemePalette>('scientific-blue');
  const [mode, setModeState] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const storedPalette = localStorage.getItem(STORAGE_KEY_PALETTE) as ThemePalette | null;
    const storedMode = localStorage.getItem(STORAGE_KEY_MODE) as ThemeMode | null;

    if (storedPalette && ['scientific-blue', 'precision-purple'].includes(storedPalette)) {
      setPaletteState(storedPalette);
    }
    if (storedMode && ['light', 'dark'].includes(storedMode)) {
      setModeState(storedMode);
    }

    setMounted(true);
  }, []);

  // Apply theme attributes to document
  useEffect(() => {
    if (!mounted) return;

    // Set data-theme attribute for palette
    document.documentElement.setAttribute('data-theme', palette);

    // Set dark class for mode
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [palette, mode, mounted]);

  // Persist to localStorage
  const setPalette = (newPalette: ThemePalette) => {
    setPaletteState(newPalette);
    localStorage.setItem(STORAGE_KEY_PALETTE, newPalette);
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem(STORAGE_KEY_MODE, newMode);
  };

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ palette, mode, setPalette, setMode, toggleMode, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
