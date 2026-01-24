'use client';

import Link from 'next/link';
import { useTheme, ThemePalette, ThemeMode } from '@/contexts/ThemeContext';
import { SunIcon, MoonIcon, ShoppingBagIcon } from './icons';

export function Header() {
    const { palette, mode, setPalette, toggleMode } = useTheme();

    return (
        <header
            className="sticky top-0 z-50 w-full border-b transition-all duration-200"
            style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow-header)',
            }}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo / Wordmark */}
                <div className="flex items-center gap-3">
                    <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg font-bold"
                        style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'var(--color-cta-text)',
                        }}
                    >
                        STR
                    </div>
                    <div>
                        <span
                            className="text-lg font-semibold tracking-tight"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            STR Technologies
                        </span>
                        <span
                            className="hidden text-sm sm:block"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            Impact Theme Concept
                        </span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/science" className="group relative text-sm font-medium transition-colors hover:text-[var(--color-primary-light)]" style={{ color: 'var(--color-text-primary)' }}>
                        Science
                        <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-right scale-x-0 bg-[var(--color-primary-light)] transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
                    </Link>
                    <Link href="/products" className="group relative text-sm font-medium transition-colors hover:text-[var(--color-primary-light)]" style={{ color: 'var(--color-text-primary)' }}>
                        Products
                        <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-right scale-x-0 bg-[var(--color-primary-light)] transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
                    </Link>
                    <Link href="/about" className="group relative text-sm font-medium transition-colors hover:text-[var(--color-primary-light)]" style={{ color: 'var(--color-text-primary)' }}>
                        About
                        <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-right scale-x-0 bg-[var(--color-primary-light)] transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
                    </Link>
                    <Link href="/resources" className="group relative text-sm font-medium transition-colors hover:text-[var(--color-primary-light)]" style={{ color: 'var(--color-text-primary)' }}>
                        Resources
                        <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-right scale-x-0 bg-[var(--color-primary-light)] transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
                    </Link>
                    <Link href="/contact" className="group relative text-sm font-medium transition-colors hover:text-[var(--color-primary-light)]" style={{ color: 'var(--color-text-primary)' }}>
                        Contact
                        <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-right scale-x-0 bg-[var(--color-primary-light)] transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Shopping Basket */}
                    <button
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors duration-200 hover:bg-[var(--color-surface-elevated)]"
                        style={{ color: 'var(--color-text-primary)' }}
                        aria-label="Shopping basket"
                    >
                        <ShoppingBagIcon className="h-5 w-5" />
                    </button>
                    {/* Palette Switcher */}
                    <div
                        className="hidden items-center gap-1 rounded-full p-1 sm:flex"
                        style={{ backgroundColor: 'var(--color-background)' }}
                        role="radiogroup"
                        aria-label="Color theme"
                    >
                        <PaletteButton
                            palette="scientific-blue"
                            currentPalette={palette}
                            onClick={() => setPalette('scientific-blue')}
                            label="Scientific Blue"
                            color="#0A5F8A"
                        />
                        <PaletteButton
                            palette="precision-purple"
                            currentPalette={palette}
                            onClick={() => setPalette('precision-purple')}
                            label="Precision Purple"
                            color="#5B21B6"
                        />
                    </div>

                    {/* Mode Toggle */}
                    <button
                        onClick={toggleMode}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors duration-200"
                        style={{
                            backgroundColor: mode === 'dark' ? 'var(--color-surface-elevated)' : 'var(--color-background)',
                            color: 'var(--color-text-primary)',
                        }}
                        aria-label={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                    >
                        {mode === 'light' ? (
                            <MoonIcon className="h-5 w-5" />
                        ) : (
                            <SunIcon className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}

// Palette button component
function PaletteButton({
    palette,
    currentPalette,
    onClick,
    label,
    color,
}: {
    palette: ThemePalette;
    currentPalette: ThemePalette;
    onClick: () => void;
    label: string;
    color: string;
}) {
    const isActive = palette === currentPalette;

    return (
        <button
            onClick={onClick}
            className="flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200"
            style={{
                backgroundColor: isActive ? 'var(--color-surface)' : 'transparent',
                color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
            }}
            role="radio"
            aria-checked={isActive}
            aria-label={label}
        >
            <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: color }}
            />
            <span className="hidden md:inline">{label}</span>
        </button>
    );
}

export default Header;
