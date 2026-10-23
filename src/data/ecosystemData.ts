import { SectorItem } from '../types';

export const ECOSYSTEM_SECTORS: SectorItem[] = [
  {
    id: 'film-cinema',
    name: 'Film & Cinema',
    category: 'Core Content',
    description: 'The historic theatrical engine encompassing theatrical releases, single-screen circuits, multiplex chains, and independent cinematic productions across 12+ language industries.',
    stakeholders: ['Producers', 'Directors', 'Cinematographers', 'Exhibitors', 'Distributors', 'Writers'],
    sampleProblems: ['Opacity in box office reconciliation', 'Ballooning pre-production cash cycles', 'Single-screen obsolescence in tier-2/3 towns'],
    interconnectedSectors: ['OTT & Streaming', 'Music & Audio', 'Animation & VFX', 'Distribution & Exhibition'],
    regionalSignificance: 'Spans Bollywood (Hindi), Tollywood (Telugu), Kollywood (Tamil), Mollywood (Malayalam), Sandalwood (Kannada), and thriving regional circuits like Marathi and Bengali cinema.'
  },
  {
    id: 'ott-streaming',
    name: 'OTT & Streaming',
    category: 'Distribution & Digital',
    description: 'Global and domestic on-demand video platforms, regional niche subscription apps, and fast-growing AVOD ecosystems redefining episodic long-form entertainment.',
    stakeholders: ['Commissioning Editors', 'Showrunners', 'Data Scientists', 'Platform Executives', 'Dubbing Studios'],
    sampleProblems: ['Churn volatility following flagship drops', 'High acquisition cost for non-metro audiences', 'Unclear rights reversion terms for writers'],
    interconnectedSectors: ['Film & Cinema', 'Creator Economy', 'Post-Production', 'IP & Licensing'],
    regionalSignificance: 'Rapidly expanding penetration driven by regional language originals (South, East, and vernacular micro-dramas).'
  },
  {
    id: 'music-audio',
    name: 'Music & Audio',
    category: 'Core Content',
    description: 'Film playback music, independent indie labels, devotional catalog, folk traditions, and streaming platforms operating across diverse linguistic markets.',
    stakeholders: ['Composers', 'Lyricists', 'Singers', 'Music Labels', 'Publishing Societies', 'Sound Engineers'],
    sampleProblems: ['Mechanical and digital streaming royalty attribution lag', 'Standardized cue sheet inaccuracies in broadcast', 'Dispute over master ownership vs synchronization fees'],
    interconnectedSectors: ['Film & Cinema', 'OTT & Streaming', 'Live Events & Concerts', 'Podcasts & Radio'],
    regionalSignificance: 'Massive regional ecosystems from Punjabi hip-hop to Carnatic-electronic fusion, Bhojpuri pop, and Tamil indie.'
  },
  {
    id: 'gaming-esports',
    name: 'Gaming & Esports',
    category: 'Interactive Media',
    description: 'Mobile-first gaming studios, PC/console developers, esports tournaments, collegiate leagues, and game streaming communities.',
    stakeholders: ['Game Designers', 'Unity/Unreal Developers', 'Esports Athletes', 'Casters', 'Streamers', 'Publishers'],
    sampleProblems: ['Talent scarcity in senior technical gameplay designers', 'Monetization resistance outside micro-transactions', 'Regulatory ambiguity regarding skill vs chance games'],
    interconnectedSectors: ['Technology & AI', 'Creator Economy', 'Merchandising & Commerce', 'Live Events'],
    regionalSignificance: 'Tier-2 and tier-3 mobile gaming dominance, regional language game commentary (Hindi, Tamil, Bengali).'
  },
  {
    id: 'creator-economy',
    name: 'Creator Economy',
    category: 'Interactive Media',
    description: 'Independent individual creators, influencer agencies, multi-platform storytellers, vloggers, and digital comedy troupes crafting direct-to-audience culture.',
    stakeholders: ['Creators', 'Influencer Agents', 'Brand Marketers', 'Platform Algorithmic Teams', 'Editors'],
    sampleProblems: ['Severe algorithmic dependency and income unpredictability', 'Late payments from brand agencies (90-120 days)', 'Lack of institutional credit underwriting for creator businesses'],
    interconnectedSectors: ['Advertising & Brands', 'YouTube & Digital Video', 'Merchandising & Commerce', 'Podcasts & Radio'],
    regionalSignificance: 'Vernacular creators growing 3x faster than English creators across hyper-local Indian cultural nuances.'
  },
  {
    id: 'animation-vfx',
    name: 'Animation & VFX',
    category: 'Production & Technical',
    description: 'World-class visual effects facilities, character animation studios, pre-visualization suites, and virtual production volume stages servicing domestic blockbusters and global pipelines.',
    stakeholders: ['VFX Supervisors', '3D Modellers', 'Lighting Artists', 'Compositors', 'Pipeline TD Engineers'],
    sampleProblems: ['Brutal crunch cycles driven by locked release dates and last-minute edit revisions', 'Margin squeeze on fixed-bid contracts', 'Shortage of senior pipeline technical directors'],
    interconnectedSectors: ['Film & Cinema', 'Gaming & Esports', 'Technology & AI', 'Post-Production'],
    regionalSignificance: 'Major studio hubs in Hyderabad, Chennai, Mumbai, Bengaluru, and Pune.'
  },
  {
    id: 'live-events',
    name: 'Live Events & Concerts',
    category: 'Experience & Physical',
    description: 'Arena tours, music festivals, theatrical plays, stand-up comedy circuits, and college cultural fests delivering high-touch physical entertainment.',
    stakeholders: ['Event Promoters', 'Sound & Stage Techs', 'Venue Managers', 'Ticketing Platforms', 'Performers', 'Security Teams'],
    sampleProblems: ['Bureaucratic single-window permit delays involving 15+ civic departments', 'Last-minute venue cancellation risks', 'Severe shortage of certified rigging and live sound technicians'],
    interconnectedSectors: ['Music & Audio', 'Celebrity & Fan Communities', 'Tourism & Location', 'Sponsorship'],
    regionalSignificance: 'Surge in live ticketed tours in tier-2 cities like Ahmedabad, Kochi, Chandigarh, and Indore.'
  },
  {
    id: 'talent-casting',
    name: 'Talent & Casting Networks',
    category: 'Workforce & Talent',
    description: 'Casting directors, talent management agencies, audition boards, voice banks, and theatrical repertory networks connecting human capability with productions.',
    stakeholders: ['Casting Directors', 'Actors', 'Voice Artists', 'Guild Representatives', 'Talent Managers'],
    sampleProblems: ['Exploitative audition fee scams in unregulated hubs', 'Absence of verified unified credit verification registry', 'Barriers for non-metropolitan actors accessing casting calls'],
    interconnectedSectors: ['Film & Cinema', 'Television & Broadcasting', 'Advertising', 'Education & Skills'],
    regionalSignificance: 'Bridge needed between regional theatre repertories (e.g. NSD, Natak companies) and pan-India casting opportunities.'
  },
  {
    id: 'ip-licensing',
    name: 'IP & Licensing',
    category: 'Legal & Business',
    description: 'Literary rights managers, character licensing agencies, adaptation marketplaces, sync rights brokers, and trademark protectors.',
    stakeholders: ['IP Lawyers', 'Publishers', 'Rights Holders', 'Licensing Agents', 'Merchandisers'],
    sampleProblems: ['Ambiguous legacy contracts lacking digital/AI rights clauses', 'Cumbersome chain-of-title verification for adaptations', 'Lack of transparent secondary rights marketplace for regional books and scripts'],
    interconnectedSectors: ['Publishing & Adaptation', 'Film & Cinema', 'Merchandising & Commerce', 'OTT & Streaming'],
    regionalSignificance: 'Rich regional folklore, literature, and mythological IP awaiting ethical adaptation and monetization.'
  },
  {
    id: 'television-broadcast',
    name: 'Television & Broadcasting',
    category: 'Broadcast & Media',
    description: 'Linear satellite networks, free-to-air channels, regional news/entertainment broadcasters, and direct-to-home transmission networks reaching 900M+ viewers.',
    stakeholders: ['Broadcasters', 'Cable Operators', 'Daily Soap Producers', 'Showrunners', 'BARC Analysts'],
    sampleProblems: ['High carriage fees vs declining linear advertisement yield', 'Stringent daily telecast turnaround stresses on crews', 'Audience measurement volatility in rural zones'],
    interconnectedSectors: ['Film & Cinema', 'Advertising & Brands', 'Production Services'],
    regionalSignificance: 'Dominant regional television channels across Tamil, Telugu, Bangla, and Hindi heartlands.'
  },
  {
    id: 'advertising-brands',
    name: 'Advertising & Brand Partnerships',
    category: 'Commercial & Capital',
    description: 'Creative agencies, media buying houses, brand custodians, sponsorship directors, and branded content studios.',
    stakeholders: ['Brand Managers', 'Chief Marketing Officers', 'Creative Directors', 'Media Buyers'],
    sampleProblems: ['Attribution opacity in influencer marketing campaigns', 'Fragmented regional media buying intelligence', 'Payment terms stretching beyond 120 days to small production boutique vendors'],
    interconnectedSectors: ['Creator Economy', 'Television & Broadcasting', 'OTT & Streaming', 'Live Events'],
    regionalSignificance: 'Rising demand for culturally authentic regional language vernacular brand storytelling.'
  },
  {
    id: 'post-production',
    name: 'Post-Production',
    category: 'Production & Technical',
    description: 'Offline/online editorial suites, color grading DI studios, sound design and Dolby Atmos mixing stages, dubbing and mastering labs.',
    stakeholders: ['Colorists', 'Sound Designers', 'Offline Editors', 'Dubbing Directors', 'DI Conformists'],
    sampleProblems: ['Uncalibrated asset handover protocols leading to color/audio mismatches', 'Compressed turnaround times leading to 24-hour shifts', 'Lack of standard metadata handoffs across multi-vendor pipelines'],
    interconnectedSectors: ['Film & Cinema', 'OTT & Streaming', 'Animation & VFX'],
    regionalSignificance: 'Specialized grading and sound mixing hubs in Chennai, Mumbai, Hyderabad, and Kolkata.'
  },
  {
    id: 'youtube-digital-video',
    name: 'YouTube & Digital Video',
    category: 'Distribution & Digital',
    description: 'AVOD platforms, YouTube channels, short-video platforms, sketch comedy networks, and video news networks.',
    stakeholders: ['Channel Operators', 'Thumbnail Designers', 'Scriptwriters', 'Production Crews'],
    sampleProblems: ['Content copyright strikes without transparent human appeal', 'Fluctuating RPM rates for Indian vernacular content', 'Burnout among daily upload content teams'],
    interconnectedSectors: ['Creator Economy', 'Advertising & Brands', 'Technology & AI'],
    regionalSignificance: 'Vernacular channels in Bhojpuri, Haryanvi, Telugu, and Tamil generating multi-billion views.'
  },
  {
    id: 'podcasts-radio',
    name: 'Podcasts & Radio',
    category: 'Interactive Media',
    description: 'FM radio stations, audio storytelling apps, audiobooks, true-crime podcasts, and ambient soundscapes.',
    stakeholders: ['RJ/Voice Hosts', 'Audio Producers', 'Audiobook Narrators', 'Station Directors'],
    sampleProblems: ['Monetization bottleneck in non-English audio storytelling', 'Limited programmatic ad insertion infrastructure', 'High cost of high-quality voice talent vs ad rates'],
    interconnectedSectors: ['Music & Audio', 'Creator Economy', 'Publishing & Adaptation'],
    regionalSignificance: 'Enormous listener base for regional audio serialized fiction and horror dramas in Hindi, Tamil, and Bengali.'
  },
  {
    id: 'distribution-exhibition',
    name: 'Distribution & Exhibition',
    category: 'Distribution & Digital',
    description: 'Regional film sub-distributors, cinema owners, digital cinema service providers (Qube, UFO), and community screening circuits.',
    stakeholders: ['Exhibitors', 'Sub-distributors', 'Cinema Staff', 'Digital Cinema Integrators'],
    sampleProblems: ['Virtual Print Fee (VPF) friction between producers and theater owners', 'Lack of flexible screen allocation for small-budget regional films', 'High fixed energy costs for single-screen theatres'],
    interconnectedSectors: ['Film & Cinema', 'Regional Entertainment', 'Tourism & Location'],
    regionalSignificance: 'Over 6,000 single screens and 3,500 multiplex screens balancing pan-Indian tentpoles vs local gems.'
  },
  {
    id: 'festivals-cultural',
    name: 'Festivals & Cultural Events',
    category: 'Experience & Physical',
    description: 'International film festivals (IFFI, MAMI, IFFK), literature festivals, regional arts biennales, and community theatre fests.',
    stakeholders: ['Festival Curators', 'Independent Filmmakers', 'Cultural Delegates', 'Sponsorship Directors'],
    sampleProblems: ['Funding volatility and sponsorship dependency', 'Disconnection between festival accolades and commercial distribution deals', 'Logistical bottlenecks in screening rights management'],
    interconnectedSectors: ['Film & Cinema', 'Live Events & Concerts', 'Tourism & Location'],
    regionalSignificance: 'Iconic festivals in Kerala (IFFK), Goa (IFFI), Mumbai (MAMI), Jaipur (JLF), and Kolkata.'
  },
  {
    id: 'celebrity-fan-communities',
    name: 'Celebrity & Fan Communities',
    category: 'Community & Audience',
    description: 'Organized fan clubs, digital superfan clubs, grassroots welfare associations linked to stars, and community-driven promotions.',
    stakeholders: ['Fan Club Presidents', 'Community Managers', 'Digital Superfans', 'Publicists'],
    sampleProblems: ['Risk of coordinated online toxicity and brand harm', 'Lack of structured value exchange between creators and superfans', 'Unvetted fan merchandise bootlegging'],
    interconnectedSectors: ['Creator Economy', 'Merchandising & Commerce', 'Film & Cinema'],
    regionalSignificance: 'Unique phenomenon of South Indian star fan associations driving massive welfare drives and opening day celebrations.'
  },
  {
    id: 'production-services',
    name: 'Production Services & Logistics',
    category: 'Production & Technical',
    description: 'Equipment rental houses (cameras, lights, grips, generators), outdoor catering, vanity vans, line management, and location scouting.',
    stakeholders: ['Equipment Rental Owners', 'Line Producers', 'Catering Heads', 'Transport Coordinators'],
    sampleProblems: ['Aging equipment fleets due to steep import duties', 'Severe payment defaults and uncompensated equipment damage on set', 'Lack of transparent standardized equipment rates and insurance'],
    interconnectedSectors: ['Film & Cinema', 'Television & Broadcasting', 'Advertising & Brands'],
    regionalSignificance: 'Extensive production ecosystems in Mumbai, Hyderabad (Ramoji Film City), Chennai, and emerging hubs in Assam and Uttarakhand.'
  },
  {
    id: 'merchandising-commerce',
    name: 'Merchandising & Commerce',
    category: 'Commercial & Capital',
    description: 'Direct-to-consumer apparel, collectible figurines, comic adaptations, character gaming skins, and thematic merchandise.',
    stakeholders: ['Merchandise Designers', 'D2C Supply Chain Managers', 'Licensing Brokers'],
    sampleProblems: ['Widespread counterfeit manufacturing undermining legitimate rights holders', 'Small minimum order quantities making domestic manufacturing expensive', 'Underdeveloped retail distribution for character merchandise'],
    interconnectedSectors: ['IP & Licensing', 'Gaming & Esports', 'Celebrity & Fan Communities'],
    regionalSignificance: 'Rapidly emerging anime and Indian superhero merchandise appetite among Gen Z.'
  },
  {
    id: 'entertainment-education',
    name: 'Entertainment Education & Skills',
    category: 'Workforce & Talent',
    description: 'Film institutes (FTII, SRFTI, Whistling Woods), sound academies, acting institutes, VFX finishing schools, and vocational polytechnics.',
    stakeholders: ['Educators', 'Students', 'Industry Mentors', 'Curriculum Designers'],
    sampleProblems: ['Outdated curriculum disconnected from real-world digital workflows (virtual production, AI)', 'Exorbitant tuition fees vs modest starting wages for crew', 'Absence of standardized skill certifications recognized by unions'],
    interconnectedSectors: ['Talent & Casting', 'Animation & VFX', 'Technology & AI'],
    regionalSignificance: 'Institutes in Pune, Kolkata, Mumbai, Chennai, and Noida training the next generation.'
  },
  {
    id: 'technology-ai',
    name: 'Technology & AI',
    category: 'Technology & Innovation',
    description: 'Generative AI tools, dubbing and localization software, automated metadata tagging, workflow orchestration software, and digital rights management.',
    stakeholders: ['AI Engineers', 'Tech Founders', 'Product Managers', 'Ethics Reviewers'],
    sampleProblems: ['Threat of voice and likeness cloning without consent or remuneration', 'Absence of Indian linguistic nuance in foundational AI models', 'Integration friction with legacy production workflows'],
    interconnectedSectors: ['Post-Production', 'OTT & Streaming', 'IP & Licensing', 'Gaming & Esports'],
    regionalSignificance: 'Crucial for translating and dubbing Indian entertainment across 22 official languages.'
  },
  {
    id: 'investment-financing',
    name: 'Investment & Financing',
    category: 'Commercial & Capital',
    description: 'Film funds, venture debt providers, private equity, completion bond underwriters, family offices, and co-production treaties.',
    stakeholders: ['Investors', 'Completion Guarantors', 'Financial Auditors', 'Studio CFOs'],
    sampleProblems: ['High risk premium due to historical lack of project auditability', 'Absence of standardized completion bonds for mid-tier Indian films', 'Opaque box office reporting hindering institutional debt financing'],
    interconnectedSectors: ['Film & Cinema', 'OTT & Streaming', 'IP & Licensing'],
    regionalSignificance: 'Transition from informal high-interest financier networks to structured corporate film funds.'
  },
  {
    id: 'regional-independent',
    name: 'Regional & Independent Entertainment',
    category: 'Core Content',
    description: 'Non-metro cinema, indie documentary makers, grassroots cultural storytellers, and micro-budget regional films exploring local realities.',
    stakeholders: ['Independent Filmmakers', 'Regional Playwrights', 'Grassroots Documentarians', 'Crowdfunders'],
    sampleProblems: ['Virtually zero marketing budgets against mega-budget spectacles', 'Exhibition gatekeeping starving indie films of prime showtimes', 'High cost of theatrical distribution delivery deliverables (DCP, censor fees)'],
    interconnectedSectors: ['Film & Cinema', 'Festivals & Cultural', 'OTT & Streaming'],
    regionalSignificance: 'Heartbeat of authentic cultural storytelling: Assamese, Odia, Gujarati, Konkani, Kashmiri, Dogri, and Santhali.'
  },
  {
    id: 'sports-entertainment',
    name: 'Sports Entertainment',
    category: 'Experience & Physical',
    description: 'Premier cricket leagues (IPL, WPL), kabaddi leagues (PKL), football (ISL), wrestling spectacles, and sports documentary docuseries.',
    stakeholders: ['League Organizers', 'Broadcast Directors', 'Sports Anchors', 'Athlete Managers'],
    sampleProblems: ['Astronomical media rights inflation squeezing broadcaster profitability', 'Production logistics across 10+ concurrent stadiums in summer', 'Anti-piracy enforcement against illegal streaming relays'],
    interconnectedSectors: ['Television & Broadcasting', 'OTT & Streaming', 'Advertising & Brands'],
    regionalSignificance: 'Multilingual regional sports broadcasts driving highest concurrent viewership in streaming history.'
  },
  {
    id: 'publishing-adaptation',
    name: 'Publishing & Adaptation',
    category: 'Core Content',
    description: 'Indian vernacular book publishing, graphic novel studios, comic books, web novel platforms, and literary agency desks.',
    stakeholders: ['Authors', 'Literary Agents', 'Commissioning Editors', 'Screenwriters'],
    sampleProblems: ['Absence of organized literary-to-screen agency representation in India', 'Low author royalty transparency from physical distribution networks', 'Underfunded screenwriting adaptation writers rooms'],
    interconnectedSectors: ['Film & Cinema', 'OTT & Streaming', 'IP & Licensing'],
    regionalSignificance: 'Priceless repository of Bengali, Malayalam, Tamil, Marathi, and Hindi literary classics.'
  },
  {
    id: 'tourism-location',
    name: 'Tourism & Location-Based Experiences',
    category: 'Experience & Physical',
    description: 'Film tourism circuits, state film facilitation offices, heritage palace shoots, studio tours, and themed experiential parks.',
    stakeholders: ['State Film Commissioners', 'Tourism Officers', 'Location Managers', 'Local Communities'],
    sampleProblems: ['Red tape across state forestry, archaeological, and municipal clearances', 'Unpredictable local unofficial "facilitation fees"', 'Lack of infrastructure to accommodate 200+ member crews in remote beauty spots'],
    interconnectedSectors: ['Film & Cinema', 'Production Services', 'Live Events & Concerts'],
    regionalSignificance: 'Film promotion policies in Jammu & Kashmir, Rajasthan, Kerala, Madhya Pradesh, and Uttar Pradesh.'
  }
];

export const CROSS_SECTOR_CHAINS = [
  {
    id: 'chain-1',
    title: 'Music → Film → Streaming → Licensing → Royalties → Live Performance',
    description: 'How an original melody travels from an independent composer to a regional theatrical film, onto global streaming algorithms, into brand sync licensing, through royalty clearinghouses, and finally into stadium tours.',
    nodes: ['Music & Audio', 'Film & Cinema', 'OTT & Streaming', 'IP & Licensing', 'Live Events & Concerts'],
    insight: 'Friction at step 4 (IP & Licensing) frequently strangles cash flow to composers for up to 18 months, choking live tour reinvestment.'
  },
  {
    id: 'chain-2',
    title: 'Creator Economy → Brands → Agencies → Audience Communities → Commerce',
    description: 'How a vernacular video creator builds hyper-local trust, attracts national brand interest, navigates multi-tier agency markups, and turns follower affection into sustainable commerce.',
    nodes: ['Creator Economy', 'Advertising & Brands', 'Celebrity & Fan Communities', 'Merchandising & Commerce'],
    insight: '90-120 day payment lag from brand agencies forces creators into predatory short-term loans or unsustainable burnout cadences.'
  },
  {
    id: 'chain-3',
    title: 'Regional IP → Localization → Tech & AI → Distribution → Diaspora Audiences',
    description: 'How an Assamese or Malayalam folk narrative undergoes ethical screen adaptation, AI-assisted multilingual dubbing, quality human review, and worldwide diaspora streaming.',
    nodes: ['Publishing & Adaptation', 'Regional Entertainment', 'Technology & AI', 'Distribution & Exhibition', 'OTT & Streaming'],
    insight: 'Without structured metadata standards, regional linguistic nuance is corrupted during automated subtitles, capping overseas discovery.'
  }
];

export const REGIONAL_ECOSYSTEM_DATA = [
  {
    region: 'Hindi Heartland (Bollywood & Digital)',
    languages: ['Hindi', 'Urdu', 'Hindustani'],
    characteristics: 'Large budget tentpoles, centralized OTT production hub in Mumbai, massive digital creator migration, linear TV daily soap dominance.',
    investigativeNeed: 'Reducing pre-production overheads, structured writers room credits, and transparent OTT metric evaluation.'
  },
  {
    region: 'Telugu Cinema & Streaming (Tollywood)',
    languages: ['Telugu'],
    characteristics: 'Scale spectacles with highest theatrical footfalls in India, deep fan club welfare networks, state-of-the-art studio facilities in Hyderabad.',
    investigativeNeed: 'Mitigating skyrocketing star fees, single-screen viability, and technical crew wage safety standards.'
  },
  {
    region: 'Tamil Cinema & Indie Audio (Kollywood)',
    languages: ['Tamil'],
    characteristics: 'Artistic storytelling balance, world-renowned indie and film music ecosystem, strong diaspora theatrical circuits across SE Asia and Europe.',
    investigativeNeed: 'Global royalty attribution for lyricists, overseas theatrical distribution transparency, and digital cinema virtual print fees.'
  },
  {
    region: 'Malayalam Cinema (Mollywood)',
    languages: ['Malayalam'],
    characteristics: 'Globally celebrated for high-concept screenwriting, modest budgets with outsized ROI, rapid streaming discovery, robust film festival culture.',
    investigativeNeed: 'Scaling distribution without losing narrative authenticity, addressing workplace safety standards (Hema Committee context), and post-theatrical windowing.'
  },
  {
    region: 'Kannada Cinema (Sandalwood)',
    languages: ['Kannada'],
    characteristics: 'High-octane pan-Indian blockbusters alongside rich independent theatrical traditions, flourishing Bengaluru VFX and tech convergence.',
    investigativeNeed: 'Local screen allocation balance against incoming multi-lingual releases, and strengthening writing talent pipelines.'
  },
  {
    region: 'Bengali Entertainment (Tollywood East)',
    languages: ['Bengali'],
    characteristics: 'Deep heritage of auteur cinema, prolific literary adaptations, thriving theatrical drama culture in Kolkata, rapidly growing regional OTT platforms.',
    investigativeNeed: 'Modernizing post-production technical infrastructure, capital access for mid-budget directors, and digital preservation of heritage cinema archives.'
  },
  {
    region: 'Marathi Cinema & Theatre',
    languages: ['Marathi'],
    characteristics: 'Strongest live commercial theatre tradition in the country, socially conscious cinema, national award-winning filmmakers.',
    investigativeNeed: 'Prime-time multiplex screen protection amidst Bollywood competition, and digital monetization of iconic theatrical plays.'
  },
  {
    region: 'Punjabi Music & Film',
    languages: ['Punjabi'],
    characteristics: 'Global pop powerhouse commanding billions of streams, thriving overseas theatrical circuits in North America, UK, and Australia.',
    investigativeNeed: 'Music label contract parity for emerging lyricists, IP protection against unauthorized remixes, and security for live performers.'
  },
  {
    region: 'Bhojpuri & Eastern Vernacular',
    languages: ['Bhojpuri', 'Maithili', 'Magahi'],
    characteristics: 'Massive YouTube and digital video viewership numbering hundreds of millions, hyper-vibrant music industry, high volume releases.',
    investigativeNeed: 'Formalizing studio production safety, combating digital piracy, and elevating content production values to unlock institutional brand sponsorships.'
  },
  {
    region: 'Northeast India & Indigenous Storytelling',
    languages: ['Assamese', 'Manipuri', 'Khasi', 'Mizo', 'Bodo'],
    characteristics: 'Intensely nuanced regional storytelling, international festival acclaim, rich indigenous musical heritage.',
    investigativeNeed: 'Bridging national exhibition distribution choke points, establishing high-end digital mastering labs, and preserving indigenous folklore rights.'
  }
];
