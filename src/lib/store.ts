import { create } from 'zustand';

export type Category = 'news' | 'gold' | 'silver' | 'platinum' | 'markets' | 'analysis';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  source: string;
  date: string;
  url?: string;
  image?: string;
}

export interface MarketData {
  category: Category;
  featured: NewsItem | null;
  articles: NewsItem[];
  loading: boolean;
  error: string | null;
  lastFetch: number;
}

interface DashboardStore {
  selectedCategory: Category;
  data: Record<Category, MarketData>;
  setCategory: (category: Category) => void;
  setData: (category: Category, data: NewsItem[]) => void;
  setFeatured: (category: Category, item: NewsItem) => void;
  setLoading: (category: Category, loading: boolean) => void;
  setError: (category: Category, error: string | null) => void;
  getCategoryData: (category: Category) => MarketData;
}

const initialState: Record<Category, MarketData> = {
  news: {
    category: 'news',
    featured: null,
    articles: [],
    loading: false,
    error: null,
    lastFetch: 0,
  },
  gold: {
    category: 'gold',
    featured: null,
    articles: [],
    loading: false,
    error: null,
    lastFetch: 0,
  },
  silver: {
    category: 'silver',
    featured: null,
    articles: [],
    loading: false,
    error: null,
    lastFetch: 0,
  },
  platinum: {
    category: 'platinum',
    featured: null,
    articles: [],
    loading: false,
    error: null,
    lastFetch: 0,
  },
  markets: {
    category: 'markets',
    featured: null,
    articles: [],
    loading: false,
    error: null,
    lastFetch: 0,
  },
  analysis: {
    category: 'analysis',
    featured: null,
    articles: [],
    loading: false,
    error: null,
    lastFetch: 0,
  },
};

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  selectedCategory: 'news',
  data: initialState,

  setCategory: (category: Category) => set({ selectedCategory: category }),

  setData: (category: Category, articles: NewsItem[]) =>
    set((state) => ({
      data: {
        ...state.data,
        [category]: {
          ...state.data[category],
          articles,
          lastFetch: Date.now(),
        },
      },
    })),

  setFeatured: (category: Category, item: NewsItem) =>
    set((state) => ({
      data: {
        ...state.data,
        [category]: {
          ...state.data[category],
          featured: item,
        },
      },
    })),

  setLoading: (category: Category, loading: boolean) =>
    set((state) => ({
      data: {
        ...state.data,
        [category]: {
          ...state.data[category],
          loading,
        },
      },
    })),

  setError: (category: Category, error: string | null) =>
    set((state) => ({
      data: {
        ...state.data,
        [category]: {
          ...state.data[category],
          error,
        },
      },
    })),

  getCategoryData: (category: Category) => {
    const state = get();
    return state.data[category];
  },
}));
