import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Layers, 
  Sparkles, 
  Laptop, 
  ShoppingBag, 
  Trophy, 
  Zap, 
  CheckCircle, 
  X, 
  Menu, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  Phone, 
  Database,
  Shield,
  RefreshCw,
  Send,
  FileCode,
  Server,
  Terminal,
  Grid,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ==========================================
// DATA STRUCTURES & CONSTANTS
// ==========================================

interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'devops';
  level: number;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'frontend' | 'backend' | 'fullstack';
  tags: string[];
  image: string;
  features: string[];
  whatsappMessage: string;
  liveUrl?: string;
}

interface ProgrammingLanguage {
  id: string;
  name: string;
  level: number;
  icon: React.ReactNode;
  concept: string;
  useCase: string;
  codeSnippet: string;
  color: string;
}

// 1. Technical Stack Skills
const SKILLS: Skill[] = [
  // Frontend
  { id: '1', name: 'React 19 & Next.js Core', category: 'frontend', level: 96 },
  { id: '2', name: 'TypeScript', category: 'frontend', level: 95 },
  { id: '3', name: 'Tailwind CSS Engine v4', category: 'frontend', level: 98 },
  { id: '4', name: 'Asynchronous State (Zustand)', category: 'frontend', level: 92 },
  { id: '5', name: 'Accessible Semantics / WCAG', category: 'frontend', level: 90 },

  // Backend
  { id: '6', name: 'Node.js & Express.js APIs', category: 'backend', level: 94 },
  { id: '7', name: 'Relational DBMS (PostgreSQL)', category: 'backend', level: 90 },
  { id: '8', name: 'Secure JWT Authorization', category: 'backend', level: 93 },
  { id: '9', name: 'Middleware Validation Rules', category: 'backend', level: 95 },
  { id: '10', name: 'Caching Systems (Redis)', category: 'backend', level: 85 },

  // Design / Architecture
  { id: '11', name: 'Figma to Code Transition', category: 'design', level: 96 },
  { id: '12', name: 'Interactive UI Mockups', category: 'design', level: 95 },
  { id: '13', name: 'Contrast & Spatial Grids', category: 'design', level: 94 },

  // DevOps / Deploy
  { id: '14', name: 'Docker Containers', category: 'devops', level: 88 },
  { id: '15', name: 'CI/CD Pipelines Workflow', category: 'devops', level: 85 },
  { id: '16', name: 'SSL & Domain Gateway Routes', category: 'devops', level: 92 },
];

// 2. Portfolio Project Realities
const PROJECTS: Project[] = [
  {
    id: 'world-savoury',
    title: 'World Savoury',
    subtitle: 'Artisan Bakery & Patisserie',
    description: 'A complete premium full-stack digital storefront and ordering machine built for World Savoury Bakery. Synchronizes oven-fresh culinary catalogs with secure backend databases, processes active customer cart states, and processes secure orders with seamless layout animations.',
    category: 'fullstack',
    tags: ['React 19', 'Express.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    features: [
      'Multi-cuisine baking collections connected to a safe relational store',
      'Stunning high-resolution graphic cards and secure administrative backend filters',
      'Express.js order routing pipelines handling instant client-side checkout submissions',
      'Zero latency responsive interface structure with robust PostgreSQL database persistence'
    ],
    whatsappMessage: 'Bonjour Israa! I love your World Savoury fullstack bakery platform on your portfolio:',
    liveUrl: 'https://israaazzi2008-jpg.github.io/worldsavoury/'
  },
  {
    id: 'gourmet-bakery',
    title: 'Maison du Grain',
    subtitle: 'Artisan Bakery Ordering Engine',
    description: 'A complete dynamic digital storefront built for a French-style artisan bakery. Users can custom-configure cake options, add bread items to a real-time reactive shopping cart, and submit structural orders instantly processed via automated WhatsApp integration.',
    category: 'frontend',
    tags: ['React 19', 'Tailwind CSS', 'Interactive State', 'WhatsApp Routing'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    features: [
      'Interactive baked goods customizer with instant reactive pricing',
      'Advanced client-side state management syncing selection with dynamic cart',
      'Pre-formatted direct brief compiled to send seamlessly to bakery operators via WhatsApp',
      'Sub-200ms page load delivery optimized via image lazy-loading strategies'
    ],
    whatsappMessage: 'Bonjour Maison du Grain! I configured an artisan bakery order on your portfolio:'
  },
  {
    id: 'b2b-dashboard',
    title: 'ScaleFlow CRM & Analytics',
    subtitle: 'High-Performance Enterprise Dashboard',
    description: 'A sophisticated client portal and operations dashboard enabling businesses to monitor user behaviors and track sales metrics. Built with complex charting engines, multi-layer filters, and advanced layout design matching clean physical visual grids.',
    category: 'fullstack',
    tags: ['Node.js API', 'React 19', 'Zustand State', 'D3 Aggregators'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    features: [
      'Secure middleware verifying incoming API calls under rapid traffic loads',
      'Unified data pipelines calculating multiple business metrics on the fly',
      'Dynamic PDF or quote export generated complete in client-side secure code',
      'Flawless dark/light contrast balancing designed with high spatial precision'
    ],
    whatsappMessage: 'Hello Israa, I am interested in building a high-fidelity business dashboard:'
  },
  {
    id: 'rest-gateway',
    title: 'Nexus Sync Gateway',
    subtitle: 'Flexible Multi-Service REST API Boilerplate',
    description: 'A robust production-ready API gateway and database proxy built with Express, PostgreSQL, and Redis caching. Resolves high-load bottlenecks by indexing heavy queries and serving client requests instantly with meticulous authorization checks.',
    category: 'backend',
    tags: ['Express.js', 'PostgreSQL', 'Redis Cache', 'JWT Auths'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    features: [
      'Token-based request validation ensuring secure client endpoint communication',
      'Intelligent routing rules handling database operations without server blocks',
      'Integrated stress tests simulating concurrent loads of up to 10k requests per second',
      'Robust error handling and logging capturing diagnostic traces instantly'
    ],
    whatsappMessage: 'Hello Israa, I want to collaborate on building a high-load custom backend API:'
  }
];

// 3. Programming Languages Mastered Array
const PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
  {
    id: 'typescript',
    name: 'TypeScript',
    level: 96,
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    concept: 'Strong structural typing guaranteeing secure data shapes across full-stack websites.',
    useCase: 'Primary language for fast frontends and secure backends, catching static errors before compilation or execution.',
    codeSnippet: `// Unified Full-Stack Interface Handshake
interface ServerResponse<T> {
  status: "success" | "error";
  statusCode: number;
  data: T;
  timestamp: string;
}

export function handleRequest<T>(payload: T): ServerResponse<T> {
  return {
    status: "success",
    statusCode: 200,
    data: payload,
    timestamp: new Date().toISOString(),
  };
}`,
    color: 'text-blue-400 border-blue-500/20 bg-blue-500/5'
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    level: 98,
    icon: <FileCode className="w-5 h-5 text-amber-400" />,
    concept: 'Highly asynchronous script execution enabling fluid layouts and fast dynamic reactions.',
    useCase: 'Core implementation engine for browser events, reactive animations, asynchronous fetches, and node middleware checks.',
    codeSnippet: `// Asynchronous client checkout pipeline
async function processDirectOrder(cartItems) {
  try {
    const response = await fetch('/api/v1/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartItems })
    });
    return await response.json();
  } catch (error) {
    console.error('Order processing failed:', error);
  }
}`,
    color: 'text-amber-400 border-amber-500/20 bg-amber-500/5'
  },
  {
    id: 'python',
    name: 'Python',
    level: 90,
    icon: <Terminal className="w-5 h-5 text-sky-400" />,
    concept: 'Clean, highly legible layout structuring powerful helper packages and statistical algorithms.',
    useCase: 'Constructing server-side utility automation, secure mock models testing, script processes, and data cleanup.',
    codeSnippet: `# Fully secure backend message formatter
def format_whatsapp_payload(buyer_name, cart_total):
    sanitized_name = buyer_name.strip().title()
    formatted_total = f"€{cart_total:.2f}"
    return {
        "client": sanitized_name,
        "amount": formatted_total,
        "status": "PROCESSED_SUCCESSFULLY"
    }`,
    color: 'text-sky-400 border-sky-500/20 bg-sky-500/5'
  },
  {
    id: 'sql',
    name: 'SQL (PostgreSQL)',
    level: 92,
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    concept: 'Efficient query plans indexing client datasets and records relations with robust data integrity.',
    useCase: 'Structuring databases schemas, optimizing database indexing schemes, and composing heavy join triggers safely.',
    codeSnippet: `-- Optimized order metrics profiling
SELECT 
    users.id as user_id, 
    users.email, 
    COUNT(orders.id) as total_contracts
FROM users 
INNER JOIN orders ON users.id = orders.user_id 
WHERE orders.status = 'COMPLETED' 
GROUP BY users.id 
ORDER BY total_contracts DESC;`,
    color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5'
  },
  {
    id: 'html-css',
    name: 'HTML5 & CSS3 (Tailwind)',
    level: 98,
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    concept: 'Fluid layout layers, optimized component metrics, and strict adherence to responsive spatial rules.',
    useCase: 'Forming modern responsive viewports, clean accessibility wrappers, and robust micro-interactions.',
    codeSnippet: `<!-- Accessible High-Contrast Card Structure -->
<article 
  class="relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all focus-within:ring-2"
  aria-labelledby="card-title"
>
  <h3 id="card-title" class="text-lg font-bold text-white tracking-tight">
    Responsive Interface Card
  </h3>
  <p class="text-xs text-slate-400 mt-2">
    Fully optimized accessible typography pairing.
  </p>
</article>`,
    color: 'text-purple-400 border-purple-500/20 bg-purple-500/5'
  }
];

// ==========================================
// MOTION ANIMATION VARIANTS FOR INTERESTING ENTER
// ==========================================
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const heroBadgeVariants = {
  hidden: { opacity: 0, scale: 0.85, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const heroButtonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 15,
      mass: 0.9
    }
  }
};

const heroStatsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

export default function App() {
  // Preloader / intro state
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderProgress, setPreloaderProgress] = useState(0);
  const [currentLoaderMessage, setCurrentLoaderMessage] = useState('INTEGRATION_SYNC_START...');

  // Mobile nav drawer open state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active navigation section state for scroll tracking
  const [activeSection, setActiveSection] = useState('home');

  // Selected categories filters
  const [selectedSkillCat, setSelectedSkillCat] = useState<'all' | 'frontend' | 'backend' | 'design' | 'devops'>('all');
  const [selectedProjectCat, setSelectedProjectCat] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');

  // Project details overlay state
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  // Active language selected in Programming Languages Showcase
  const [activeLangId, setActiveLangId] = useState<string>('typescript');

  // Copy code indicator
  const [codeCopied, setCodeCopied] = useState(false);

  // Interactive bakery customized calculator states
  const [bakeryProductType, setBakeryProductType] = useState<'cake' | 'bread' | 'pastry'>('cake');
  const [bakeryCakeSize, setBakeryCakeSize] = useState<number>(6); // inches
  const [bakeryQuantity, setBakeryQuantity] = useState<number>(1);
  const [bakeryNotes, setBakeryNotes] = useState<string>('');
  const [bakeryCart, setBakeryCart] = useState<Array<{id: string, name: string, total: number, qty: number}>>([]);
  const [bakeryTotalSum, setBakeryTotalSum] = useState<number>(0);

  // Contact messaging form coordinates state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  // Dynamic compiler/preloader simulator ticker effect
  useEffect(() => {
    const messages = [
      'SYS_INIT: Booting full-stack website portfolio environment...',
      'SYS_LOC: Establishing contact servers for Ain Temouchent, Algeria...',
      'SYS_CERT: Injecting AI & Machine Learning specialized credentials...',
      'SYS_CERT: Injecting Robotics & Arduino parameters...',
      'SYS_CERT: Compiling AI Automation & Vibe Coding logic systems...',
      'SYS_PORT: Querying worldsavoury Gastronomy Explorer project records...',
      'SYS_OK: Deep-linking WhatsApp gateway +213 657 936 584...',
      'LOAD_COMPLETED: Web interface ready. Handshake validated.'
    ];

    const timer = setInterval(() => {
      setPreloaderProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(timer);
          setCurrentLoaderMessage(messages[messages.length - 1]);
          setTimeout(() => {
            setShowPreloader(false);
          }, 800);
          return 100;
        }
        
        const msgIdx = Math.min(Math.floor((next / 100) * messages.length), messages.length - 2);
        setCurrentLoaderMessage(messages[msgIdx]);
        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Lock body scroll while loader is visible
  useEffect(() => {
    if (showPreloader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPreloader]);

  // Tracking Scroll Activities to update Navigation link selections
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'languages', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync bakery order sum calculator
  useEffect(() => {
    let pricePerUnit = 12;
    if (bakeryProductType === 'cake') {
      pricePerUnit = bakeryCakeSize * 4;
    } else if (bakeryProductType === 'bread') {
      pricePerUnit = 4;
    } else {
      pricePerUnit = 3.5;
    }
    const calculation = pricePerUnit * bakeryQuantity;
    setBakeryTotalSum(calculation);
  }, [bakeryProductType, bakeryCakeSize, bakeryQuantity]);

  // Handle adding custom items to live bakery checkout state
  const handleAddBakeryToCart = () => {
    let itemName = '';
    if (bakeryProductType === 'cake') {
      itemName = `${bakeryCakeSize}-inch Custom Celebration Cake`;
    } else if (bakeryProductType === 'bread') {
      itemName = 'Artisan Sourdough Loaf';
    } else {
      itemName = 'Gourmet French Pastry Bundle';
    }
    
    if (bakeryNotes.trim()) {
      itemName += ` (${bakeryNotes.trim()})`;
    }

    const newItem = {
      id: Date.now().toString(),
      name: itemName,
      total: bakeryTotalSum,
      qty: bakeryQuantity
    };

    setBakeryCart((prev) => [...prev, newItem]);
    setBakeryNotes('');
    setBakeryQuantity(1);
  };

  // Remove bakery item
  const handleRemoveBakeryItem = (id: string) => {
    setBakeryCart((prev) => prev.filter(item => item.id !== id));
  };

  // Compile entire bakery cart into WhatsApp link
  const handleLaunchBakeryWhatsApp = () => {
    if (bakeryCart.length === 0) return;
    let text = `Bonjour Maison du Grain! I am placing a personalized bakery checkout:\n\n`;
    let cartTotalSum = 0;
    bakeryCart.forEach((item, index) => {
      text += `${index + 1}. ${item.name} | Qty: ${item.qty} | €${item.total}\n`;
      cartTotalSum += item.total;
    });
    text += `\n*Grand Total Balance:* €${cartTotalSum}\n\nProcessed securely via Portfolio Hub.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/213657936584?text=${encoded}`, '_blank');
  };

  // Simulate contact form submission pointing to WhatsApp Handshake
  const handlesSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    
    // Smooth WhatsApp routing trigger compilation
    setTimeout(() => {
      const summaryText = `Hello Israa! I reviewed your engineering portfolio. Here are my project specifications:\n\n` + 
                          `*Organization:* ${contactName}\n` + 
                          `*Contact Email:* ${contactEmail}\n` + 
                          `*System parameters:* ${contactMessage}\n\n` + 
                          `Let's coordinate a strategy sync route.`;
      const encodedUrl = encodeURIComponent(summaryText);
      setContactSuccess(false);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      window.open(`https://wa.me/213657936584?text=${encodedUrl}`, '_blank');
    }, 1800);
  };

  // Filter lists
  const filteredSkills = selectedSkillCat === 'all' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === selectedSkillCat);

  const filteredProjects = selectedProjectCat === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedProjectCat);

  // Active language details
  const activeLanguage = PROGRAMMING_LANGUAGES.find(l => l.id === activeLangId) || PROGRAMMING_LANGUAGES[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeLanguage.codeSnippet);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      
      {/* Dynamic Intro Console Preloader */}
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.6, ease: 'easeOut' } }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-6 text-slate-100 selection:bg-none"
            id="intro_compiler_preloader"
          >
            {/* Ambient glows */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] animate-pulse" />
            
            <div className="max-w-md w-full space-y-8 text-center relative z-10">
              {/* Glowing Icon */}
              <div className="flex justify-center">
                <div className="p-4 bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-500/25 rounded-2xl shadow-xl shadow-blue-500/5 animate-pulse">
                  <Cpu className="w-10 h-10 text-blue-500" />
                </div>
              </div>

              {/* Title brand typography */}
              <div className="space-y-2">
                <h1 className="text-lg font-bold tracking-[0.25em] text-white uppercase font-mono">
                  SYS_BOOTING_PORTAL...
                </h1>
                <p className="text-[9px] font-bold tracking-[0.3em] text-blue-550 uppercase font-mono">
                  COMPILATION ACTIVE
                </p>
              </div>

              {/* Progress dynamic percentage slider */}
              <div className="max-w-[240px] mx-auto space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span className="tracking-widest">LOADING WEB SPHERE</span>
                  <span className="font-extrabold text-blue-400">{preloaderProgress}%</span>
                </div>
                
                <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden p-0 border border-slate-800">
                  <motion.div 
                    className="bg-blue-500 h-full rounded-full"
                    style={{ width: `${preloaderProgress}%` }}
                    transition={{ ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* ==========================================
          HEADER NAVIGATION CONTROLLERS
          ========================================== */}
      <header className="fixed top-0 left-0 w-full z-45 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 transition-colors" id="nav_header">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          
          {/* Main profile brand logotype */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none" id="brand_launcher">
            <div className="p-2 bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white rounded-xl border border-blue-500/20 transition-all duration-300">
              <Cpu className="w-5 h-5 text-current animate-pulse" />
            </div>
            <div>
              <span className="text-sm font-black text-white tracking-widest uppercase block">
                ISRAA AZZI
              </span>
              <span className="text-[10px] font-extrabold tracking-widest text-slate-450 uppercase block">
                Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop inline routing list */}
          <nav className="hidden lg:flex items-center gap-1" id="desktop_layout_nav">
            {[
              { id: 'about', label: 'Profile' },
              { id: 'skills', label: 'Technical Stack' },
              { id: 'services', label: 'Services' },
              { id: 'projects', label: 'Projects' },
              { id: 'languages', label: 'Languages Mastered' },
              { id: 'contact', label: 'Get in Touch' },
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 outline-none ${
                  activeSection === section.id
                    ? 'text-white bg-slate-900 border border-slate-800'
                    : 'text-slate-450 hover:text-white hover:bg-slate-900/40 border border-transparent'
                }`}
                id={`nav_link_${section.id}`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          {/* Core WhatsApp Direct Launcher */}
          <div className="hidden sm:block">
            <a
              href="https://wa.me/213657936584"
              target="_blank"
              className="py-2.5 px-5 bg-blue-600 hover:bg-blue-500 active:translate-y-0.5 text-xs font-black uppercase tracking-wider text-white rounded-full flex items-center gap-2 transition-all shadow-md shadow-blue-500/15 focus:outline-none"
              id="header_quick_whatsapp_action"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Mobile hamburger navigation button switch */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-all border border-transparent focus:border-slate-800 outline-none"
            id="mobile_hamburger_toggle"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </header>

      {/* Mobile structural routing drawer modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" id="mobile_floating_drawer_wrapper">
            {/* Dark glass backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm"
            />

            {/* Content Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-slate-950 border-l border-slate-900 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-slate-900">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-blue-500" />
                    <span className="text-xs font-black text-white tracking-widest uppercase">Israa</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 hover:bg-slate-900 text-slate-450 hover:text-white rounded-lg transition-colors border border-slate-900 focus:outline-none"
                    aria-label="Close drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-3 mt-8">
                  {[
                    { id: 'about', label: 'Profile' },
                    { id: 'skills', label: 'Technical Stack' },
                    { id: 'services', label: 'Services' },
                    { id: 'projects', label: 'Projects' },
                    { id: 'languages', label: 'Languages Mastered' },
                    { id: 'contact', label: 'Get in Touch' },
                  ].map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`p-4 rounded-xl text-sm font-bold uppercase tracking-wider text-left transition-all ${
                        activeSection === section.id
                          ? 'text-white bg-slate-900 border border-slate-800'
                          : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                      }`}
                      id={`mobile_nav_${section.id}`}
                    >
                      {section.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-900">
                <a
                  href="https://wa.me/213657936584"
                  target="_blank"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-xs font-black uppercase text-center text-white rounded-xl flex items-center justify-center gap-2 transition-colors focus:outline-none"
                  id="mobile_drawer_whatsapp_direct"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>WhatsApp direct</span>
                </a>
                <p className="text-[10px] text-slate-505 text-center font-semibold">
                  Algeria, Ain Temouchent | accepting remote corporate options
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==========================================
          HERO LANDING STAGE ZONE
          ========================================== */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12 relative overflow-hidden bg-slate-950">
        
        {/* Sleek radial visual gradients */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.06),transparent_45%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.04),transparent_50%)]" />

        <motion.div 
          variants={heroContainerVariants}
          initial="hidden"
          animate={showPreloader ? "hidden" : "visible"}
          className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center"
        >
          
          <motion.div 
            variants={heroBadgeVariants}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-full mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest font-sans">Full-Stack Web Engineer Portfolio</span>
          </motion.div>

          <motion.h1 
            variants={heroItemVariants}
            className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-tight uppercase max-w-4xl"
          >
            CRAFTING HIGH-PERFORMANCE <span className="text-blue-500 select-none">FULL-STACK</span> WEBSITES.
          </motion.h1>

          <motion.p 
            variants={heroItemVariants}
            className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mt-6 leading-relaxed"
          >
            I design and ship complete digital products. Specialized in fast, stable front-end clients, high-performance backend database architectures, and seamless API integrations that deliver real business outcomes.
          </motion.p>

          <motion.div 
            variants={heroItemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto" 
            id="hero_action_launcher"
          >
            <motion.a
              variants={heroButtonVariants}
              href="#projects"
              className="px-8 py-4 bg-white text-slate-950 hover:bg-slate-100 font-extrabold text-xs uppercase tracking-wider rounded-full transition-all text-center flex items-center justify-center gap-2 group shadow-lg focus:outline-none"
              id="hero_btn_projects"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              variants={heroButtonVariants}
              href="#contact"
              className="px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider rounded-full border border-slate-800 hover:border-slate-700 transition-all text-center flex items-center justify-center gap-2 focus:outline-none"
              id="hero_btn_contact"
            >
              <span>Connect Strategy</span>
            </motion.a>
          </motion.div>

          {/* Highlights parameters row banner */}
          <motion.div 
            variants={heroItemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-slate-900 pt-12 mt-16 w-full" 
            id="hero_metrics_summary"
          >
            {[
              { num: 'FRONT & BACK', text: 'Full-Stack Integration' },
              { num: 'SUB-200ms', text: 'Target Rendering Load' },
              { num: 'SECURE APIs', text: 'Encrypted Routing Specs' },
              { num: '100% CLEAN', text: 'Standard Strict Typings' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={heroStatsVariants}
                className="text-center p-3 bg-slate-900/20 rounded-xl border border-slate-900"
              >
                <span className="text-xs sm:text-sm font-black text-white block tracking-widest uppercase">{stat.num}</span>
                <span className="text-[10px] text-slate-500 font-bold tracking-wider block uppercase mt-0.5">{stat.text}</span>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </section>

      {/* ==========================================
          PROFESSIONAL PROFILE (ABOUT)
          ========================================== */}
      <section id="about" className="py-24 px-6 md:px-12 bg-slate-950 border-t border-slate-900/60 transition-colors">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left beautiful visual block */}
            <div className="lg:col-span-5 relative" id="about_frame_illustration">
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl blur-2xl transform rotate-2 -z-10" />
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 relative">
                
                {/* Simulated computer window tag */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">profile_specs.ts</span>
                </div>

                <div className="space-y-4 font-mono text-[11px] md:text-xs">
                  <p className="text-blue-400">
                    <span className="text-slate-500">&gt;</span> const developer = &#123;
                  </p>
                  <p className="text-slate-200 pl-4">
                    name: <span className="text-emerald-400">"Israa Azzi"</span>,
                  </p>
                  <p className="text-slate-200 pl-4">
                    education: <span className="text-emerald-400">"Higher School of Applied Sciences"</span>,
                  </p>
                  <p className="text-slate-200 pl-4">
                    certificates: <span className="text-purple-400">[</span>
                  </p>
                  <p className="text-emerald-400 pl-8">
                    "AI & Machine Learning",
                  </p>
                  <p className="text-emerald-400 pl-8">
                    "Robotics & Arduino",
                  </p>
                  <p className="text-emerald-400 pl-8">
                    "AI Automation & Vibe Coding"
                  </p>
                  <p className="text-purple-400 pl-4">
                    ],
                  </p>
                  <p className="text-slate-200 pl-4">
                    role: <span className="text-emerald-400">"Full-Stack Web Engineer"</span>,
                  </p>
                  <p className="text-slate-200 pl-4">
                    location: <span className="text-emerald-400">"Algeria, Ain Temouchent"</span>,
                  </p>
                  <p className="text-slate-200 pl-4">
                    philosophy: <span className="text-emerald-400">"Clean full-stack code checkouts."</span>
                  </p>
                  <p className="text-blue-400">
                    &#125;;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-850 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>Status Console</span>
                  <span className="text-emerald-500 font-mono flex items-center gap-1.5">
                    ● ACTIVE PROCESS_OK
                  </span>
                </div>

              </div>
            </div>

            {/* Right descriptive profile text */}
            <div className="lg:col-span-7 space-y-6" id="about_bio_details">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 block">About Me</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                The engineer behind dynamic full-stack experiences
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                I am a dedicated student in the <strong>Higher School of Applied Sciences</strong>, combining academic excellence with state-of-the-art technical certificates. I approach full-stack websites with rigorous technical discipline and clean design thinking.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                By bridging the gap between responsive frontend workflows and solid backend servers, I build standard-compliant websites, optimize routing processes, and deliver premium client solutions.
              </p>

              {/* Credentials Highlight Box */}
              <div className="p-5 bg-slate-900 border border-slate-800/80 rounded-2xl space-y-4" id="education_credentials_highlights">
                <div className="flex items-center gap-2 pb-2.5 border-b border-slate-800/60">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-200">
                    Credentials & Certifications
                  </span>
                </div>
                
                <div className="space-y-3.5">
                  <div>
                    <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest block">Education</span>
                    <span className="text-xs font-semibold text-slate-350 block mt-1">
                      Student @ Higher School of Applied Sciences
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest block">Specialized Certificates</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        'AI & Machine Learning',
                        'Robotics & Arduino',
                        'AI Automation & Vibe Coding'
                      ].map((cert, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-1 rounded bg-blue-500/5 border border-blue-500/15 text-xs font-semibold text-blue-400"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" id="about_deliver_points">
                {[
                  'Stable modular React components',
                  'Hardened schema interfaces SQL/postgres',
                  'Sub-second query optimization',
                  'Active direct WhatsApp endpoints systems'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 text-xs text-slate-300 font-semibold items-center">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          TECHNICAL COMPETENCY GRID (SKILLS)
          ========================================== */}
      <section id="skills" className="py-24 px-6 md:px-12 bg-slate-950 border-t border-slate-900/60 transition-colors">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 block mb-2">Technical Matrix</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              Core Technical Stack
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Investigate the specific capabilities used to deploy custom business platforms. Underneath each framework lies a verified understanding of full-stack data integrity.
            </p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Filtering buttons row */}
          <div className="flex justify-center flex-wrap gap-2 mb-12" id="skills_filters">
            {[
              { id: 'all', label: 'All competencies' },
              { id: 'frontend', label: 'Frontend Client' },
              { id: 'backend', label: 'Backend Database' },
              { id: 'design', label: 'Grids & UI Layout' },
              { id: 'devops', label: 'DevOps & Pipeline' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedSkillCat(btn.id as any)}
                className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 outline-none border ${
                  selectedSkillCat === btn.id
                    ? 'text-white bg-blue-600 border-blue-600 shadow-md shadow-blue-600/25'
                    : 'text-slate-450 hover:text-white bg-slate-900 border-slate-800 hover:bg-slate-850'
                }`}
                id={`filter_tab_${btn.id}`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Layout grid cards with subtle staggered entrance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="skills_cards_grid">
            {filteredSkills.map((v) => (
              <div 
                key={v.id}
                className="p-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/60"
                id={`competency_card_${v.id}`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 bg-slate-950 px-2.5 py-1 rounded">
                      {v.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                      {v.level}%
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold text-white tracking-tight uppercase group-hover:text-blue-400 transition-colors">
                    {v.name}
                  </h3>
                </div>
                
                {/* Custom geometric horizontal bar metric */}
                <div className="w-full bg-slate-950 h-1.5 rounded-full mt-6 overflow-hidden">
                  <div 
                    className="bg-blue-550 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${v.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          SERVICE CATALOG SECTION
          ========================================== */}
      <section id="services" className="py-24 px-6 md:px-12 bg-slate-950 border-t border-slate-900/60 transition-colors">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 block mb-2">Service Packages</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              Core Technical Deliverables
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              We focus on exact specifications. Each project block represents a dedicated, clean digital system built for business operations.
            </p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Grid architecture for services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services_layout_grid">
            {[
              {
                title: 'Fast Frontend Clients',
                desc: 'Highly responsive single page websites coded with strict React 19 + TypeScript and styled using modern Tailwind utility layers. Optimized for sub-second visual load and fluid cross-device navigation.',
                metrics: ['TypeScript types compliance', 'Inter / Space Grotesk typography', 'Clean custom state hooks', 'Dynamic mouse entering triggers']
              },
              {
                title: 'Secure Backends',
                desc: 'Robust database servers and relational storage layers. Tailored for transaction isolation, relational schema integrity (PostgreSQL/SQL), optimized indexing plans, and bulletproof user auth.',
                metrics: ['PostgreSQL & SQL structures', 'Stateful authentication guards', 'Encrypted environment stores', 'Relational database modeling']
              },
              {
                title: 'Interactive Dashboards',
                desc: 'High-performance data visualizers, operational control rooms, and business metrics trackers. Featuring clean spatial layouts, responsive charts, and real-time state synchronizations.',
                metrics: ['D3 aggregate visual charts', 'Zustand client-side sync state', 'Responsive bento spatial grids', 'Clean CSV/PDF exporters']
              },
              {
                title: 'High-Integrity APIs',
                desc: 'Scalable REST & middleware controllers routed flawlessly under Express and Node.js. Optimized to handle concurrent request bursts, with standardized error handlers and JWT verification.',
                metrics: ['Express.js & Node pipelines', 'Strict request validation schemas', 'Standardized JSON error packets', 'Rapid server middleware execution']
              },
              {
                title: 'WhatsApp Automation',
                desc: 'Interactive checkout engines and customized booking fields that pre-format order details into single-click WhatsApp messages. Replaces expensive setup with direct operator connections.',
                metrics: ['Direct WhatsApp order routing', 'Client-to-operator formats', 'Reactive total sum sliders', 'Zero delay client persistence']
              }
            ].map((srv, idx) => (
              <div 
                key={idx}
                className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/80"
                id={`service_item_${idx}`}
              >
                <div>
                  <div className="w-10 h-10 bg-blue-600/10 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/15 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {idx === 0 && <Laptop className="w-5 h-5" />}
                    {idx === 1 && <Database className="w-5 h-5" />}
                    {idx === 2 && <Grid className="w-5 h-5" />}
                    {idx === 3 && <Server className="w-5 h-5" />}
                    {idx === 4 && <MessageSquare className="w-5 h-5" />}
                  </div>

                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-6 mt-6 space-y-2.5">
                  {srv.metrics.map((met, i) => (
                    <div key={i} className="flex gap-2 text-xs text-slate-300 items-center">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span>{met}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          PRODUCTION PORTFOLIO COMPONENT
          ========================================== */}
      <section id="projects" className="py-24 px-6 md:px-12 bg-slate-950 border-t border-slate-900/60 transition-colors">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 block mb-2">My Works & Case Studies</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              Production Portfolio
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Explore dynamic frameworks solved with strict engineering logic. Underneath each case study lies clean, production-ready modules.
            </p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Project filters bar */}
          <div className="flex justify-center flex-wrap gap-2.5 mb-12" id="projects_filters">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full-Stack Ecosystems' },
              { id: 'frontend', label: 'Frontend Client Systems' },
              { id: 'backend', label: 'Backend Database Handlers' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedProjectCat(btn.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 outline-none border ${
                  selectedProjectCat === btn.id
                    ? 'text-white bg-blue-600 border-blue-600 shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white bg-slate-900 border-slate-800 hover:bg-slate-850'
                }`}
                id={`project_filter_tab_${btn.id}`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Grid of projects cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects_display_grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveCaseStudy(project)}
                className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(15,23,42,0.6)] cursor-pointer"
                id={`project_presentation_card_${project.id}`}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 opacity-70" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest bg-blue-600 text-white px-2.5 py-1 rounded-full shadow-lg shadow-blue-600/30">
                      {project.category === 'fullstack' && 'Fullstack System'}
                      {project.category === 'frontend' && 'Frontend client'}
                      {project.category === 'backend' && 'Backend API Proxy'}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 bg-slate-900/30">
                  <h3 className="text-base font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-blue-400 font-bold tracking-wide">
                      {project.subtitle}
                    </p>
                    {project.liveUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank', 'noreferrer');
                        }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-600/15 hover:bg-blue-600 border border-blue-500/25 text-[10px] font-black uppercase text-blue-400 hover:text-white rounded-lg transition-all focus:outline-none"
                      >
                        <Laptop className="w-3 h-3" />
                        <span>Live Site</span>
                      </button>
                    )}
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed mt-3 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-semibold tracking-wider font-mono bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Case Study Detailed Overlay Modal */}
          <AnimatePresence>
            {activeCaseStudy && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
                id="case_study_detail_modal_portal"
              >
                {/* Backdrop overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveCaseStudy(null)}
                  className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm"
                />

                {/* Modal body */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 30 }}
                  className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-2xl overflow-hidden relative z-10 flex flex-col max-h-[85vh] md:max-h-[90vh]"
                >
                  <button
                    onClick={() => setActiveCaseStudy(null)}
                    className="absolute top-4 right-4 z-20 p-2 bg-slate-950/60 text-slate-450 hover:text-white hover:bg-slate-950/90 rounded-full transition-colors focus:outline-none border border-slate-900"
                    aria-label="Close Case Study dialog"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="overflow-y-auto w-full">
                    {/* Visual header */}
                    <div className="relative w-full aspect-[2.4/1] bg-slate-950">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                      <img
                        src={activeCaseStudy.image}
                        alt={activeCaseStudy.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-6 left-6 md:left-8 z-20">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest bg-blue-600 text-white px-3 py-1 rounded-full">
                          {activeCaseStudy.category.toUpperCase()} SOLUTION DEPLOYED
                        </span>
                        <h2 className="text-xl md:text-3xl font-black text-white mt-2 leading-none">
                          {activeCaseStudy.title}
                        </h2>
                      </div>
                    </div>

                    {/* Case study textual summaries */}
                    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 bg-slate-900">
                      
                      {/* Left specs column */}
                      <div className="md:col-span-8 flex flex-col gap-6">
                        <div>
                          <h4 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2">Systems Vision & Requirement</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">{activeCaseStudy.description}</p>
                        </div>

                        <div>
                          <h4 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-3">Key Technical Solutions Implemented:</h4>
                          <ul className="space-y-2.5">
                            {activeCaseStudy.features.map((feat, index) => (
                              <li key={index} className="flex gap-3 text-xs text-slate-300 items-start">
                                <div className="p-0.5 rounded bg-blue-600/15 text-blue-400 mt-0.5">
                                  <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                                </div>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right parameter details */}
                      <div className="md:col-span-4 flex flex-col gap-6">
                        <div>
                          <h4 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2.5">Technology Stack Applied</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {activeCaseStudy.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-semibold font-mono bg-slate-950 border border-slate-850 px-2.5 py-1 rounded text-slate-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Bakery customizer nested if it is gourmet-bakery */}
                        {activeCaseStudy.id === 'gourmet-bakery' && (
                          <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
                            <h5 className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Live Client Customizer Demo</h5>
                            <p className="text-[11px] text-slate-400 leading-normal">
                              Test the Maison du Grain client config and WhatsApp integration directly below:
                            </p>

                            <div className="space-y-2 text-xs">
                              <label className="text-[10px] text-slate-500 font-bold block uppercase">Product Type</label>
                              <div className="grid grid-cols-3 gap-1">
                                {(['cake', 'bread', 'pastry'] as const).map((type) => (
                                  <button
                                    key={type}
                                    onClick={() => setBakeryProductType(type)}
                                    className={`py-1 text-center font-bold uppercase text-[9px] rounded transition-all ${
                                      bakeryProductType === type 
                                        ? 'bg-amber-500 text-slate-950' 
                                        : 'bg-slate-900 text-slate-400 border border-slate-850'
                                    }`}
                                  >
                                    {type}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {bakeryProductType === 'cake' && (
                              <div className="space-y-1.5 text-xs">
                                <label className="text-[10px] text-slate-500 font-bold block uppercase">Cake Dimensions</label>
                                <select 
                                  value={bakeryCakeSize} 
                                  onChange={(e) => setBakeryCakeSize(Number(e.target.value))}
                                  className="w-full p-2 bg-slate-900 border border-slate-800 text-white rounded text-xs focus:outline-none"
                                >
                                  <option value={6}>6-Inch Small (Serves 6-8) — €24</option>
                                  <option value={8}>8-Inch Standard (Serves 10-12) — €32</option>
                                  <option value={10}>10-Inch Premium (Serves 15-20) — €40</option>
                                </select>
                              </div>
                            )}

                            <div className="space-y-1 text-xs">
                              <label className="text-[10px] text-slate-500 font-bold block uppercase">Quantity Requested</label>
                              <div className="flex items-center gap-2">
                                <button 
                                  onClick={() => setBakeryQuantity(prev => Math.max(1, prev - 1))}
                                  className="w-8 h-8 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold"
                                >
                                  -
                                </button>
                                <span className="font-mono text-center w-8 text-white">{bakeryQuantity}</span>
                                <button 
                                  onClick={() => setBakeryQuantity(prev => prev + 1)}
                                  className="w-8 h-8 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            <div className="space-y-1 text-xs">
                              <label className="text-[10px] text-slate-500 font-bold block uppercase">Special Instructions</label>
                              <input 
                                type="text"
                                value={bakeryNotes}
                                onChange={(e) => setBakeryNotes(e.target.value)}
                                placeholder="E.g. Strawberry, written 'happy birthday'..."
                                className="w-full p-2 bg-slate-900 border border-slate-800 text-white rounded text-xs focus:outline-none"
                              />
                            </div>

                            <button 
                              onClick={handleAddBakeryToCart}
                              className="w-full py-2 bg-amber-500 hover:bg-amber-450 text-slate-950 font-bold uppercase text-[10px] rounded transition-all"
                            >
                              Add to dynamic cart (€{bakeryTotalSum})
                            </button>

                            {bakeryCart.length > 0 && (
                              <div className="pt-3 border-t border-slate-900 space-y-2">
                                <span className="text-[10px] text-slate-400 font-bold uppercase block">Your Shopping Cart ({bakeryCart.length})</span>
                                <div className="max-h-[100px] overflow-y-auto space-y-1.5 pr-1">
                                  {bakeryCart.map(item => (
                                    <div key={item.id} className="flex justify-between items-center text-[10px] bg-slate-900 p-1.5 rounded border border-slate-850">
                                      <span className="text-slate-300 truncate w-2/3">{item.name}</span>
                                      <div className="flex items-center gap-2">
                                        <span className="text-amber-400 font-mono">€{item.total}</span>
                                        <button onClick={() => handleRemoveBakeryItem(item.id)} className="text-red-400 hover:text-red-300 font-black">×</button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <button 
                                  onClick={handleLaunchBakeryWhatsApp}
                                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase text-[9px] rounded flex items-center justify-center gap-1.5 mt-1"
                                >
                                  <MessageSquare className="w-3.5 h-3.5" />
                                  <span>Submit Checkout to bakery WhatsApp</span>
                                </button>
                              </div>
                            )}

                          </div>
                        )}

                        {activeCaseStudy.liveUrl && (
                          <div className="p-5 bg-gradient-to-br from-blue-950/40 to-slate-900 border border-blue-500/20 rounded-xl mb-4 space-y-3">
                            <h5 className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Live Web Service</h5>
                            <p className="text-[11px] text-slate-400 leading-normal">
                              This website has been built, optimized, and compiled to production. View the live system here:
                            </p>
                            <a
                              href={activeCaseStudy.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full py-2.5 text-center text-xs font-black uppercase text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 focus:outline-none"
                            >
                              <Laptop className="w-3.5 h-3.5" />
                              <span>Visit Live Website</span>
                            </a>
                          </div>
                        )}

                        {activeCaseStudy.id !== 'gourmet-bakery' && (
                          <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-xl mt-auto">
                            <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Enterprise Strategy Sync</h5>
                            <p className="text-[11px] text-slate-500 mb-4 leading-normal">
                              Align your corporate platform frameworks. Speak directly with Israa to review parameters.
                            </p>
                            <button
                              onClick={() => {
                                setActiveCaseStudy(null);
                                const sandboxAnchor = document.getElementById('contact');
                                if (sandboxAnchor) sandboxAnchor.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="w-full py-2.5 text-center text-xs font-bold uppercase text-blue-400 bg-blue-500/10 hover:bg-blue-500/15 rounded-lg border border-blue-500/20 transition-all transition-colors"
                            >
                              Connect Strategy Sync
                            </button>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* ==========================================
          MASTERED PROGRAMMING LANGUAGES SHOWCASE (REPLACES API SANDBOX)
          ========================================== */}
      <section id="languages" className="py-24 px-6 md:px-12 bg-slate-950 border-t border-slate-900/60 transition-colors">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 block mb-2">Technical Command</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              Programming Languages I Master
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              I write clear, structural scripts tailored for high stability. Select any of my mastered backend or frontend languages below to review production-ready code patterns and implementation strategies.
            </p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div 
            className="w-full bg-slate-900/40 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0"
            id="languages_container"
          >
            {/* Left selector details column */}
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col gap-6 border-r border-slate-800/80 justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 block">Command Console</span>
                  <h3 className="text-lg md:text-xl font-bold text-white mt-1">Language Architecture Selector</h3>
                  <p className="text-slate-400 text-xs mt-1">
                    Toggle through the core languages I master to inspect their technical concepts, metrics levels, and strict production use cases.
                  </p>
                </div>

                {/* Vertical language button list */}
                <div className="flex flex-col gap-2 pt-2">
                  {PROGRAMMING_LANGUAGES.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setActiveLangId(lang.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all duration-300 outline-none flex items-center justify-between group ${
                        activeLangId === lang.id
                          ? 'border-blue-500 bg-blue-600/10 text-white shadow-md'
                          : 'border-slate-850 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/60 text-slate-400'
                      }`}
                      id={`lang_selector_btn_${lang.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-slate-950 border border-slate-900">
                          {lang.icon}
                        </div>
                        <div>
                          <span className="text-xs font-black uppercase text-white block">{lang.name}</span>
                          <span className="text-[9px] text-slate-500 font-bold block mt-0.5">Expertise Level: {lang.level}%</span>
                        </div>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeLangId === lang.id 
                          ? 'translate-x-0.5 text-blue-400' 
                          : 'opacity-40 group-hover:translate-x-0.5 group-hover:opacity-100'
                      }`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic brief metric summary */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-900 space-y-2 mt-4 lg:mt-0">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase text-slate-400">
                  <span>Compilation Health</span>
                  <span className="text-emerald-500">● STRICT_ESM_OK</span>
                </div>
                <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${activeLanguage.level}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right clean visual code window */}
            <div className="lg:col-span-7 bg-slate-950 p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* Information Headers */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-900 gap-4">
                  <div>
                    <h4 className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">Active Concept Specs</h4>
                    <h5 className="text-base font-extrabold text-white uppercase tracking-tight mt-1">{activeLanguage.name}</h5>
                  </div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest bg-blue-600/10 text-blue-400 py-1 px-2.5 rounded-full border border-blue-500/20 self-start sm:self-center">
                    LEVEL {activeLanguage.level}%
                  </span>
                </div>

                {/* Paragraphs explanations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Architectural Concept</span>
                    <p className="text-slate-300 font-sans">{activeLanguage.concept}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Production Use-Case</span>
                    <p className="text-slate-300 font-sans">{activeLanguage.useCase}</p>
                  </div>
                </div>

                {/* Precise IDE Interface window mock-up */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <span>IDE Code Inspector Framework</span>
                    <button 
                      onClick={handleCopyCode}
                      className="hover:text-white transition-colors text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      {codeCopied ? 'Code Copied!' : 'Copy Snippet'}
                    </button>
                  </div>

                  <div className="bg-slate-900 rounded-xl border border-slate-850 overflow-hidden relative">
                    {/* Console decoration top tab */}
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-900 text-[10px] font-mono text-slate-500">
                      <span>{activeLanguage.id}.codefile</span>
                      <span className="text-emerald-500 uppercase font-bold text-[9px]">Validated Syntax</span>
                    </div>

                    <pre className="p-4 md:p-6 text-[11px] text-slate-300 font-mono overflow-x-auto whitespace-pre leading-relaxed select-all max-h-[300px]">
                      {activeLanguage.codeSnippet}
                    </pre>
                  </div>
                </div>

              </div>

              {/* Simple metrics footer summary */}
              <div className="mt-6 pt-4 border-t border-slate-900 flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-[10px] font-semibold text-slate-400">
                  Clean formatting, strict linter compliance, zero compiler blockage guaranteed.
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          CONTACT CONNECT COMPONENT
          ========================================== */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-slate-950/60 border-t border-slate-900/60 transition-colors">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 block mb-2">Connect details</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              Schedule a strategy sync
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Establish a professional, fast online presence now. Let's trace your target parameters.
            </p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact_layout_grid">
            
            {/* Left direct channel contact coordinates column */}
            <div className="lg:col-span-5 flex flex-col justify-between" id="contact_details_col">
              <div className="space-y-6">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug">
                  Direct Coordination Channels
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Have a specific framework requirement or a full-stack platform vision ready for deployment? Get in touch straight away. My WhatsApp gateway is active for instant global alignment.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/213657936584"
                    target="_blank"
                    className="p-4 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-4 transition-colors group focus:outline-none"
                    id="contact_channel_whatsapp"
                  >
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-200">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">📱 Instant WhatsApp Link</span>
                      <span className="text-xs font-bold text-slate-200 block mt-0.5">+213 65 79 36 584</span>
                    </div>
                  </a>

                  <a
                    href="mailto:israa.azzi2008@gmail.com"
                    className="p-4 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-4 transition-colors group focus:outline-none"
                    id="contact_channel_email"
                  >
                    <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block font-sans">📧 Enterprise Mailbox</span>
                      <span className="text-xs font-bold text-slate-200 block mt-0.5">israa.azzi2008@gmail.com</span>
                    </div>
                  </a>

                  <div
                    className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center gap-4 transition-colors group"
                    id="contact_channel_location"
                  >
                    <div className="p-2.5 bg-sky-500/10 text-sky-400 rounded-lg">
                      <Grid className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block font-sans">📍 Workspace Coordinates</span>
                      <span className="text-xs font-bold text-slate-200 block mt-0.5">Algeria, Ain Temouchent (Remote/Global)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status footer coordinates */}
              <div className="p-4 bg-slate-900/45 border border-slate-850 rounded-xl mt-8">
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 block">Operational Availability</span>
                <p className="text-[11px] text-slate-450 mt-1 leading-normal">
                  Actively accepting select end-to-end fullstack corporate contracts. Based in Ain Temouchent, Algeria, serving clients globally.
                </p>
              </div>
            </div>

            {/* Right contact form widget */}
            <div className="lg:col-span-7" id="contact_form_col">
              <form 
                onSubmit={handlesSubmitContact}
                className="p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-2xl space-y-5"
                id="contact_interactive_form"
              >
                <h4 className="text-sm font-bold text-white uppercase tracking-widest pb-2.5 border-b border-slate-800">
                  Instant Integration Form Handler
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">Your Organization Name</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="E.g. Apex Tech Corp"
                      className="w-full p-3 text-xs text-slate-300 bg-slate-950 border border-slate-850 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">Your Contact Email</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full p-3 text-xs text-slate-300 bg-slate-950 border border-slate-850 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">Project Parameters Vision</label>
                  <textarea
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Provide a high-fidelity summary of your required frontend framework, database endpoints, API integrations, and scaling expectations..."
                    className="w-full min-h-[120px] p-4 text-xs text-slate-300 bg-slate-950 border border-slate-850 rounded-xl focus:outline-none focus:border-blue-500 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={contactSuccess}
                  className="w-full py-4 text-xs font-extrabold uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 active:translate-y-0.5"
                  id="contact_form_submit_btn"
                >
                  {contactSuccess ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Forming Secure Handshake Redirect...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Initialize contract handshake</span>
                    </>
                  )}
                </button>

                {/* Simulated database success alert */}
                <AnimatePresence>
                  {contactSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 animate-bounce" />
                      <span className="text-[11px] text-emerald-300">
                        Synthesizing verified specifications! Redirecting you to complete message delivery on WhatsApp...
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          FOOTER COMPONENT
          ========================================== */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6 text-center text-xs text-slate-500 font-sans" id="footer_section">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-semibold tracking-wide">
            © 2026 Israa | Full-Stack Web Developer. Algeria, Ain Temouchent (Accepting Global Work contracts)
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/213657936584" target="_blank" className="hover:text-white transition-colors">WhatsApp Direct</a>
            <span className="text-slate-800">|</span>
            <a href="mailto:israa.azzi2008@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
