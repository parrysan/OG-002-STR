import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    fullWidth?: boolean;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    children: ReactNode;
}

export function Button({
    variant = 'primary',
    size = 'md',
    loading = false,
    fullWidth = false,
    icon,
    iconPosition = 'left',
    disabled,
    className = '',
    children,
    ...props
}: ButtonProps) {
    // Size classes
    const sizeClasses = {
        sm: 'h-9 px-3 text-sm',
        md: 'h-12 px-5 text-base',
        lg: 'h-14 px-6 text-lg',
    };

    // Base classes
    const baseClasses = `
    inline-flex items-center justify-center gap-2 
    rounded-lg font-medium
    transition-all duration-200
    focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
    ${sizeClasses[size]}
    ${className}
  `;

    // Variant styles using CSS variables
    const variantStyles = {
        primary: {
            backgroundColor: loading || disabled ? 'var(--color-primary)' : 'var(--color-cta)',
            color: 'var(--color-cta-text)',
            border: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled || loading ? 0.5 : 1,
        },
        secondary: {
            backgroundColor: 'transparent',
            color: 'var(--color-text-primary)',
            border: '1px solid var(--color-border)',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled || loading ? 0.5 : 1,
        },
        ghost: {
            backgroundColor: 'transparent',
            color: 'var(--color-text-secondary)',
            border: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled || loading ? 0.5 : 1,
        },
    };

    // Hover styles (applied via CSS)
    const hoverClass = {
        primary: 'hover:opacity-90',
        secondary: 'hover:bg-[var(--color-surface-elevated)] hover:border-[var(--color-border-hover)]',
        ghost: 'hover:bg-[var(--color-background)]',
    };

    return (
        <button
            className={`${baseClasses} ${hoverClass[variant]}`}
            style={variantStyles[variant]}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <svg
                    className="h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}
            {!loading && icon && iconPosition === 'left' && icon}
            {children}
            {!loading && icon && iconPosition === 'right' && icon}
        </button>
    );
}
