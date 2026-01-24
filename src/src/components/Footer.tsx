import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            className="border-t py-12 transition-colors duration-200"
            style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-secondary)',
            }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Brand Column */}
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <div
                                className="flex h-8 w-8 items-center justify-center rounded-lg font-bold"
                                style={{
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'var(--color-cta-text)',
                                }}
                            >
                                STR
                            </div>
                            <span
                                className="text-lg font-semibold tracking-tight"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                STR Technologies
                            </span>
                        </div>
                        <p className="max-w-xs text-sm">
                            Advancing biotech through synthetic purity and GMP-grade consistency.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3
                            className="mb-4 text-sm font-semibold uppercase tracking-wider"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/science"
                                    className="transition-colors hover:text-[var(--color-primary)]"
                                >
                                    Science
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products"
                                    className="transition-colors hover:text-[var(--color-primary)]"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="transition-colors hover:text-[var(--color-primary)]"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/resources"
                                    className="transition-colors hover:text-[var(--color-primary)]"
                                >
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="transition-colors hover:text-[var(--color-primary)]"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / Info Column */}
                    <div>
                        <h3
                            className="mb-4 text-sm font-semibold uppercase tracking-wider"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            Legal
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="#"
                                    className="transition-colors hover:text-[var(--color-primary)]"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="transition-colors hover:text-[var(--color-primary)]"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="transition-colors hover:text-[var(--color-primary)]"
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="mt-12 border-t pt-8 text-center text-xs"
                    style={{ borderColor: 'var(--color-border)' }}
                >
                    <p>
                        © {year} STR Technologies. All rights reserved. <br />
                        <span className="opacity-75">
                            Impact Theme Concept — Phase 1: Foundation & Setup
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
