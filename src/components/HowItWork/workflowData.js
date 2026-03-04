export const phases = [
  {
    name: "Setup Phase",
    color: "#f48932",
    icon: "gear"
  },
  {
    name: "Project Phase",
    color: "#f48932",
    icon: "kanban"
  },
  {
    name: "HR Phase",
    color: "#f48932",
    icon: "people"
  },
  {
    name: "Finance Phase",
    color: "#f48932",
    icon: "cash-stack"
  },
  {
    name: "Growth Phase",
    color: "#f48932",
    icon: "graph-up"
  }
];

export const steps = [
  // Setup Phase (0-2)
  {
    phase: 0,
    icon: "building",
    title: "Company Setup",
    description: "Create your company profile, configure billing, and set up organizational structure",
    details: [
      "Add company details (name, address, logo)",
      "Configure billing settings & subscription",
      "Set up departments & business hours",
      "Customize system preferences"
    ],
    timeToComplete: "10-15 min",
    role: "Administrator",
    color: "#f48932"
  },
  {
    phase: 0,
    icon: "people",
    title: "Add Team Members",
    description: "Invite your team, assign roles, and set up permissions for secure access",
    details: [
      "Invite members via email",
      "Assign roles (Admin, Manager, HR, Member)",
      "Set department hierarchy",
      "Configure access permissions"
    ],
    timeToComplete: "5-10 min",
    role: "Administrator, HR",
    color: "#f48932"
  },
  {
    phase: 0,
    icon: "person-badge",
    title: "Add Clients",
    description: "Import or create client profiles for seamless collaboration and billing",
    details: [
      "Create client profiles",
      "Import from CSV/Excel",
      "Assign to specific projects",
      "Set client access levels"
    ],
    timeToComplete: "3-5 min",
    role: "Sales Team",
    color: "#f48932"
  },
  // Project Phase (3-5)
  {
    phase: 1,
    icon: "kanban",
    title: "Create Projects",
    description: "Start new projects with clear objectives, timelines, and team assignments",
    details: [
      "Define project scope & objectives",
      "Set timeline & milestones",
      "Allocate budget & resources",
      "Assign project manager"
    ],
    timeToComplete: "15-20 min",
    role: "Project Manager",
    color: "#f48932"
  },
  {
    phase: 1,
    icon: "list-check",
    title: "Create & Assign Tasks",
    description: "Break down projects into manageable tasks and assign to team members",
    details: [
      "Create actionable tasks",
      "Set priorities (High, Medium, Low)",
      "Assign task owners",
      "Define dependencies"
    ],
    timeToComplete: "Ongoing",
    role: "Project Manager, Team Lead",
    color: "#f48932"
  },
  {
    phase: 1,
    icon: "calendar-check",
    title: "Set Milestones",
    description: "Track project progress with visual milestones and Gantt charts",
    details: [
      "Define key deliverables",
      "Set milestone deadlines",
      "Visualize with Gantt charts",
      "Track completion"
    ],
    timeToComplete: "10 min",
    role: "Project Manager",
    color: "#f48932"
  },
  // HR Phase (6-8)
  {
    phase: 2,
    icon: "clock",
    title: "Track Attendance",
    description: "Monitor employee attendance, working hours, and overtime automatically",
    details: [
      "Clock in/out via web/mobile",
      "Track break times",
      "Calculate overtime",
      "View attendance reports"
    ],
    timeToComplete: "Daily (30 sec)",
    role: "All Employees",
    color: "#f48932"
  },
  {
    phase: 2,
    icon: "envelope-paper",
    title: "Manage Leave",
    description: "Submit, approve, and track all types of leave requests efficiently",
    details: [
      "Submit leave requests",
      "Automatic approval workflow",
      "Track leave balances",
      "View team calendar"
    ],
    timeToComplete: "2-3 min",
    role: "All Employees, HR",
    color: "#f48932"
  },
  {
    phase: 2,
    icon: "cash",
    title: "Process Payroll",
    description: "Automated payroll calculation based on attendance and work hours",
    details: [
      "Auto-calculate salaries",
      "Manage deductions",
      "Generate payslips",
      "Export for bank transfer"
    ],
    timeToComplete: "30 min/month",
    role: "HR, Finance",
    color: "#f48932"
  },
  // Finance Phase (9-11)
  {
    phase: 3,
    icon: "currency-dollar",
    title: "Track Expenses",
    description: "Record and monitor all project-related expenses in real-time",
    details: [
      "Log expenses with receipts",
      "Categorize by project",
      "Expense approval workflow",
      "Budget tracking"
    ],
    timeToComplete: "2 min/expense",
    role: "Team Members, Finance",
    color: "#f48932"
  },
  {
    phase: 3,
    icon: "file-text",
    title: "Generate Invoices",
    description: "Create accurate client invoices based on timesheets and tasks",
    details: [
      "Auto-generate from timesheets",
      "Add billable expenses",
      "Customize templates",
      "Track payments"
    ],
    timeToComplete: "5 min/invoice",
    role: "Finance, PM",
    color: "#f48932"
  },
  {
    phase: 3,
    icon: "chat",
    title: "Client Communication",
    description: "Share updates, collect feedback, and get approvals seamlessly",
    details: [
      "Project status updates",
      "File sharing & review",
      "Comment threads",
      "Approval tracking"
    ],
    timeToComplete: "Ongoing",
    role: "Project Manager, Clients",
    color: "#f48932"
  },
  // Growth Phase (12-14)
  {
    phase: 4,
    icon: "person-plus",
    title: "Lead Management",
    description: "Capture and convert potential clients through the sales pipeline",
    details: [
      "Capture leads from sources",
      "Track lead stages",
      "Schedule follow-ups",
      "Convert to clients"
    ],
    timeToComplete: "5 min/lead",
    role: "Sales Team",
    color: "#f48932"
  },
  {
    phase: 4,
    icon: "ticket",
    title: "Support Tickets",
    description: "Handle client issues with priority-based ticketing system",
    details: [
      "Create tickets from emails",
      "Set priority levels",
      "Assign to support team",
      "Track resolution time"
    ],
    timeToComplete: "Ongoing",
    role: "Support Team",
    color: "#f48932"
  },
  {
    phase: 4,
    icon: "graph-up",
    title: "Analytics & Reports",
    description: "Get valuable insights across all business operations",
    details: [
      "Project performance metrics",
      "Financial reports",
      "Team productivity",
      "Growth analytics"
    ],
    timeToComplete: "Real-time",
    role: "Administrators, Managers",
    color: "#f48932"
  }
];