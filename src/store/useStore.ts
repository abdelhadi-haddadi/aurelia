
import { create } from 'zustand';
import { ThemeType, LUXURY_THEMES } from '@/src/lib/themes';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
  items: CartItem[];
}

interface AppState {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, variant?: string) => void;
  updateQuantity: (id: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  user: {
    name: string;
    email: string;
    isAdmin: boolean;
  } | null;
  login: (email: string, isAdmin?: boolean) => void;
  logout: () => void;
  orders: Order[];
  quickViewProduct: CartItem | null;
  setQuickViewProduct: (product: CartItem | null) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
  products: any[];
  fetchProducts: () => Promise<void>;
}

export const useStore = create<AppState>((set) => ({
  theme: 'black-diamond',
  setTheme: (theme) => {
    const root = document.documentElement;
    const selectedTheme = LUXURY_THEMES[theme];
    
    root.style.setProperty('--background', selectedTheme.colors.background);
    root.style.setProperty('--foreground', selectedTheme.colors.foreground);
    root.style.setProperty('--primary', selectedTheme.colors.primary);
    root.style.setProperty('--primary-foreground', selectedTheme.colors.primaryForeground);
    root.style.setProperty('--accent', selectedTheme.colors.accent);
    root.style.setProperty('--muted', selectedTheme.colors.muted);
    root.style.setProperty('--border', selectedTheme.colors.border);
    root.style.setProperty('--heading-font', selectedTheme.fonts.heading);
    root.style.setProperty('--body-font', selectedTheme.fonts.body);
    
    set({ theme });
  },
  cart: [],
  addToCart: (item) => set((state) => {
    const existing = state.cart.find((i) => i.id === item.id && i.variant === item.variant);
    if (existing) {
      return {
        cart: state.cart.map((i) => 
          (i.id === item.id && i.variant === item.variant) ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i
        )
      };
    }
    return { cart: [...state.cart, { ...item, quantity: item.quantity || 1 }] };
  }),
  removeFromCart: (id, variant) => set((state) => ({
    cart: state.cart.filter((i) => !(i.id === id && i.variant === variant))
  })),
  updateQuantity: (id, quantity, variant) => set((state) => ({
    cart: state.cart.map((i) => (i.id === id && i.variant === variant) ? { ...i, quantity } : i)
  })),
  clearCart: () => set({ cart: [] }),
  isCartOpen: false,
  setIsCartOpen: (isCartOpen) => set({ isCartOpen }),
  isSearchOpen: false,
  setIsSearchOpen: (isSearchOpen) => set({ isSearchOpen }),
  products: [],
  fetchProducts: async () => {
    try {
      const response = await fetch('/mock.json');
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  user: null,
  login: (email, isAdmin = false) => set({ 
    user: { name: email.split('@')[0], email, isAdmin } 
  }),
  logout: () => set({ user: null }),
  orders: [
    {
      id: 'ORD-7721',
      date: '2024-03-12',
      total: 12500,
      status: 'Shipped',
      items: [{ id: '1', name: 'Celestial Black Diamond Ring', price: 12500, image: '', quantity: 1 }]
    }
  ],
  quickViewProduct: null,
  setQuickViewProduct: (quickViewProduct) => set({ quickViewProduct }),
}));
