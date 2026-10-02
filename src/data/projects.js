// Featured projects, in display order.
// `image` is a 1600x900 capture of the live site (matches the card's 16:9 frame);
// `fullImage` is a full-page capture shown in the screenshot viewer.
export const featuredProjects = [
  {
    title: 'Driving Lesson SaaS Platform',
    image: '/projects/driverslesson/cover.png',
    fullImage: { src: '/projects/driverslesson/full.jpg', width: 1600, height: 9862 },
    description:
      'An industry-level multi-tenant platform for driving schools with a 4-role management UI (Admin, School, Instructor, Student), dedicated dashboards, and role-based workflows.',
    highlights: [
      'End-to-end API integration for enrollment, appointment lifecycle, courses, student records, subscription billing, refunds, and coupons.',
      'Secure auth with JWT cookie sessions, Axios interceptors, and TanStack Query for scalable server-state management.',
      'Stripe Elements payments and Google Places/Geolocation for school discovery.',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'TanStack Query', 'Stripe', 'Tailwind CSS', 'Zod'],
    live: 'https://driverslesson.com/',
  },
  {
    title: 'Drivable Ed',
    image: '/projects/drivableed/cover.png',
    fullImage: { src: '/projects/drivableed/full.jpg', width: 1600, height: 6497 },
    description:
      'A Texas-focused online driver education platform where teens and adults pick the right course for their age and goal, enroll, and learn at their own pace from any device.',
    highlights: [
      'Course catalog for teen, adult (6-hour), and defensive driving paths with pricing, requirements, and completion details shown before checkout.',
      'Self-paced, mobile-friendly lessons with account-linked progress, quizzes, and knowledge checks with instant feedback.',
      'SEO-focused landing pages and a step-by-step guide to the Texas licensing process.',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    live: 'https://drivableed.com/',
  },
  {
    title: 'UniRide',
    image: '/projects/uniride/cover.png',
    fullImage: { src: '/projects/uniride/full.jpg', width: 1600, height: 3323 },
    description:
      'A Flutter campus ride-sharing app connecting student riders and passengers with real-time matching, trust scoring, in-app messaging, and secure rider verification.',
    highlights: [
      'Real-time rider/passenger matching on Google Maps.',
      'Trust scoring and rider verification for safer campus rides.',
    ],
    stack: ['Flutter', 'Firebase', 'Supabase', 'Google Maps', 'OneSignal', 'Cloudinary', 'REST APIs'],
    github: 'https://github.com/asterisks-official/uniride',
    live: 'https://play.google.com/store/apps/details?id=com.asterisks.uniride',
    isPlayStore: true,
  },
  {
    title: 'Litaria',
    image: '/projects/litaria/cover.png',
    fullImage: { src: '/projects/litaria/full.jpg', width: 1600, height: 2599 },
    description:
      'A bilingual (Bangla-English) literature and podcast platform with a real-time analytics dashboard, post scheduling, writer profiles, and category management.',
    highlights: [
      'Real-time analytics with bot-detection view tracking.',
      'Post scheduling, writer profiles, and category management.',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Prisma', 'NextAuth.js', 'Cloudinary', 'Recharts'],
    github: 'https://github.com/Redoy0/litaria',
    live: 'https://litaria.art/',
  },
  {
    title: 'BitStream',
    image: '/projects/bitstream/cover.png',
    fullImage: { src: '/projects/bitstream/full.jpg', width: 1600, height: 6248 },
    description:
      'A responsive software services showcase with dynamic project portfolios, contact forms, interactive testimonials, and a glassmorphism UI.',
    highlights: [
      'Dynamic project portfolios and interactive testimonials.',
      'Full CI/CD pipeline with Jest unit tests.',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'NextAuth.js', 'SendGrid', 'Jest', 'CI/CD'],
    github: 'https://github.com/bitstreamofficial/bitstream',
    live: 'https://bitstreamhq.com/',
  },
  {
    title: 'VIP Airport Ride',
    image: '/projects/vipairportride/cover.png',
    fullImage: { src: '/projects/vipairportride/full.jpg', width: 1600, height: 2019 },
    description:
      'A scalable SaaS platform for luxury airport transportation and chauffeur service management with a responsive, modern UI/UX.',
    highlights: [
      'Booking and reservation workflows for airport transfers, executive rides, hourly rentals, and customer inquiries.',
      'Role-based service management, reusable frontend architecture, and user flows optimized for conversion.',
      'Tuned performance, SEO, and mobile responsiveness for fast pages on every device.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://vipairportride.com/',
  },
  {
    title: 'Velocity Courier',
    image: '/projects/velocity/cover.png',
    fullImage: { src: '/projects/velocity/full.jpg', width: 1600, height: 900 },
    description:
      'A MERN stack logistics platform with real-time parcel tracking, interactive route maps, role-based access control, and analytics with exportable reports.',
    highlights: [
      'Live parcel tracking over Socket.IO with OpenStreetMap routes.',
      'Role-based access control and exportable analytics reports.',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/Redoy0/Velocity-Courier',
    live: 'https://velocity-courier.netlify.app',
  },
];

// Earlier projects, shown in a compact grid
export const moreProjects = [
  {
    title: 'Portfolio Website',
    description: 'This site: a single-page portfolio with smooth scrolling, animations, and an interactive particle hero.',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Redoy0/portfolio-of-sabbir-ahamed',
    live: 'https://sabbirahamed.site/',
  },
  {
    title: 'Kechedei',
    description: 'Responsive website for a laundry shop where customers explore services, place orders, and track laundry status.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'],
    github: 'https://github.com/Redoy0/KecheDei_Project',
  },
  {
    title: 'ScheduLearn',
    description: 'Visualizes CPU scheduling algorithms like FCFS, SJF, and Round Robin through interactive real-time simulations.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Redoy0/schedulearn',
    live: 'https://schedulearn.vercel.app/',
  },
  {
    title: 'NuevoHomes',
    description: 'Platform for ordering 3D home designs and exploring pre-made home delivery options with a simple ordering flow.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'Django'],
    github: 'https://github.com/Redoy0/NuevoHomes',
  },
  {
    title: 'DIU LeaderBoard',
    description: 'Gamified mobile app for DIU students to track academic rankings with secure login and a real-time leaderboard.',
    stack: ['Flutter', 'Firebase', 'Firestore'],
    github: 'https://github.com/Redoy0/DIU_LeaderBoard',
  },
  {
    title: 'DIU BusBuddy',
    description: 'Campus bus tracking app for DIU with real-time location, route info, and schedules.',
    stack: ['Flutter', 'Firebase', 'Google Maps'],
    github: 'https://github.com/Redoy0/DIU_BusBuddy',
  },
  {
    title: 'Responsive CV',
    description: 'Responsive online CV with an adaptive layout built using semantic HTML and modern CSS.',
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/Redoy0/Responsive-CV-Using-Html-Css',
    live: 'https://redoy0.github.io/Responsive-CV-Using-Html-Css/',
  },
  {
    title: 'Political Violence Monitor',
    description: 'Interactive dashboard to track and visualize political violence incidents with filters, charts, and maps.',
    stack: ['Python', 'Data Visualization', 'Mapping'],
    github: 'https://github.com/Redoy0/political-violence-monitor',
  },
];
