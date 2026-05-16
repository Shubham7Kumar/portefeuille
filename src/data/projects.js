export const projects = [
 
  {
    type:"Frontend Project",
    title: "Portfolio Website",
    description:
      "Modern animated portfolio using React, GSAP, Lenis and Bootstrap.",
    tech: ["React", "GSAP", "Lenis"],
    url:"/",
  },

  {
    type:"Full Stack Project",
    title: "Educational Platform",
    description:
      "Dynamic educational platform with admin dashboard, homepage CMS and asset management system.",
    tech: ["React", "Node.js", "Cloudinary","Express","Redis","Bootstrap","GSAP"],
    url:"https://oneslash.vercel.app",
  },

  {
  type: "Backend Project",

  title: "Banking Ledger System",

  description:
    "Backend-focused banking ledger architecture with authentication, transaction handling and modular APIs.",

  tech: [
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Mongoose"
  ],

  url: "https://bank-ledger-system-qbw5.onrender.com",

  credentials: {
    email: "devshubhamtoconnect@gmail.com",
    password: "test@123",
  },

  routes: [
    {
      method: "POST",
      path: "/api/auth/login",
      description: "Authenticate user and generate JWT token",
    },

    {
      method: "POST",
      path: "/api/auth/logout",
      description: "Logout authenticated user",
    },

    {
      method: "POST",
      path: "/api/accounts",
      description: "Create new bank account (Protected Route)",
    },

    {
      method: "GET",
      path: "/api/accounts",
      description: "Get all accounts of logged-in user",
    },

    {
      method: "GET",
      path: "/api/accounts/balance/:accountId",
      description: "Fetch account balance details",
    },

    {
      method: "GET",
      path: "/health",
      description: "Server health monitoring endpoint",
    },
  ],

},
];