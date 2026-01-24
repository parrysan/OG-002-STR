interface Specification {
    property: string;
    value: string;
}

interface SpecificationTableProps {
    specifications: Specification[];
    className?: string;
}

export function SpecificationTable({
    specifications,
    className = '',
}: SpecificationTableProps) {
    return (
        <div
            className={`overflow-hidden rounded-lg ${className}`}
            style={{
                border: '1px solid var(--color-border)',
            }}
        >
            <table className="w-full">
                <thead>
                    <tr
                        style={{
                            backgroundColor: 'var(--color-background)',
                            borderBottom: '1px solid var(--color-border)',
                        }}
                    >
                        <th
                            className="px-4 py-3 text-left text-sm font-semibold"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            Property
                        </th>
                        <th
                            className="px-4 py-3 text-left text-sm font-semibold"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            Value
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {specifications.map((spec, index) => (
                        <tr
                            key={index}
                            style={{
                                backgroundColor:
                                    index % 2 === 0
                                        ? 'var(--color-surface)'
                                        : 'var(--color-background)',
                            }}
                        >
                            <td
                                className="px-4 py-3 text-sm font-medium"
                                style={{ color: 'var(--color-text-secondary)' }}
                            >
                                {spec.property}
                            </td>
                            <td
                                className="text-technical px-4 py-3"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                {spec.value}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
