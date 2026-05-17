
export type ThemeType = 'black-diamond' | 'gold-royal' | 'pearl-white' | 'emerald-luxury' | 'modern-silver' | 'japanese-minimal';

export interface LuxuryTheme {
  id: ThemeType;
  name: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    accent: string;
    muted: string;
    border: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

export const LUXURY_THEMES: Record<ThemeType, LuxuryTheme> = {
  'black-diamond': {
    id: 'black-diamond',
    name: 'Black Diamond',
    colors: {
      background: '#0a0a0a',
      foreground: '#ffffff',
      primary: '#ffffff',
      primaryForeground: '#0a0a0a',
      accent: '#333333',
      muted: '#1a1a1a',
      border: 'rgba(255,255,255,0.1)'
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Inter', sans-serif"
    }
  },
  'gold-royal': {
    id: 'gold-royal',
    name: 'Gold Royal',
    colors: {
      background: '#0f172a',
      foreground: '#f8fafc',
      primary: '#fbbf24',
      primaryForeground: '#0f172a',
      accent: '#d97706',
      muted: '#1e293b',
      border: 'rgba(251,191,36,0.2)'
    },
    fonts: {
      heading: "'Cinzel', serif",
      body: "'DM Sans', sans-serif"
    }
  },
  'pearl-white': {
    id: 'pearl-white',
    name: 'Pearl White',
    colors: {
      background: '#f8f8f8',
      foreground: '#1a1a1a',
      primary: '#000000',
      primaryForeground: '#ffffff',
      accent: '#e5e5e5',
      muted: '#f1f1f1',
      border: 'rgba(0,0,0,0.1)'
    },
    fonts: {
      heading: "'Bodoni Moda', serif",
      body: "'Inter', sans-serif"
    }
  },
  'emerald-luxury': {
    id: 'emerald-luxury',
    name: 'Emerald Luxury',
    colors: {
      background: '#064e3b',
      foreground: '#ecfdf5',
      primary: '#10b981',
      primaryForeground: '#064e3b',
      accent: '#065f46',
      muted: '#06402b',
      border: 'rgba(16,185,129,0.2)'
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Inter', sans-serif"
    }
  },
  'modern-silver': {
    id: 'modern-silver',
    name: 'Modern Silver',
    colors: {
      background: '#e5e7eb',
      foreground: '#111827',
      primary: '#1f2937',
      primaryForeground: '#ffffff',
      accent: '#9ca3af',
      muted: '#d1d5db',
      border: 'rgba(31,41,55,0.1)'
    },
    fonts: {
      heading: "'Space Grotesk', sans-serif",
      body: "'Inter', sans-serif"
    }
  },
  'japanese-minimal': {
    id: 'japanese-minimal',
    name: 'Japanese Minimal',
    colors: {
      background: '#fafaf9',
      foreground: '#1c1917',
      primary: '#44403c',
      primaryForeground: '#fafaf9',
      accent: '#d6d3d1',
      muted: '#f5f5f4',
      border: 'rgba(68,64,60,0.1)'
    },
    fonts: {
      heading: "'Noto Serif JP', serif",
      body: "'Inter', sans-serif"
    }
  }
};
