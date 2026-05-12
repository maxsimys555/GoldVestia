import { cacheLife, cacheTag } from 'next/cache';
import { isSupabaseConfigured, supabase, type Article } from '../supabase';

const fallbackArticles: Article[] = [
  {
    id: 'gold-wealth-anchor',
    slug: 'gold-wealth-anchor',
    title: 'Gold remains the anchor for private wealth preservation',
    description:
      'Why disciplined gold allocation continues to matter for families, institutions, and long-horizon capital.',
    content:
      'Gold continues to act as a stabilizing reserve for investors who prioritize durability, liquidity, and long-term purchasing power. In a market shaped by rate uncertainty, currency pressure, and geopolitical repricing, the metal retains a role that is less about speculation and more about balance sheet discipline.\n\nFor private capital, the value of gold is not only price exposure. It is the ability to hold a globally recognized asset outside the rhythm of short-term financial sentiment. That distinction matters for families and institutions that want a reserve layer with deep liquidity, transparent pricing, and a history of resilience across cycles.\n\nThe strongest gold strategies are rarely dramatic. They define a target allocation, rebalance with patience, and treat custody as part of the investment architecture. Allocated bars, audited storage, and clear exit routes help turn a precious metal position from a symbolic holding into a practical portfolio instrument.\n\nGold also works as a psychological anchor. During periods when equities, credit, and currencies move together, a physical reserve can give investors the confidence to avoid forced decisions. The goal is not to predict every market turn, but to preserve optionality when capital becomes expensive and sentiment becomes fragile.\n\nA disciplined allocation can support portfolio resilience while preserving purchasing power through changing rate cycles and market stress. For long-horizon investors, that quiet reliability is the point: gold is most valuable when it does not need to explain itself.',
    category: 'Gold',
    image_url: '/images/gold-reserve.svg',
    source: 'GoldVestia Research',
    date: '2026-05-08',
    created_at: '2026-05-08T00:00:00.000Z',
  },
  {
    id: 'silver-industrial-demand',
    slug: 'silver-industrial-demand',
    title: 'Silver demand intensifies across strategic industries',
    description:
      'A refined look at silver as both a monetary metal and an industrial asset with structural demand.',
    content:
      'Silver occupies a rare position between wealth preservation and industrial utility. It carries the monetary memory of a precious metal while participating directly in the technologies that define modern infrastructure, from electrification to medical equipment and advanced manufacturing.\n\nThis dual character creates a different investment rhythm than gold. Silver can respond to defensive flows, but it can also move with industrial optimism and supply chain pressure. For sophisticated investors, that makes the metal both useful and demanding: position sizing, entry discipline, and volatility tolerance matter more than narrative alone.\n\nDemand from electronics, solar, medical, and precision manufacturing continues to support a strategic case for selective exposure. Industrial users require reliability, and silver remains difficult to replace in many high-conductivity applications. At the same time, mine supply is often tied to broader base-metal production, which can make primary supply less responsive to price.\n\nThe result is a market where structural demand can meet constrained flexibility. That does not remove cyclicality, but it can create attractive asymmetry for investors who understand the difference between short-term price noise and long-term usage trends.\n\nFor investors, silver can complement gold by adding liquidity, growth sensitivity, and broader metals diversification. The most elegant allocation treats silver as a satellite position: smaller than the core reserve, but meaningful enough to benefit from industrial momentum.',
    category: 'Silver',
    image_url: '/images/silver-market.svg',
    source: 'Metals Desk',
    date: '2026-05-06',
    created_at: '2026-05-06T00:00:00.000Z',
  },
  {
    id: 'private-vault-custody',
    slug: 'private-vault-custody',
    title: 'How private vault custody supports confident allocations',
    description:
      'The operational standards that help precious metal investors preserve discretion, access, and control.',
    content:
      'Custody is a core part of any serious precious metals strategy. The purchase decision receives most of the attention, but the way metal is stored, insured, audited, and accessed often determines whether the allocation can perform its role under pressure.\n\nPrivate vault infrastructure gives investors a clearer framework for insurance, auditability, settlement, and long-term asset control. Allocated storage, independent verification, and transparent bar records help separate a real reserve position from a generic financial claim.\n\nDiscretion is another advantage. High-net-worth families and institutions often require privacy without sacrificing governance. A well-structured custody arrangement allows ownership records, reporting, and transfer processes to remain professional while avoiding unnecessary exposure.\n\nAccess also matters. Precious metals can be long-term holdings, but investors still need credible liquidity routes. The best custody partners understand settlement standards, documentation, and the practical requirements of moving from physical ownership to capital availability when the portfolio requires it.\n\nThe best custody experience is quiet and exacting: secure enough to protect capital, transparent enough to support decision-making, and discreet enough for private wealth. In premium metals investing, the vault is not an afterthought. It is part of the strategy.',
    category: 'Strategy',
    image_url: '/images/vault-strategy.svg',
    source: 'Custody Brief',
    date: '2026-05-02',
    created_at: '2026-05-02T00:00:00.000Z',
  },
  {
    id: 'platinum-luxury-industrial-resilience',
    slug: 'platinum-luxury-industrial-resilience',
    title: 'Platinum steps into luxury and industrial resilience',
    description:
      'How platinum balances scarcity, prestige, and industrial utility in a refined metals portfolio.',
    content:
      'Platinum has always carried a different kind of prestige. It is rarer than gold, tied to luxury craft, and embedded in industrial systems where performance standards leave little room for compromise. That combination gives the metal a distinctive role in a modern precious metals portfolio.\n\nThe investment case begins with scarcity. Platinum supply is geographically concentrated and operationally complex, which can make the market sensitive to mining disruption, energy costs, and policy changes. When demand improves, that supply structure can create a more pronounced pricing response than investors expect.\n\nIndustrial demand adds another layer. Automotive catalysts, hydrogen technologies, chemical processing, and specialized manufacturing continue to give platinum relevance beyond jewelry and investment bars. These use cases do not move in perfect harmony, but together they create a base of physical consumption that supports long-term attention.\n\nFor luxury investors, platinum also offers narrative elegance. It is not the obvious reserve asset, and that is part of its appeal. A measured allocation can express conviction in scarcity and industrial resilience without replacing the core role of gold.\n\nThe most balanced approach treats platinum as a specialist holding. It rewards patience, research, and an understanding of supply discipline. When placed correctly, platinum can add sophistication to a metals strategy that already has a strong foundation.',
    category: 'Platinum',
    image_url: '/images/vault-strategy.svg',
    source: 'Strategic Metals Review',
    date: '2026-04-30',
    created_at: '2026-04-30T00:00:00.000Z',
  },
  {
    id: 'palladium-supply-story',
    slug: 'palladium-supply-story',
    title: "Palladium's supply story reshapes elite metals strategies",
    description:
      'A concise view of palladium supply risk, demand transition, and portfolio discipline.',
    content:
      'Palladium is a metal of tension. It sits between legacy automotive demand, concentrated supply chains, and the gradual transition toward new mobility technologies. For investors, that tension creates both opportunity and the need for restraint.\n\nThe supply side remains central. Palladium production is concentrated across a limited group of regions and producers, and much of it arrives as a byproduct rather than from mines built only for palladium. That structure can limit the speed with which supply responds to changing price signals.\n\nDemand is more complex. Catalytic converters remain an important use case, but the long-term picture must account for vehicle mix, substitution, recycling flows, and policy-driven shifts. This does not make palladium irrelevant. It makes analysis more nuanced, especially for investors who prefer physical assets with clear strategic purpose.\n\nIn an elite metals portfolio, palladium should be treated as a high-conviction satellite rather than a default reserve. Its value is tied to scarcity and market imbalance, but its volatility can be substantial. A premium strategy respects both sides of that profile.\n\nThe strongest palladium allocation is intentional, sized with discipline, and reviewed against structural changes rather than daily headlines. It is a metal for investors who understand that scarcity alone is not a strategy, but scarcity combined with timing and custody can be powerful.',
    category: 'Palladium',
    image_url: '/images/gold-reserve.svg',
    source: 'Metals Desk',
    date: '2026-04-24',
    created_at: '2026-04-24T00:00:00.000Z',
  },
  {
    id: 'legacy-capital-metals-portfolio',
    slug: 'legacy-capital-metals-portfolio',
    title: 'Designing a blended precious metals portfolio for legacy capital',
    description:
      'A portfolio framework for investors using gold, silver, platinum, and palladium with purpose.',
    content:
      'Legacy capital requires a different investment vocabulary. The goal is not only return, but endurance, control, and the ability to transfer wealth through changing markets. Precious metals can support that mandate when they are placed inside a clear portfolio framework.\n\nGold usually forms the reserve core. It offers liquidity, recognition, and a long history as a store of value. Silver can add tactical flexibility and industrial exposure, while platinum and palladium introduce more specialized scarcity and supply-demand themes.\n\nThe art is in proportion. A blended metals portfolio should not become a collection of interesting ideas. It needs hierarchy: core reserve, complementary liquidity, specialist conviction, and custody rules that make ownership easy to verify and act upon.\n\nRebalancing is equally important. Metals can move in different cycles, and disciplined investors use those differences to maintain intended exposure. That process turns volatility into a governance tool rather than a source of emotional decision-making.\n\nA refined metals portfolio is quiet, transparent, and purposeful. It gives legacy capital a durable physical layer while leaving room for liquidity and strategic adjustment. In a world of fast-moving financial claims, that physical clarity can become a genuine advantage.',
    category: 'Strategy',
    image_url: '/images/silver-market.svg',
    source: 'GoldVestia Research',
    date: '2026-04-16',
    created_at: '2026-04-16T00:00:00.000Z',
  },
];

export async function fetchArticles(): Promise<Article[]> {
  'use cache';
  cacheLife('hours');
  cacheTag('articles');

  if (!isSupabaseConfigured) {
    return fallbackArticles;
  }

  try {
    const { data, error } = await supabase
      .from('articles')
      .select(
        'id, title, slug, description, content, category, image_url, source, date, created_at',
      )
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching articles:', error);
      return fallbackArticles;
    }

    return data && data.length > 0 ? data : fallbackArticles;
  } catch (error) {
    console.error('Unexpected error fetching articles:', error);
    return fallbackArticles;
  }
}

export async function fetchArticlesByCategory(category: string): Promise<Article[]> {
  'use cache';
  cacheLife('hours');
  cacheTag('articles');
  cacheTag(`articles:${category}`);

  if (!isSupabaseConfigured) {
    return fallbackArticles.filter((article) => article.category === category);
  }

  try {
    const { data, error } = await supabase
      .from('articles')
      .select(
        'id, title, slug, description, content, category, image_url, source, date, created_at',
      )
      .eq('category', category)
      .order('date', { ascending: false });

    if (error) {
      console.error(`Error fetching articles for category ${category}:`, error);
      return fallbackArticles.filter((article) => article.category === category);
    }

    return data && data.length > 0
      ? data
      : fallbackArticles.filter((article) => article.category === category);
  } catch (error) {
    console.error(`Unexpected error fetching articles for category ${category}:`, error);
    return fallbackArticles.filter((article) => article.category === category);
  }
}

export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  'use cache';
  cacheLife('hours');
  cacheTag('articles');
  cacheTag(`article:${slug}`);

  if (!isSupabaseConfigured) {
    return fallbackArticles.find((article) => article.slug === slug) || null;
  }

  try {
    const { data, error } = await supabase
      .from('articles')
      .select(
        'id, title, slug, description, content, category, image_url, source, date, created_at',
      )
      .eq('slug', slug)
      .single();

    if (error) {
      console.error(`Error fetching article with slug ${slug}:`, error);
      return fallbackArticles.find((article) => article.slug === slug) || null;
    }

    return data;
  } catch (error) {
    console.error(`Unexpected error fetching article with slug ${slug}:`, error);
    return fallbackArticles.find((article) => article.slug === slug) || null;
  }
}
