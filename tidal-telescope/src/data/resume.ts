export const profile = {
  name: "Nicholas Osafo Adamu",
  title: "Solutions Architect",
  location: "Tema, Ghana",
  email: "nickadamu@gmail.com",
  linkedin: "https://linkedin.com/in/nicholas-osafo-adamu-540928142",
  github: "https://github.com/nodamu",
  tagline:
    "Architecting cloud-native platforms, banking infrastructure, and the systems that power fintech at global scale.",
};

export const experience = [
  {
    role: "Platform Architect",
    company: "Lyte Digital",
    location: "San Francisco, CA (Remote)",
    period: "Feb 2026 – Present",
    highlights: [
      "Own architecture and technical roadmap for Lyte's banking-as-a-service platform across Europe, the Americas, Asia, and Africa",
      "Design scalable, multi-tenant cloud infrastructure for KYC/KYB, AML, fraud detection, and payments",
      "Define API and integration patterns for omni-channel delivery across chat, voice, web, app, and USSD",
      "Establish CI/CD, observability, and DevSecOps standards for rapid, reliable feature delivery",
      "Drive security and regulatory compliance — encryption, access management, data protection",
      "Mentor engineering teams and champion GitOps and cloud-native best practices",
    ],
    tags: ["BaaS", "Multi-tenant", "DevSecOps", "GitOps", "KYC/AML"],
  },
  {
    role: "DevOps Engineer",
    company: "ABSA Bank Ghana",
    location: "Accra, Ghana",
    period: "Apr 2025 – Jan 2026",
    highlights: [
      "Architected highly available CI/CD pipelines for zero-downtime deployments",
      "Implemented monitoring, logging, and observability for proactive incident response",
      "Worked with OpenShift, EKS, and ArgoCD for container orchestration",
      "Embedded DevSecOps through policy-as-code and secure secrets management",
      "Drove digital transformation by integrating legacy systems and modernizing architecture",
    ],
    tags: ["OpenShift", "EKS", "ArgoCD", "DevSecOps", "CI/CD"],
  },
  {
    role: "Lead Cloud Engineer",
    company: "The Marygold Companies",
    location: "Denver, Colorado",
    period: "May 2022 – Apr 2025",
    highlights: [
      "Designed and implemented cloud infrastructure on AWS",
      "Deployed and managed EKS clusters across multiple regions and environments",
      "Managed CI/CD pipelines, Infrastructure as Code, and GitOps platforms",
      "Built internal developer tools with ArgoCD, Vault, Kafka, and Golang",
      "Mentored DevOps engineers on cloud implementation",
    ],
    tags: ["AWS", "EKS", "Vault", "Kafka", "Go", "IaC"],
  },
  {
    role: "Cloud DevOps Engineer",
    company: "Stanbic Bank Ghana",
    location: "Accra, Ghana",
    period: "Oct 2021 – Mar 2022",
    highlights: [
      "Deployed monitoring with InfluxDB, Grafana, and Splunk",
      "Built a Golang bandwidth monitoring tool correlating uptime with ISP SLAs",
      "Wrote Docker images, Kubernetes manifests, and Helm charts",
      "Developed CI/CD pipelines with Jenkins and Azure DevOps — 80% faster to production",
      "Managed API integrations with IBM API Connect",
    ],
    tags: ["Kubernetes", "Helm", "Grafana", "Go", "Jenkins"],
  },
  {
    role: "Software Engineer",
    company: "Global PayEX",
    location: "Mumbai, Maharashtra, India",
    period: "Nov 2021 – Mar 2022",
    highlights: [
      "Developed scheme management applications to automate client schemes and discount programs",
      "Worked with rules engines for highly complex client requirements",
      "Built microservice applications that have processed $50B+ in transactions",
      "Processed high-volume client data with ETL tools",
      "Built SSO integration into client applications",
    ],
    tags: ["Microservices", "ETL", "SSO", "Rules Engine", "Fintech"],
  },
  {
    role: "Software Engineer",
    company: "GXT Labs",
    location: "Kumasi, Ghana",
    period: "Feb 2016 – Dec 2020",
    highlights: [
      "Designed and implemented IoT gateways",
      "Built monitoring dashboards for infrastructure and IoT gateways",
      "Designed a platform for running applications on ARM-based dev boards",
      "Built an online platform for IoT deployment",
    ],
    tags: ["IoT", "Embedded", "ARM", "Monitoring"],
  },
];

export const skills = [
  "Python",
  "Go",
  "Java",
  "Kubernetes",
  "Docker",
  "CI/CD",
  "GitOps",
  "DevOps",
  "Kafka",
  "Microservices",
  "AWS",
  "SQL",
  "Linux",
  "Machine Learning",
  "Computer Vision",
  "Spring Boot",
  "ML Ops",
  "Kubeflow",
  "Vert.x",
  "Apache NiFi",
  "MediaPipe",
];

export const projects = [
  {
    name: "Sign Language Translator",
    period: "Jan 2020 – Apr 2020",
    description:
      "Cross-platform hand sign gesture recognition app built with MediaPipe. Featured in the awesome-mediapipe repository.",
    tags: ["MediaPipe", "Computer Vision", "Open Source"],
  },
];

export const education = {
  degree: "BSc Electrical/Electronics Engineering",
  school: "Kwame Nkrumah University of Science and Technology",
  location: "Kumasi, Ghana",
  period: "Oct 2016 – May 2020",
};

export const volunteer = [
  {
    role: "Project Lead",
    org: "PyData Ghana",
    period: "Nov 2018 – Present",
    location: "Kumasi, Ghana",
    description:
      "Built a sign language-to-speech app as part of a community open-source project.",
  },
  {
    role: "Tutor",
    org: "Ghana Engineering Students Association — KNUST",
    period: "Dec 2018 – Apr 2019",
    location: "Kumasi, Ghana",
    description:
      "Introduced College of Engineering students to electronics and embedded systems concepts.",
  },
  {
    role: "Project Maintainer",
    org: "Awesome Mediapipe (Google)",
    period: "Jan 2021 – Present",
    location: "",
    description: "Maintaining curated resources for the MediaPipe ecosystem.",
  },
  {
    role: "Project Tech Lead",
    org: "Artificial Intelligence Association Ghana — NVIDIA Deep Learning Institute",
    period: "Aug 2018 – Present",
    location: "",
    description: "Leading technical initiatives in Ghana's AI community.",
  },
];
