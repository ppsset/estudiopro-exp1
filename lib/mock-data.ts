export const newsFeed = [
  {
    id: "nfpa-arc-01",
    title: "NFPA 70 updates: safer arc-flash mitigation guidance",
    source: "NFPA Journal",
    standard: "NFPA",
    category: "Protection",
    region: "North America",
    publishedAt: "2024-08-20",
    savedCount: 128,
    summary:
      "New guidance highlights arc-flash labeling, coordinated protective devices, and maintenance strategies for industrial facilities.",
    link: "https://www.nfpa.org/",
    image: "/images/nfpa.svg"
  },
  {
    id: "iec-cables-02",
    title: "IEC 60364 cable sizing revisions for mixed-load circuits",
    source: "IEC Update",
    standard: "IEC",
    category: "Cables",
    region: "EMEA",
    publishedAt: "2024-08-12",
    savedCount: 92,
    summary:
      "Clarifies diversity factors, grouping, and ambient corrections when sizing conductors for multi-use distribution.",
    link: "https://www.iec.ch/",
    image: "/images/iec.svg"
  },
  {
    id: "bs-quality-03",
    title: "BS power quality checklist for hospitals",
    source: "BSI Insights",
    standard: "BS",
    category: "Power Quality",
    region: "UK",
    publishedAt: "2024-07-28",
    savedCount: 76,
    summary:
      "Checklist for mitigation of harmonics, voltage unbalance, and flicker in critical healthcare installations.",
    link: "https://www.bsigroup.com/",
    image: "/images/bs.svg"
  },
  {
    id: "case-study-04",
    title: "Case study: data center selective coordination plan",
    source: "Electrical Design Review",
    standard: "NFPA",
    category: "Case Study",
    region: "Global",
    publishedAt: "2024-07-15",
    savedCount: 184,
    summary:
      "A 30MW data center uses coordination curves and digital twin simulations to validate protective device settings.",
    link: "https://example.com/",
    image: "/images/case-study.svg"
  }
];

export const designModules = [
  "Estimation Load",
  "Protective Device Setting",
  "Short Circuit",
  "Voltage Drop",
  "Power Factor Correction",
  "Power Quality",
  "Conductor Sizing",
  "Raceway Sizing"
];

export const projects = [
  {
    id: "proj-001",
    name: "Riverside Medical Tower",
    location: "Austin, TX",
    client: "Riverside Health",
    voltageLevels: "480/277V",
    systemType: "TN-S",
    status: "In review",
    lastUpdated: "2024-08-18",
    tags: ["Healthcare", "Critical Power"],
    modules: [
      {
        name: "Short Circuit",
        status: "Current",
        updatedAt: "2024-08-17",
        summary: "Isc 52kA, coordinated with main breaker."
      },
      {
        name: "Voltage Drop",
        status: "Draft",
        updatedAt: "2024-08-16",
        summary: "Main feeder 2.1%, branch max 3.4%."
      }
    ]
  },
  {
    id: "proj-002",
    name: "Orion Manufacturing Plant",
    location: "Leeds, UK",
    client: "Orion Metals",
    voltageLevels: "400/230V",
    systemType: "TN-C-S",
    status: "Active",
    lastUpdated: "2024-08-10",
    tags: ["Industrial", "Expansion"],
    modules: [
      {
        name: "Protective Device Setting",
        status: "Current",
        updatedAt: "2024-08-09",
        summary: "Relay coordination tuned for MCC lineup."
      }
    ]
  }
];

export const knowledgeTopics = [
  {
    slug: "fundamentals",
    title: "Electrical Fundamentals",
    category: "Fundamentals",
    summary: "Power, current, voltage, and 1-phase/3-phase relationships.",
    keyTerms: ["Ohm's law", "kVA vs kW", "phase angle"]
  },
  {
    slug: "earthing-grounding",
    title: "Earthing & Grounding Concepts",
    category: "Safety",
    summary: "Grounding systems, bonding, and fault path behavior.",
    keyTerms: ["TN-S", "TT", "earth electrode"]
  },
  {
    slug: "protection-fundamentals",
    title: "Protection Fundamentals",
    category: "Protection",
    summary: "OCPD selection, coordination basics, and trip curves.",
    keyTerms: ["selective coordination", "OCPD", "relay"]
  },
  {
    slug: "short-circuit-basics",
    title: "Short Circuit Basics",
    category: "Fault Analysis",
    summary: "Symmetrical components and calculating available fault current.",
    keyTerms: ["Isc", "X/R ratio", "fault duty"]
  },
  {
    slug: "voltage-drop-basics",
    title: "Voltage Drop Basics",
    category: "Performance",
    summary: "Feeder vs branch limits and correction factors.",
    keyTerms: ["%VD", "power factor", "reactance"]
  },
  {
    slug: "power-factor-correction",
    title: "Power Factor & Correction",
    category: "Energy",
    summary: "Sizing capacitor banks and avoiding resonance.",
    keyTerms: ["kVAR", "target PF", "detuning"]
  },
  {
    slug: "harmonics-power-quality",
    title: "Harmonics & Power Quality",
    category: "Power Quality",
    summary: "THD limits, filters, and monitoring.",
    keyTerms: ["THD", "filters", "flicker"]
  },
  {
    slug: "cable-conductor-basics",
    title: "Cable & Conductor Basics",
    category: "Cables",
    summary: "Insulation classes, derating, and grouping factors.",
    keyTerms: ["ampacity", "insulation", "derating"]
  },
  {
    slug: "raceway-basics",
    title: "Raceway Basics",
    category: "Raceways",
    summary: "Fill percentages, bending, and support spacing.",
    keyTerms: ["fill", "bend radius", "trunking"]
  },
  {
    slug: "documentation-basics",
    title: "Documentation Basics",
    category: "Documentation",
    summary: "Single-line diagrams, load schedules, and panel schedules.",
    keyTerms: ["SLD", "panel schedule", "load list"]
  }
];
