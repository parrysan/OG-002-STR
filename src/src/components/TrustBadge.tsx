import { ReactNode } from 'react';
import { ShieldCheckIcon } from './icons';

export type BadgeType = 'gmp' | 'fda' | 'nmpa';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface TrustBadgeProps {
    type: BadgeType;
    size?: BadgeSize;
    showIcon?: boolean;
    className?: string;
}

const badgeConfig = {
    gmp: {
        label: 'GMP GRADE',
        color: 'var(--color-trust)',
        hoverColor: 'var(--color-trust-hover)',
    },
    fda: {
        label: 'FDA DMF',
        color: 'var(--color-primary)',
        hoverColor: 'var(--color-primary-hover)',
    },
    nmpa: {
        label: 'NMPA REG',
        color: 'var(--color-secondary)',
        hoverColor: 'var(--color-secondary-hover)',
    },
};

export function TrustBadge({
    type,
    size = 'md',
    showIcon = true,
    className = '',
}: TrustBadgeProps) {
    const config = badgeConfig[type];

    // Size classes
    const sizeClasses = {
        sm: 'px-2 py-1 text-xs gap-1',
        md: 'px-3 py-1.5 text-sm gap-1.5',
        lg: 'px-4 py-2 text-base gap-2',
    };

    const iconSizes = {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
    };

    return (
        <span
            className={`
        inline-flex items-center justify-center
        rounded-full font-semibold
        transition-all duration-200
        ${sizeClasses[size]}
        ${className}
      `}
            style={{
                backgroundColor: config.color,
                color: '#FFFFFF',
            }}
            role="status"
            aria-label={config.label}
        >
            {showIcon && <ShieldCheckIcon className={iconSizes[size]} />}
            <span>{config.label}</span>
        </span>
    );
}
