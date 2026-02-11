/**
 * STR Technologies — Cart Module
 * localStorage-based cart with slide-in drawer UI
 * Inspired by Swell.com cart UX pattern
 */

const Cart = (() => {
    const STORAGE_KEY = 'str_cart';
    let drawerEl = null;
    let overlayEl = null;
    let isDrawerOpen = false;

    // ─── Data Layer ───────────────────────────────────

    function getItems() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch {
            return [];
        }
    }

    function saveItems(items) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        document.dispatchEvent(new CustomEvent('cart:updated', { detail: { items } }));
    }

    function add(item) {
        const items = getItems();
        const existing = items.find(i => i.id === item.id);
        if (existing) {
            existing.quantity += item.quantity || 1;
        } else {
            items.push({ ...item, quantity: item.quantity || 1 });
        }
        saveItems(items);
        renderDrawerContents();
        openDrawer();
    }

    function remove(id) {
        const items = getItems().filter(i => i.id !== id);
        saveItems(items);
        renderDrawerContents();
        if (items.length === 0) closeDrawer();
    }

    function updateQty(id, qty) {
        const items = getItems();
        const item = items.find(i => i.id === id);
        if (item) {
            item.quantity = Math.max(1, qty);
            saveItems(items);
            renderDrawerContents();
        }
    }

    function getCount() {
        return getItems().reduce((sum, i) => sum + i.quantity, 0);
    }

    function getTotal() {
        return getItems().reduce((sum, i) => sum + (i.price * i.quantity), 0);
    }

    function clear() {
        saveItems([]);
        renderDrawerContents();
    }

    // ─── Drawer UI ────────────────────────────────────

    function injectDrawer() {
        if (drawerEl) return;

        // Overlay
        overlayEl = document.createElement('div');
        overlayEl.className = 'cart-overlay';
        overlayEl.addEventListener('click', closeDrawer);
        document.body.appendChild(overlayEl);

        // Drawer
        drawerEl = document.createElement('div');
        drawerEl.className = 'cart-drawer';
        drawerEl.innerHTML = `
      <div class="cart-drawer-header">
        <h3>CART <span class="cart-drawer-count">0</span></h3>
        <button class="cart-drawer-close" aria-label="Close cart">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <div class="cart-drawer-body"></div>
      <div class="cart-drawer-footer">
        <div class="cart-drawer-total">
          <span class="cart-total-label">TOTAL</span>
          <span class="cart-total-amount">$0.00</span>
        </div>
        <div class="cart-drawer-actions">
          <button class="cart-btn-view" onclick="Cart.closeDrawer()">Continue Shopping</button>
          <button class="cart-btn-checkout">Checkout</button>
        </div>
      </div>
    `;
        document.body.appendChild(drawerEl);

        // Close button
        drawerEl.querySelector('.cart-drawer-close').addEventListener('click', closeDrawer);

        // Checkout button (placeholder)
        drawerEl.querySelector('.cart-btn-checkout').addEventListener('click', () => {
            alert('Checkout is not available in this prototype. This is a demo of the cart experience.');
        });

        renderDrawerContents();
    }

    function renderDrawerContents() {
        if (!drawerEl) return;

        const items = getItems();
        const body = drawerEl.querySelector('.cart-drawer-body');
        const countEl = drawerEl.querySelector('.cart-drawer-count');
        const totalEl = drawerEl.querySelector('.cart-total-amount');
        const footerEl = drawerEl.querySelector('.cart-drawer-footer');

        countEl.textContent = getCount();
        totalEl.textContent = formatPrice(getTotal());

        if (items.length === 0) {
            body.innerHTML = `
        <div class="cart-empty">
          <span class="material-symbols-outlined" style="font-size: 48px; opacity: 0.3;">shopping_cart</span>
          <p>Your cart is empty</p>
        </div>
      `;
            footerEl.style.display = 'none';
        } else {
            footerEl.style.display = '';
            body.innerHTML = items.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-variant">${item.variant || ''}</div>
            <div class="cart-item-price">${formatPrice(item.price)}</div>
          </div>
          <div class="cart-item-actions">
            <div class="cart-qty-control">
              <button class="cart-qty-btn" onclick="Cart.updateQty('${item.id}', ${item.quantity - 1})">−</button>
              <span class="cart-qty-value">${item.quantity}</span>
              <button class="cart-qty-btn" onclick="Cart.updateQty('${item.id}', ${item.quantity + 1})">+</button>
            </div>
            <button class="cart-remove-btn" onclick="Cart.remove('${item.id}')">Remove</button>
          </div>
        </div>
      `).join('');
        }

        // Update all badge elements on the page
        updateBadges();
    }

    function openDrawer() {
        if (!drawerEl) injectDrawer();
        renderDrawerContents();
        // Force reflow before adding class
        drawerEl.offsetHeight;
        overlayEl.classList.add('is-open');
        drawerEl.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        isDrawerOpen = true;
    }

    function closeDrawer() {
        if (!drawerEl) return;
        overlayEl.classList.remove('is-open');
        drawerEl.classList.remove('is-open');
        document.body.style.overflow = '';
        isDrawerOpen = false;
    }

    // ─── Badge ────────────────────────────────────────

    function updateBadges() {
        const count = getCount();
        document.querySelectorAll('.cart-badge').forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    // ─── Helpers ──────────────────────────────────────

    function formatPrice(cents) {
        // Prices stored as dollars (float)
        return '$' + Number(cents).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    // ─── Init ─────────────────────────────────────────

    function init() {
        injectDrawer();
        updateBadges();

        // Listen for cart updates to keep badges in sync
        document.addEventListener('cart:updated', updateBadges);

        // Make cart icon in header clickable to open drawer
        document.querySelectorAll('[aria-label="Shopping Cart"]').forEach(btn => {
            btn.style.cursor = 'pointer';
            btn.style.position = 'relative';

            // Add badge element
            const badge = document.createElement('span');
            badge.className = 'cart-badge';
            badge.textContent = getCount();
            badge.style.display = getCount() > 0 ? 'flex' : 'none';
            btn.appendChild(badge);

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (isDrawerOpen) {
                    closeDrawer();
                } else {
                    openDrawer();
                }
            });
        });
    }

    // Auto-init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ─── Public API ───────────────────────────────────

    return {
        add,
        remove,
        updateQty,
        getItems,
        getCount,
        getTotal,
        clear,
        openDrawer,
        closeDrawer,
        formatPrice
    };
})();
