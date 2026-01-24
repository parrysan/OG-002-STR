// Configuration
const CONFIG = {
    sphereCount: 18, // Reduced from 25 to declutter
    minDistance: 120, // Increased connection distance
    // Lighter, cleaner palette: Light Blue, Mint, White, Pale Cyan
    colorPAllette: [0x3D8AB5, 0xD1FAE5, 0xFFFFFF, 0xE0F2F5],
    backgroundColor: 0xffffff,
};

class MolecularHero {
    constructor(container) {
        this.container = container;
        this.width = container.clientWidth;
        this.height = container.clientHeight;

        this.init();
        this.createMolecules();
        this.animate();
        this.handleResize();
    }

    init() {
        // Scene with Fog for depth - lighter fog to match background
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0xE0F2F5, 0.0015);

        // Camera
        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 2000);
        this.camera.position.z = 800;
        this.camera.position.x = 0;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // Lighting for Matte look - soft, even lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.9); // High ambient for flat/clean look
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
        dirLight.position.set(50, 50, 100);
        this.scene.add(dirLight);
    }

    createMolecules() {
        this.group = new THREE.Group();
        this.group.position.x = 400; // Shifted slightly less to the right
        this.scene.add(this.group);

        const spheres = [];
        const geometry = new THREE.SphereGeometry(20, 32, 32); // Slightly smaller spheres

        // Matte, non-shiny material
        const baseMaterial = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.9,
        });

        // Create scattered spheres
        for (let i = 0; i < CONFIG.sphereCount; i++) {
            const material = baseMaterial.clone();
            const mesh = new THREE.Mesh(geometry, material);

            // Randomize position in a wider cluster
            mesh.position.x = (Math.random() - 0.5) * 900;
            mesh.position.y = (Math.random() - 0.5) * 500;
            mesh.position.z = (Math.random() - 0.5) * 600;

            // Depth-based sizing: Closer (positive Z) = Larger
            // Normalize Z from [-300, 300] to approx [0, 1] range for scaling influence
            const depthFactor = (mesh.position.z + 300) / 600;

            // Base scale + depth bonus. 
            // Foreground ~ 1.5x, Background ~ 0.5x
            const baseScale = 0.5 + Math.random() * 0.5; // Random variation
            const finalScale = baseScale * (0.6 + depthFactor);

            mesh.scale.set(finalScale, finalScale, finalScale);

            // Randomize color from palette
            const color = CONFIG.colorPAllette[Math.floor(Math.random() * CONFIG.colorPAllette.length)];
            mesh.material.color.setHex(color);

            this.group.add(mesh);
            spheres.push(mesh);
        }

        // Create Lines connecting spheres
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x3D8AB5, // Light blue connections
            transparent: true,
            opacity: 0.5 // Increased opacity for better visibility
        });

        const linesGeometry = new THREE.BufferGeometry();
        const points = [];

        // Connectivity check
        for (let i = 0; i < spheres.length; i++) {
            for (let j = i + 1; j < spheres.length; j++) {
                const dist = spheres[i].position.distanceTo(spheres[j].position);
                // Increased distance threshold even more for "connected" look
                if (dist < 450) {
                    points.push(spheres[i].position);
                    points.push(spheres[j].position);
                }
            }
        }

        linesGeometry.setFromPoints(points);
        const lines = new THREE.LineSegments(linesGeometry, lineMaterial);
        this.group.add(lines);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Subtle rotation - Slower speed
        this.group.rotation.x += 0.0002;
        this.group.rotation.y += 0.0003;

        // Gentle floating wobble - Slower speed
        this.group.position.y = Math.sin(Date.now() * 0.0002) * 10;

        this.renderer.render(this.scene, this.camera);
    }

    handleResize() {
        window.addEventListener('resize', () => {
            this.width = this.container.clientWidth;
            this.height = this.container.clientHeight;
            this.camera.aspect = this.width / this.height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.width, this.height);
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const heroBg = document.querySelector('.hero-background-3d');
    if (heroBg) {
        new MolecularHero(heroBg);
    }
});
