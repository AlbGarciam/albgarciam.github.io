// All copy lives here so the site can be updated without touching components.
// A leading "*" marks a word that gets the serif-italic accent.

export const person = {
  name: 'Alberto García-Muñoz',
  role: 'Mobile Architecture Lead & Engineering Manager',
  tagline: 'I set the technical direction for mobile platforms serving multiple markets.',
  location: 'Madrid, Spain',
};

export const chapters = [
  { id: 'expertise', index: '01', label: 'Expertise' },
  { id: 'journey', index: '02', label: 'Journey' },
  { id: 'work', index: '03', label: 'Selected work' },
  { id: 'toolbox', index: '04', label: 'Toolbox' },
  { id: 'writing', index: '05', label: 'Writing' },
  { id: 'contact', index: '06', label: 'Contact' },
];

export const manifesto = {
  statement:
    "I'd rather understand *where a problem *comes *from than ship the fastest patch for it.",
  body: 'Mobile architecture and engineering leader with 10+ years in tech, 5+ of them in architecture roles. I manage a team of architects and engineers and set the technical direction for large-scale mobile products.',
  facts: [
    { value: 'Multi-market', label: 'Mobile products built on scalable architecture' },
    { value: 'Cross-functional', label: 'Teams supported through shared standards and guidance' },
    { value: 'Reliable', label: 'Production releases delivered on a regular cadence' },
    { value: 'Automated', label: 'Mobile build and delivery pipelines' },
  ],
};

export const expertise = [
  {
    title: 'Architecture at scale',
    body: 'I shape the target architecture for large-scale mobile products: reusable frameworks, clear dependency boundaries and API-first integration, with iOS and Android kept aligned.',
    tags: ['Target architecture', 'Modularisation', 'API-first', 'iOS + Android'],
  },
  {
    title: 'Leading people & delivery',
    body: 'I lead architects and engineers and own the short- and long-term mobile roadmap. As Software Director, I led a distributed team delivering platform capabilities and cloud infrastructure from inception to production.',
    tags: ['Engineering management', 'Roadmap', 'Mentoring', 'Cross-functional'],
  },
  {
    title: 'Release engineering',
    body: 'I own the CI/CD pipeline end to end — build, test, code signing and distribution — supporting reliable, frequent production releases.',
    tags: ['CI/CD', 'Code signing', 'Observability', 'Automated testing'],
  },
  {
    title: 'AI agents & cloud',
    body: 'Developed AI-assisted tools to support the software lifecycle, with an auditable integration layer for enterprise systems.',
    tags: ['AI-assisted engineering', 'Enterprise integration', 'Docker', 'AWS Certified'],
  },
  {
    title: 'Security in regulated banking',
    body: 'Defined secure integration patterns across mobile platforms and manage governance, risk and non-functional requirements with cybersecurity and infrastructure teams.',
    tags: ['OAuth', 'Governance', 'Compliance', 'Risk'],
  },
  {
    title: 'Hands-on mobile craft',
    body: 'Years of shipping in Swift and Kotlin: banking onboarding, telco billing, OTT streaming with HLS, MPEG-DASH, DRM and Chromecast — and my own apps for iOS, watchOS and macOS.',
    tags: ['Swift', 'Kotlin', 'SwiftUI', 'Video streaming'],
  },
];

export const journey = [
  {
    period: '2021 — Now',
    company: 'Open Digital Services',
    role: 'Lead Mobile Architect · Multi-market mobile products',
    body: 'Target architecture and roadmap for large-scale mobile products. Leading a team since 2023 and setting technical direction across engineering groups.',
  },
  {
    period: '2025 — 2026',
    company: 'Open Digital Services',
    role: 'AI Engineer · alongside the architecture role',
    body: 'Developed AI-assisted tools to support the software lifecycle, alongside an auditable integration layer for enterprise systems.',
  },
  {
    period: '2024 — 2025',
    company: 'Open Digital Services',
    role: 'Software Director · alongside the architecture role',
    body: 'Led a distributed team delivering platform capabilities and cloud infrastructure, taking the work from inception to production on an accelerated timeline.',
  },
  {
    period: '2024 — Now',
    company: 'KeepCoding',
    role: 'Design Patterns Professor',
    body: 'Teaching software design patterns and architecture to professionals, and mentoring students through hands-on exercises.',
  },
  {
    period: '2019 — 2021',
    company: 'Digital banking company',
    role: 'Senior iOS Developer',
    body: 'Led development of onboarding and shared modules for a digital banking application.',
  },
  {
    period: '2018 — 2019',
    company: 'Vodafone Spain',
    role: 'Mobile Developer · iOS & Android',
    body: 'Billing and commercial flows in the Mi Vodafone apps, as part of the billing team.',
  },
  {
    period: '2017 — 2018',
    company: 'Mirada PLC',
    role: 'Mobile Developer · iOS',
    body: 'An OTT video streaming platform for iOS and cast devices, including the Chromecast integration.',
  },
  {
    period: '2016 — 2017',
    company: 'NexStreaming · Management Solutions',
    role: 'R&D Mobile Developer / Programmer Analyst',
    body: 'Android and Android TV video player and 360° navigation with adaptive streaming and DRM; bond valuation model validation in Python, SAS and Java for a Spanish bank.',
  },
];

export const education = [
  {
    period: '2025',
    title: 'AWS Certified Solutions Architect – Associate',
    place: 'Amazon Web Services',
  },
  {
    period: '2012 — 2016',
    title: 'BSc Telecommunication Technologies Engineering',
    place: 'Universidad Carlos III de Madrid',
  },
  {
    period: '2018 — 2019',
    title: 'Bootcamp in Mobile Development',
    place: 'KeepCoding',
  },
];

export const projects = [
  {
    id: 'nalu',
    name: 'Nalu',
    period: '2017 — Now',
    platform: 'iOS',
    body: 'Share what you’re listening to with the people around you. Nalu builds a peer-to-peer mesh over Bluetooth to host ephemeral music sessions.',
    tags: ['Bluetooth LE', 'App Clips', 'Widgets', 'Audio playback'],
    link: { label: 'Visit Nalu', href: 'https://nalu.gitlab.io' },
  },
  {
    id: 'pacer',
    name: 'Pacer',
    period: '2022 — Now',
    platform: 'watchOS · iOS',
    body: 'Stay on pace. A running companion for Apple Watch and iPhone that reads HealthKit and guides you through every session.',
    tags: ['HealthKit', 'SwiftUI', 'Core Data', 'Swift Charts'],
    link: { label: 'On the App Store', href: 'https://apps.apple.com/ar/app/pacer-stay-on-pace/id1627313100' },
  },
  {
    id: 'lost',
    name: 'Lost',
    period: '2022 — Now',
    platform: 'iOS · macOS',
    body: 'A game for iPhone and Mac, built with SceneKit for the world and SwiftUI for everything around it.',
    tags: ['SceneKit', 'SwiftUI', 'Game design'],
  },
];

export const toolbox = {
  marquee: ['Swift', 'Kotlin', 'SwiftUI', 'Jetpack Compose', 'AWS', 'MCP', 'Docker'],
  groups: [
    { label: 'Languages', items: ['Swift', 'Objective-C', 'Kotlin', 'Python', 'JavaScript', 'Node.js', 'Bash', 'Java'] },
    {
      label: 'Digital channels',
      items: ['iOS · watchOS · macOS', 'UIKit', 'SwiftUI', 'Combine', 'XCFrameworks', 'Android', 'Jetpack Compose', 'React'],
    },
    { label: 'Cloud & AI', items: ['AWS', 'AWS AgentCore', 'MCP', 'Docker'] },
    { label: 'Integration', items: ['REST APIs', 'OAuth', 'Push notifications', 'Chromecast', 'HLS', 'MPEG-DASH', 'DRM'] },
    { label: 'Spoken', items: ['Spanish — native', 'English — full professional'] },
  ],
};

export const writing = [
  {
    title: 'Reduce build times on your iOS app',
    body: 'What actually makes an app slow to compile, and how to win that time back.',
    href: 'https://albgarciam.medium.com/reduce-build-times-on-your-ios-app-86a964e0f3bf',
  },
  {
    title: 'Creating ABI-stable Swift libraries',
    body: 'Swift 5 brought ABI stability. Here is what it takes to ship a library that honours it.',
    href: 'https://albgarciam.medium.com/creating-abi-stable-swift-libraries-fe82aaa51250',
  },
  {
    title: 'Is SwiftUI suitable for production?',
    body: 'The question every team asks before building its views with SwiftUI, answered from experience.',
    href: 'https://medium.com/codex/is-swiftui-suitable-for-production-4a92eb55751b',
  },
];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alberto-garcia-munoz/' },
  { label: 'GitHub', href: 'https://github.com/AlbGarciam' },
  { label: 'Medium', href: 'https://albgarciam.medium.com' },
];

// Must match TOPICS in functions/core.js.
export const contactTopics = ['Job opportunity', 'Project', 'Talk or article', 'Just saying hi'];
