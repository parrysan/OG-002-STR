document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.molecule-viewer, .molecule-viewer-c');

    containers.forEach(container => {
        const target = container.querySelector('.molecule-img, .molecule-img-c');
        if (!target) return;

        // Configuration for "Very Subtle"
        const MAX_ROTATION = 3; // degrees
        const MAX_TRANSLATE = 8; // pixels

        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.

            // Calculate percentage from center (-1 to 1)
            const xPct = (x / rect.width - 0.5) * 2;
            const yPct = (y / rect.height - 0.5) * 2;

            // Calculate transforms
            // RotateX is controlled by Y position (up/down mouse tilts up/down)
            // RotateY is controlled by X position (left/right mouse tilts left/right)
            // Note: RotateX positive tips it away (top goes back), negative tips it towards.
            // We want natural feel: mouse down -> look down (top comes closer? no, bottom goes back).
            // Actually standard "look at" feel:
            // Mouse Right -> RotateY positive? No, usually RotateY(deg) spins right side away.
            const rotateX = -1 * yPct * MAX_ROTATION;
            const rotateY = xPct * MAX_ROTATION;

            const translateX = xPct * MAX_TRANSLATE;
            const translateY = yPct * MAX_TRANSLATE;

            target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`;
        });

        // Reset on leave
        container.addEventListener('mouseleave', () => {
            target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px)';
        });

        // Add transition for smoothness
        target.style.transition = 'transform 0.1s ease-out';
    });
});
