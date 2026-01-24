import Image from 'next/image';
import Link from 'next/link';
import { TrustBadge, BadgeType } from './TrustBadge';
import { Button } from './Button';

interface ProductCardProps {
    name: string;
    subtitle: string;
    purity: string;
    cas: string;
    badge: BadgeType;
    image: string;
    href: string;
}

export function ProductCard({
    name,
    subtitle,
    purity,
    cas,
    badge,
    image,
    href,
}: ProductCardProps) {
    return (
        <Link
            href={href}
            className="group block cursor-pointer"
            style={{
                textDecoration: 'none',
            }}
        >
            <div
                className="flex h-full flex-col overflow-hidden rounded-xl transition-all duration-200"
                style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                }}
            >
                {/* Badge positioned absolutely over image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <div className="absolute left-3 top-3 z-10">
                        <TrustBadge type={badge} size="sm" />
                    </div>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                    <div>
                        <h3
                            className="text-h4 mb-1"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {name}
                        </h3>
                        <p
                            className="text-sm"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            {subtitle}
                        </p>
                    </div>

                    {/* Technical specs with JetBrains Mono */}
                    <div
                        className="text-technical space-y-1"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        <div>
                            <span style={{ color: 'var(--color-text-muted)' }}>Purity:</span>{' '}
                            {purity}
                        </div>
                        <div>
                            <span style={{ color: 'var(--color-text-muted)' }}>CAS:</span>{' '}
                            {cas}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-2">
                        <Button variant="secondary" size="sm" fullWidth>
                            View Details
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
