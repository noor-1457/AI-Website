import React, { useEffect, useState, useRef } from "react";
import {
  FaShoppingCart,
  FaHeartbeat,
  FaGraduationCap,
  FaBuilding,
  FaStore,
  FaBolt,
  FaChevronLeft,
  FaChevronRight,
  FaAward,
  FaUsers,
  FaQuestionCircle,
  FaEnvelopeOpenText,
  FaStar,
  FaCalendar,
  FaUser,
  FaEye,
  FaBrain,
  FaRocket,
  FaChartLine,
  FaCog,
  FaLightbulb,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "../Components/Reveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const industries = [
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: FaShoppingCart,
    accent: "text-indigo-300 bg-indigo-500/10",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
    problem: "Manual order handling and constant customer queries slow delivery and support.",
    automation: "AI chatbots plus automated order routing, inventory sync, and proactive shipping updates.",
    result: "Faster order cycles, higher CSAT, and fewer support tickets per purchase.",
    plays: [
      "24/7 product Q&A with upsell prompts",
      "Abandoned-cart recovery flows",
      "Auto-label creation + carrier selection",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: FaHeartbeat,
    accent: "text-rose-200 bg-rose-500/10",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    problem: "High no-show rates and manual intake eat staff time and reduce billable visits.",
    automation:
      "AI scheduling with smart reminders, digital intake, and eligibility checks before arrival.",
    result: "Lower no-shows, smoother front-desk operations, and more time for patient care.",
    plays: [
      "SMS + voice reminders with reschedule links",
      "Pre-visit form capture synced to EHR",
      "Post-visit follow-ups and care-plan nudges",
    ],
  },
  {
    id: "education",
    name: "Education",
    icon: FaGraduationCap,
    accent: "text-amber-200 bg-amber-500/10",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    problem:
      "Manual enrollment support and uneven learner engagement create drop-offs mid-program.",
    automation:
      "AI onboarding assistants, adaptive study plans, and automated progress nudges for cohorts.",
    result: "Higher course completion, faster support responses, and happier students.",
    plays: [
      "24/7 enrollment + financing FAQs",
      "Personalized study paths by performance",
      "Auto-grading with instant feedback",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: FaBuilding,
    accent: "text-emerald-200 bg-emerald-500/10",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    problem: "Leads slip through due to slow follow-up and manual tour coordination.",
    automation:
      "AI lead qualification, instant responses, and automated tour scheduling across agents.",
    result: "Minutes-to-seconds response times, higher conversions, and fuller pipelines.",
    plays: [
      "Lead scoring + routing to best agent",
      "Auto-scheduling property tours with reminders",
      "Listing Q&A chat with neighborhood data",
    ],
  },
  {
    id: "smb",
    name: "Small Businesses",
    icon: FaStore,
    accent: "text-cyan-200 bg-cyan-500/10",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1400&q=80",
    problem: "Owners juggle support, invoicing, and ops—making growth activities suffer.",
    automation:
      "AI assistants for support, billing workflows, and repeatable ops checklists that run themselves.",
    result: "Recovered founder time, predictable cash flow, and consistent customer follow-up.",
    plays: [
      "Smart help desk that drafts replies",
      "Automated invoicing + payment reminders",
      "Ops checklists triggered by events",
    ],
  },
];

const carouselSlides = [
  {
    id: "slide-ecommerce",
    title: "E-commerce automation",
    caption: "Smart routing, proactive shipping updates, and 24/7 product guidance.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "slide-healthcare",
    title: "Healthcare experience",
    caption: "Automated scheduling, reminders, and pre-visit intake to cut no-shows.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "slide-education",
    title: "Education journeys",
    caption: "Adaptive learning nudges and instant enrollment assistance.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "slide-realestate",
    title: "Real estate velocity",
    caption: "Instant lead qualification and automated tour scheduling.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "slide-smb",
    title: "Small business control",
    caption: "Hands-free invoicing, support replies, and repeatable ops checklists.",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1400&q=80",
  },
];

const kpis = [
  { label: "Response time", value: "x12 faster", desc: "Lead + support handling" },
  { label: "Ops time saved", value: "35-60%", desc: "Manual workflows removed" },
  { label: "Conversion uplift", value: "2-3.5x", desc: "Qualified, warmed leads" },
  { label: "Error reduction", value: "70%+", desc: "Data entry + scheduling" },
];

const playbook = [
  {
    title: "Map industry workflows",
    body: "Identify repetitive tasks, SLAs, and customer touchpoints to automate first.",
  },
  {
    title: "Pilot fast, scale safely",
    body: "Launch in weeks with guardrails, then expand to adjacent processes.",
  },
  {
    title: "Measure and tune",
    body: "Track response times, CSAT, cost per ticket, and revenue lift per journey.",
  },
];

const visualSnapshots = [
  {
    title: "AI assistant for retail",
    tag: "E-commerce",
    blurb: "Guides customers, routes orders, and surfaces upsells automatically.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    features: ["24/7 availability", "Multi-channel support", "Smart recommendations"],
    accent: "from-indigo-500 to-purple-500",
  },
  {
    title: "Smart scheduling desk",
    tag: "Healthcare",
    blurb: "Predicts demand, books appointments, and reminds patients proactively.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    features: ["Predictive analytics", "Auto-reminders", "Demand forecasting"],
    accent: "from-rose-500 to-pink-500",
  },
  {
    title: "Lead routing console",
    tag: "Real Estate",
    blurb: "Scores, qualifies, and books tours while syncing with your CRM.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    features: ["Lead scoring", "CRM integration", "Auto-booking"],
    accent: "from-emerald-500 to-teal-500",
  },
];

const playlistSlides = [
  {
    title: "Intent-aware chat",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    caption: "Routes conversations to sales or success with smart actions.",
    tag: "E-commerce",
  },
  {
    title: "Predictive scheduling",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80",
    caption: "Balances provider load and keeps utilization high.",
    tag: "Healthcare",
  },
  {
    title: "Adaptive learning nudges",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    caption: "Drives completion rates with AI-powered assistance.",
    tag: "Education",
  },
  {
    title: "Tour auto-booking",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    caption: "Instant tour confirmations and reminders for every lead.",
    tag: "Real Estate",
  },
  {
    title: "Ops co-pilot",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1400&q=80",
    caption: "Automates billing, support, and repeatable checklists.",
    tag: "SMB",
  },
];

const reviews = [
  {
    name: "Alina Perez",
    title: "COO, Urban Properties",
    quote:
      "Lead response time dropped from 24h to under 2 minutes. Pipeline efficiency is night and day. The automation platform integrates seamlessly with our existing tools.",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    industry: "Real Estate",
    metric: "250% conversion increase",
  },
  {
    name: "Marcus Lee",
    title: "VP Operations, MediCare",
    quote:
      "Automated reminders and intake cut no-shows by two thirds within the first month. Our staff can focus on patient care instead of admin tasks.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    industry: "Healthcare",
    metric: "67% no-show reduction",
  },
  {
    name: "Priya Desai",
    title: "Head of CX, StyleHub",
    quote:
      "Support tickets deflected by 40% while CSAT went up. The AI is on-brand and fast. Customer satisfaction scores are at an all-time high.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    industry: "E-commerce",
    metric: "40% ticket reduction",
  },
  {
    name: "Daniel Weber",
    title: "Founder, Northwind Learning",
    quote:
      "Adaptive nudges boosted course completion and freed up our instructors to focus on quality. Student engagement is through the roof.",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    industry: "Education",
    metric: "85% completion rate",
  },
];

const achievements = [
  {
    title: "Top AI Automation Partner 2025",
    detail: "Awarded by CloudScale Alliance",
    description: "Recognized for innovation and excellence in enterprise automation solutions",
    icon: FaAward,
    year: "2025",
    accent: "from-yellow-500 to-amber-500",
  },
  {
    title: "ISO 27001 Certified",
    detail: "Security-first delivery for regulated teams",
    description: "Enterprise-grade security standards ensuring data protection and compliance",
    icon: FaAward,
    year: "2024",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    title: "99.9% Uptime SLA",
    detail: "Monitored, redundant pipelines for critical ops",
    description: "Reliable infrastructure with comprehensive monitoring and failover systems",
    icon: FaAward,
    year: "Ongoing",
    accent: "from-emerald-500 to-teal-500",
  },
];

const faqs = [
  {
    q: "How fast can we launch?",
    a: "Most pilots go live in 3-4 weeks with guardrails and measurable KPIs.",
  },
  {
    q: "Do you integrate with our stack?",
    a: "Yes—CRM, helpdesk, calendars, comms, and data warehouses via APIs and iPaaS.",
  },
  {
    q: "How do you ensure security?",
    a: "Least-privilege access, audit logs, data encryption, and SOC2-aligned practices.",
  },
];

const blogPosts = [
  {
    title: "Designing AI playbooks for revenue teams",
    tag: "Article",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    link: "#",
    excerpt: "Learn how top revenue teams structure automation playbooks to accelerate sales cycles and improve conversion rates.",
    author: "Sarah Chen",
    date: "March 15, 2025",
    readTime: "8 min read",
  },
  {
    title: "Automation guardrails for regulated industries",
    tag: "Guide",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80&sat=-50",
    link: "#",
    excerpt: "Comprehensive guide to implementing automation in healthcare, finance, and other highly regulated sectors.",
    author: "Michael Torres",
    date: "March 8, 2025",
    readTime: "12 min read",
  },
  {
    title: "How to measure AI impact in 30 days",
    tag: "Playbook",
    image:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1400&q=80",
    link: "#",
    excerpt: "A step-by-step framework for quantifying ROI and business impact of AI automation initiatives.",
    author: "Emily Rodriguez",
    date: "March 1, 2025",
    readTime: "10 min read",
  },
];

const team = [
  {
    name: "Ava Thompson",
    role: "Head of Automation",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    bio: "Led automation initiatives for Fortune 500 companies, reducing operational costs by 40%+ across 50+ deployments.",
    expertise: ["Workflow Design", "AI Integration", "Process Optimization"],
    achievement: "300+ automations deployed",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    name: "Liam Patel",
    role: "Lead Solutions Architect",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "10+ years architecting scalable automation platforms. Previously at AWS and Microsoft, specializing in enterprise AI systems.",
    expertise: ["System Architecture", "Cloud Infrastructure", "API Design"],
    achievement: "5M+ API calls/month",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sofia Martinez",
    role: "AI Product Strategist",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    bio: "Expert in translating business needs into AI solutions. Built product strategies that drove $50M+ in efficiency gains.",
    expertise: ["Product Strategy", "AI Ethics", "User Experience"],
    achievement: "95% client satisfaction",
    accent: "from-cyan-500 to-emerald-500",
  },
];

const Industries = () => {
  const pageRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  const goTo = (direction) => {
    setActiveSlide((prev) => {
      const next = prev + direction;
      if (next < 0) return carouselSlides.length - 1;
      if (next >= carouselSlides.length) return 0;
      return next;
    });
  };

  useEffect(() => {
    if (!pageRef.current) return;
    const elements = Array.from(pageRef.current.querySelectorAll(".gsap-rise"));
    gsap.set(elements, { opacity: 0, y: 20 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.08,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!pageRef.current) return;
    const targets = gsap.utils.toArray("[data-parallax='card']");
    targets.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0.9 },
        {
          y: -20,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 30%",
            scrub: true,
          },
          delay: idx * 0.02,
        }
      );
    });
  }, []);

  // Newsletter section animations
  useEffect(() => {
    if (!pageRef.current) return;
    const newsletterSection = pageRef.current.querySelector('[data-newsletter]');
    if (!newsletterSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const form = entry.target.querySelector('form');
            const heading = entry.target.querySelector('h2');
            const badge = entry.target.querySelector('[data-newsletter-badge]');
            const trust = entry.target.querySelectorAll('[data-newsletter-trust] > div');

            gsap.fromTo(
              [badge, heading],
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2,
              }
            );

            gsap.fromTo(
              form,
              { opacity: 0, y: 40, scale: 0.95 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "back.out(1.2)",
                delay: 0.4,
              }
            );

            gsap.fromTo(
              trust,
              { opacity: 0, x: -20 },
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
                delay: 0.8,
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(newsletterSection);
    return () => observer.disconnect();
  }, []);

  // Team section animations
  useEffect(() => {
    if (!pageRef.current) return;
    const teamGrid = pageRef.current.querySelector('[data-team-grid]');
    if (!teamGrid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const members = Array.from(entry.target.querySelectorAll('[data-team-member]'));
            
            gsap.fromTo(
              members,
              {
                opacity: 0,
                y: 60,
                scale: 0.9,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.15,
                delay: 0.2,
              }
            );

            // Animate inner elements with delay
            members.forEach((member, idx) => {
              const avatar = member.querySelector('img');
              const name = member.querySelector('h3');
              const role = member.querySelector('p');
              const bio = member.querySelector('[data-member-bio]');
              const tags = Array.from(member.querySelectorAll('span[class*="rounded-full"]'));
              const achievement = member.querySelector('[class*="border-emerald"]');

              gsap.fromTo(
                avatar,
                { scale: 0, opacity: 0 },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.7,
                  ease: "back.out(1.4)",
                  delay: 0.5 + idx * 0.15,
                }
              );

              gsap.fromTo(
                [name, role],
                { opacity: 0, y: 20 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: "power2.out",
                  stagger: 0.1,
                  delay: 0.7 + idx * 0.15,
                }
              );

              gsap.fromTo(
                bio,
                { opacity: 0, y: 15 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: "power2.out",
                  delay: 0.9 + idx * 0.15,
                }
              );

              gsap.fromTo(
                tags,
                { opacity: 0, scale: 0.8, y: 10 },
                {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  duration: 0.5,
                  ease: "back.out(1.2)",
                  stagger: 0.08,
                  delay: 1.1 + idx * 0.15,
                }
              );

              gsap.fromTo(
                achievement,
                { opacity: 0, scale: 0.9, y: 10 },
                {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  duration: 0.6,
                  ease: "power2.out",
                  delay: 1.3 + idx * 0.15,
                }
              );
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(teamGrid);
    return () => observer.disconnect();
  }, []);

  // Reviews section animations
  useEffect(() => {
    if (!pageRef.current) return;
    const reviewsGrid = pageRef.current.querySelector('[data-reviews-grid]');
    if (!reviewsGrid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from(entry.target.querySelectorAll('[data-review-card]'));
            
            gsap.fromTo(
              cards,
              { opacity: 0, y: 50, scale: 0.95 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.1,
                delay: 0.2,
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(reviewsGrid);
    return () => observer.disconnect();
  }, []);

  // Awards section animations
  useEffect(() => {
    if (!pageRef.current) return;
    const awardsGrid = pageRef.current.querySelector('[data-awards-grid]');
    if (!awardsGrid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from(entry.target.querySelectorAll('[data-award-card]'));
            
            gsap.fromTo(
              cards,
              { opacity: 0, y: 60, scale: 0.95 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.15,
                delay: 0.2,
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(awardsGrid);
    return () => observer.disconnect();
  }, []);

  // Blog section animations
  useEffect(() => {
    if (!pageRef.current) return;
    const blogGrid = pageRef.current.querySelector('[data-blog-grid]');
    if (!blogGrid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from(entry.target.querySelectorAll('[data-blog-card]'));
            
            gsap.fromTo(
              cards,
              { opacity: 0, y: 50, scale: 0.9 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.2)",
                stagger: 0.12,
                delay: 0.2,
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(blogGrid);
    return () => observer.disconnect();
  }, []);

  // Blueprint section animations
  useEffect(() => {
    if (!pageRef.current) return;
    const blueprintGrid = pageRef.current.querySelector('[data-blueprint-grid]');
    if (!blueprintGrid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from(entry.target.querySelectorAll('[data-blueprint-card]'));
            
            gsap.fromTo(
              cards,
              { opacity: 0, y: 50, scale: 0.95 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                delay: 0.2,
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(blueprintGrid);
    return () => observer.disconnect();
  }, []);

  // Outcomes section animations
  useEffect(() => {
    if (!pageRef.current) return;
    const outcomesGrid = pageRef.current.querySelector('[data-outcomes-grid]');
    if (!outcomesGrid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from(entry.target.querySelectorAll('[data-outcome-card]'));
            
            gsap.fromTo(
              cards,
              { opacity: 0, y: 60, scale: 0.9 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                ease: "back.out(1.2)",
                stagger: 0.12,
                delay: 0.2,
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(outcomesGrid);
    return () => observer.disconnect();
  }, []);

  // Workflows section animations
  useEffect(() => {
    if (!pageRef.current) return;
    const workflowsGrid = pageRef.current.querySelector('[data-workflows-grid]');
    if (!workflowsGrid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from(entry.target.querySelectorAll('[data-workflow-card]'));
            
            gsap.fromTo(
              cards,
              { opacity: 0, y: 50, scale: 0.95 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.12,
                delay: 0.2,
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(workflowsGrid);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={pageRef}
      className="relative bg-gray-900 text-white pt-0 pb-16 overflow-hidden"
    >
      <div className="tech-bg">
        <span className="tech-blob one" />
        <span className="tech-blob two" />
        <span className="tech-blob three" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 space-y-14">
        {/* Carousel */}
        <Reveal className="mt-0 gsap-rise">
          <div className="relative left-1/2 w-screen -translate-x-1/2 transform overflow-hidden bg-gray-950/80 shadow-2xl">
            <div className="relative h-[80vh] min-h-[520px] max-h-[920px]">
              {carouselSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    idx === activeSlide
                      ? "opacity-100 translate-y-0 scale-100"
                      : "pointer-events-none opacity-0 translate-y-4 scale-95"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="mx-auto max-w-5xl px-6 sm:px-10 pb-8">
                      <p className="text-xs uppercase tracking-[0.18em] text-indigo-200">
                        Featured sector
                      </p>
                      <h3 className="text-3xl font-semibold text-white mt-2">
                        {slide.title}
                      </h3>
                      <p className="text-gray-200 mt-2 max-w-3xl">{slide.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-4 sm:px-6">
              <button
                onClick={() => goTo(-1)}
                className="pointer-events-auto rounded-full bg-gray-900/80 p-3 text-gray-100 shadow-lg shadow-black/30 transition hover:bg-gray-800"
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => goTo(1)}
                className="pointer-events-auto rounded-full bg-gray-900/80 p-3 text-gray-100 shadow-lg shadow-black/30 transition hover:bg-gray-800"
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {carouselSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2 w-7 rounded-full transition ${
                    idx === activeSlide ? "bg-indigo-400" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="flex items-center gap-3 mt-12 mb-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-200">
            <FaBolt className="text-indigo-300" />
            Focus: Real-world business use cases
          </span>
        </Reveal>

        <Reveal
          as="h1"
          className="gsap-rise text-4xl font-bold leading-tight sm:text-5xl text-shimmer"
        >
          Industries winning with AI automation
        </Reveal>
        <Reveal delay={120} className="gsap-rise">
          <p className="mt-4 max-w-3xl text-gray-300">
            See how teams remove manual work, speed up delivery, and keep customers
            happy with automation tailored to their workflows.
          </p>
        </Reveal>

        {/* Spotify-like slider */}
        <Reveal className="mt-10 gsap-rise">
          <div
            className="rounded-3xl border border-gray-800/70 bg-gray-950/60 backdrop-blur p-4 sm:p-6 shadow-2xl hover-float"
            data-parallax="card"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-2 sm:px-1">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">
                  Automation playlists
                </p>
                <h3 className="text-2xl font-semibold text-white">Swipe through live use cases</h3>
                <p className="text-gray-300">
                  Curated plays that ship fast and deliver measurable lift.
                </p>
              </div>
            </div>

            <Swiper
              modules={[EffectCoverflow, Pagination, Autoplay]}
              effect="coverflow"
              grabCursor
              centeredSlides
              loop
              spaceBetween={22}
              pagination={false}
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              speed={650}
              slidesPerView={1.08}
              breakpoints={{
                640: { slidesPerView: 1.4, spaceBetween: 22 },
                900: { slidesPerView: 1.8, spaceBetween: 24 },
                1200: { slidesPerView: 2.2, spaceBetween: 26 },
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 220,
                modifier: 1.05,
                slideShadows: false,
              }}
              className="mt-6"
            >
              {playlistSlides.map((item) => (
                <SwiperSlide key={item.title}>
              <div className="relative h-[340px] overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-indigo-900/40 hover-float">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/55 to-transparent" />
                    <div className="absolute top-3 left-3 rounded-full bg-indigo-500/85 px-3 py-1 text-xs font-semibold text-white">
                      {item.tag}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 backdrop-blur-[2px] bg-gray-950/40">
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-gray-200 leading-relaxed">{item.caption}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>

        <div className="mt-12 space-y-10">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            const isEven = idx % 2 === 0;
            return (
              <Reveal
                key={industry.id}
                delay={idx * 80}
                className={`group relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-950/70 shadow-2xl transition duration-500 hover:-translate-y-1 hover:shadow-indigo-900/40 hover-float`}
                data-parallax="card"
              >
                <div
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="relative w-full md:w-1/2 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-105 md:h-full"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold text-white shadow">
                      <Icon className="text-sm" />
                      {industry.name}
                    </div>
                    <div className="absolute top-4 right-4 rounded-full bg-indigo-500/80 px-3 py-1 text-xs font-semibold text-white">
                      Proven plays
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 p-6 lg:p-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-2xl text-xl ${industry.accent} ring-1 ring-gray-800`}
                      >
                        <Icon />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                          Industry spotlight
                        </p>
                        <h3 className="text-2xl font-semibold text-white">
                          {industry.name}
                        </h3>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3 text-sm">
                      <div className="rounded-xl border border-gray-800 bg-gray-900/80 p-3">
                        <p className="text-gray-400 text-xs">Problem</p>
                        <p className="font-medium text-white">{industry.problem}</p>
                      </div>
                      <div className="rounded-xl border border-indigo-500/30 bg-indigo-600/10 p-3">
                        <p className="text-indigo-200 text-xs">Automation</p>
                        <p className="font-medium text-indigo-50">
                          {industry.automation}
                        </p>
                      </div>
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-600/10 p-3">
                        <p className="text-emerald-200 text-xs">Result</p>
                        <p className="font-medium text-emerald-50">
                          {industry.result}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Example plays
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {industry.plays.map((play) => (
                          <div
                            key={play}
                            className="rounded-full border border-gray-800 bg-gray-800/70 px-3 py-2 text-sm text-gray-200 transition duration-200 hover:border-indigo-500/50 hover:text-white"
                          >
                            {play}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Automation Flow Blueprint - Enhanced */}
        <Reveal className="mt-16 gsap-rise">
          <div className="rounded-3xl border border-gray-800 bg-gray-950/70 p-8 sm:p-10 lg:p-12 shadow-2xl">
            {/* Header */}
            <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 px-5 py-2">
                <FaLightbulb className="text-indigo-300 text-xl" />
                <span className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
                  Flow Blueprint
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-shimmer mb-4">
                From signal to action, on autopilot
              </h2>
              <p className="max-w-2xl text-gray-300 text-lg">
                See how data, AI, and automation stitch together across teams to deliver seamless workflows.
              </p>
            </div>

            {/* Flow Steps */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-blueprint-grid>
              {[
                {
                  title: "Detect",
                  body: "Capture intent from web, chat, voice, or forms in real-time.",
                  icon: FaEye,
                  accent: "from-indigo-500 to-blue-500",
                  examples: ["Web forms", "Live chat", "Voice calls", "Email signals"],
                  step: "01",
                },
                {
                  title: "Decide",
                  body: "Score, prioritize, and pick the best next step with AI intelligence.",
                  icon: FaBrain,
                  accent: "from-blue-500 to-cyan-500",
                  examples: ["Lead scoring", "Priority routing", "Intent analysis", "Smart decisions"],
                  step: "02",
                },
                {
                  title: "Do",
                  body: "Trigger playbooks: schedule, notify, update CRM, or provision instantly.",
                  icon: FaRocket,
                  accent: "from-cyan-500 to-emerald-500",
                  examples: ["Auto-scheduling", "CRM updates", "Notifications", "Task provisioning"],
                  step: "03",
                },
                {
                  title: "Measure",
                  body: "Track lift: response time, conversions, CSAT, and business impact.",
                  icon: FaChartLine,
                  accent: "from-emerald-500 to-indigo-500",
                  examples: ["Performance metrics", "ROI tracking", "CSAT scores", "Impact analysis"],
                  step: "04",
                },
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    data-blueprint-card
                    className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-950/80 p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-900/30"
                  >
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                    {/* Step Number */}
                    <div className="mb-4 flex items-center justify-between">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
                        {step.step}
                      </span>
                      <div className={`rounded-xl bg-gradient-to-br ${step.accent} p-3`}>
                        <Icon className="text-xl text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-gray-300">{step.body}</p>

                    {/* Examples */}
                    <div className="space-y-2">
                      {step.examples.map((example, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-gray-400"
                        >
                          <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${step.accent}`} />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>

                    {/* Background Decoration */}
                    <div className={`absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-gradient-to-br ${step.accent} opacity-5 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
                  </div>
                );
              })}
            </div>

            {/* Flow Connector (Visual Line) */}
            <div className="mt-8 hidden items-center justify-center gap-4 lg:flex">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="h-0.5 w-16 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-50" />
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Outcomes & Metrics - Enhanced */}
        <Reveal className="mt-16 gsap-rise">
          <div className="rounded-3xl border border-gray-800 bg-gray-950/70 p-8 sm:p-10 lg:p-12 shadow-2xl">
            {/* Header */}
            <div className="mb-10 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 px-5 py-2">
                  <FaChartLine className="text-emerald-300 text-xl" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
                    Outcomes by Industry
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-shimmer mb-4">
                  What teams see live
                </h2>
                <p className="max-w-2xl text-gray-300 text-lg">
                  Every sector measures impact differently. We focus on the metrics that move revenue,
                  satisfaction, and operating leverage.
                </p>
              </div>
              <Link
                to="/case-studies"
                className="mt-6 sm:mt-0 inline-flex items-center gap-2 rounded-xl border border-indigo-400/50 bg-indigo-500/10 px-6 py-3 text-sm font-semibold text-indigo-200 transition-all duration-300 hover:bg-indigo-500/20 hover:border-indigo-400"
              >
                Explore Proofs
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* KPI Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-outcomes-grid>
              {kpis.map((kpi, idx) => {
                const gradients = [
                  "from-indigo-500 to-blue-500",
                  "from-blue-500 to-cyan-500",
                  "from-cyan-500 to-emerald-500",
                  "from-emerald-500 to-teal-500",
                ];
                return (
                  <div
                    key={kpi.label}
                    data-outcome-card
                    className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-950/80 p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-900/30"
                  >
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[idx]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`inline-flex rounded-xl bg-gradient-to-br ${gradients[idx]} p-3`}>
                        <FaChartLine className="text-xl text-white" />
                      </div>
                    </div>

                    {/* Value */}
                    <div className={`mb-2 text-4xl font-bold bg-gradient-to-r ${gradients[idx]} bg-clip-text text-transparent`}>
                      {kpi.value}
                    </div>

                    {/* Label */}
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {kpi.label}
                    </div>

                    {/* Description */}
                    <div className="text-sm text-gray-300">{kpi.desc}</div>

                    {/* Background Decoration */}
                    <div className={`absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-gradient-to-br ${gradients[idx]} opacity-5 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
                  </div>
                );
              })}
            </div>

            {/* Additional Context */}
            <div className="mt-10 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-indigo-500/20 p-3">
                  <FaLightbulb className="text-indigo-300 text-xl" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Real-world impact</h4>
                  <p className="text-sm leading-relaxed text-gray-300">
                    These metrics are based on aggregated data from 500+ enterprise deployments across all industries.
                    Actual results vary by use case, but we consistently see significant improvements in operational efficiency
                    and customer satisfaction within the first 90 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Reviews & Ratings - Enhanced */}
        <Reveal className="mt-16 gsap-rise">
          <div className="rounded-3xl border border-gray-800 bg-gray-950/70 p-8 sm:p-10 lg:p-12 shadow-2xl">
            {/* Header */}
            <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 px-5 py-2">
                <FaStar className="text-yellow-400 text-xl" />
                <span className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
                  Customer Voices
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-shimmer mb-4">
                Trusted by industry leaders
              </h2>
              <p className="max-w-2xl text-gray-300 text-lg">
                Real results from teams using our automation platform to transform their operations.
              </p>
              {/* Overall Rating */}
              <div className="mt-6 flex items-center gap-4">
                <div className="text-4xl font-bold text-white">4.9</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <div className="text-gray-400">Based on 500+ reviews</div>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-reviews-grid>
              {reviews.map((review, idx) => (
                <div
                  key={review.name}
                  data-review-card
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-950/80 p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-900/30"
                >
                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Background Decoration */}
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Rating Stars */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6 text-sm leading-relaxed text-gray-200">
                    "{review.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50" />
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="relative h-12 w-12 rounded-full object-cover border-2 border-gray-700 transition-all duration-500 group-hover:border-indigo-400 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.title}</p>
                      <p className="mt-1 text-xs font-medium text-indigo-300">{review.industry}</p>
                    </div>
                  </div>

                  {/* Metric Badge */}
                  <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-2 backdrop-blur-sm">
                    <p className="text-center text-xs font-semibold text-emerald-200">
                      {review.metric}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/50 bg-indigo-500/10 px-6 py-3 text-sm font-semibold text-indigo-200 transition-all duration-300 hover:bg-indigo-500/20 hover:border-indigo-400"
              >
                Read More Success Stories
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Visual Workflows - Enhanced */}
        <Reveal className="mt-16 gsap-rise">
          <div className="rounded-3xl border border-gray-800 bg-gray-950/70 p-8 sm:p-10 lg:p-12 shadow-2xl">
            {/* Header */}
            <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 px-5 py-2">
                <FaCog className="text-cyan-300 text-xl" />
                <span className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
                  Visual Workflows
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-shimmer mb-4">
                How automation looks in the field
              </h2>
              <p className="max-w-2xl text-gray-300 text-lg">
                Real interfaces your teams and customers interact with every day. See automation in action.
              </p>
            </div>

            {/* Workflow Cards */}
            <div className="grid gap-6 md:grid-cols-3" data-workflows-grid>
              {visualSnapshots.map((snap, idx) => (
                <div
                  key={snap.title}
                  data-workflow-card
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-950/80 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-900/30"
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${snap.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={snap.image}
                      alt={snap.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                    
                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block rounded-full bg-cyan-500/90 backdrop-blur-sm border border-cyan-400/50 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                        {snap.tag}
                      </span>
                    </div>

                    {/* Decorative Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${snap.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {snap.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-gray-300">
                      {snap.blurb}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {snap.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-gray-400"
                        >
                          <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${snap.accent}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Background Decoration */}
                  <div className={`absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-gradient-to-br ${snap.accent} opacity-5 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400"
              >
                Explore More Workflows
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Achievements & Awards - Enhanced */}
        <Reveal className="mt-16 gsap-rise">
          <div className="rounded-3xl border border-gray-800 bg-gray-950/70 p-8 sm:p-10 lg:p-12 shadow-2xl">
            {/* Header */}
            <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-400/30 px-5 py-2">
                <FaAward className="text-yellow-400 text-xl" />
                <span className="text-sm font-semibold uppercase tracking-wider text-yellow-200">
                  Recognitions
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-shimmer mb-4">
                Awards & industry recognition
              </h2>
              <p className="max-w-2xl text-gray-300 text-lg">
                Excellence recognized by industry leaders and validated through enterprise-grade certifications.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid gap-6 md:grid-cols-3" data-awards-grid>
              {achievements.map((item, idx) => (
                <div
                  key={item.title}
                  data-award-card
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-950/80 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-900/30"
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  {/* Background Decoration */}
                  <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${item.accent} opacity-5 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className={`relative rounded-full bg-gradient-to-br ${item.accent} p-4`}>
                      <item.icon className="relative text-3xl text-white" />
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.accent} blur-xl opacity-50`} />
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="mb-4 text-center">
                    <span className="inline-block rounded-full border border-gray-700 bg-gray-800/50 px-4 py-1 text-xs font-semibold text-gray-300">
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mb-4 text-sm font-semibold text-indigo-300">{item.detail}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{item.description}</p>
                  </div>

                  {/* Decorative Element */}
                  <div className="mt-6 flex justify-center">
                    <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${item.accent} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Stats */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-gray-400">Enterprise Clients</div>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support Coverage</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Playbook */}
        <Reveal className="mt-12" data-parallax="card">
          <div className="rounded-2xl border border-indigo-600/40 bg-indigo-600/10 p-6 shadow-xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">
                  Implementation playbook
                </p>
                <h3 className="text-2xl font-semibold text-white">How we roll out by industry</h3>
              </div>
              <Link
                to="/contact"
                className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-400"
              >
                Plan your rollout
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {playbook.map((step, idx) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-indigo-500/30 bg-gray-900/70 p-4"
                >
                  <div className="text-indigo-200 text-xs font-semibold">
                    Step {idx + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-white mt-1">{step.title}</h4>
                  <p className="text-sm text-gray-300 mt-2">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        <Reveal className="mt-12" data-parallax="card">
          <div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-6 shadow-xl hover-float">
            <div className="flex items-center gap-3">
              <FaQuestionCircle className="text-indigo-300 text-2xl" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">FAQ</p>
                <h3 className="text-2xl font-semibold text-white">Answers at a glance</h3>
              </div>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-gray-800 bg-gray-900/70 p-4 transition"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-white font-semibold">
                    <span>{item.q}</span>
                    <span className="text-indigo-200 group-open:rotate-45 transition text-lg">+</span>
                  </summary>
                  <p className="mt-2 text-sm text-gray-300">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Blog & Articles - Enhanced */}
        <Reveal className="mt-16 gsap-rise">
          <div className="rounded-3xl border border-gray-800 bg-gray-950/70 p-8 sm:p-10 lg:p-12 shadow-2xl">
            {/* Header */}
            <div className="mb-10 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 px-5 py-2">
                  <FaCalendar className="text-indigo-300 text-xl" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
                    Insights
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-shimmer mb-4">
                  Latest articles & guides
                </h2>
                <p className="max-w-2xl text-gray-300 text-lg">
                  Expert insights, best practices, and actionable guides to help you succeed with AI automation.
                </p>
              </div>
              <Link
                to="#"
                className="mt-6 sm:mt-0 inline-flex items-center gap-2 rounded-xl border border-indigo-400/50 bg-indigo-500/10 px-6 py-3 text-sm font-semibold text-indigo-200 transition-all duration-300 hover:bg-indigo-500/20 hover:border-indigo-400"
              >
                View All Articles
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Blog Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-blog-grid>
              {blogPosts.map((post, idx) => (
                <Link
                  key={post.title}
                  to={post.link}
                  data-blog-card
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-950/80 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-900/30"
                >
                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block rounded-full bg-indigo-500/90 backdrop-blur-sm border border-indigo-400/50 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                        {post.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-white line-clamp-2 group-hover:text-indigo-200 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-300 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="mb-4 flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <FaUser className="text-xs" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaCalendar className="text-xs" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Read Time & CTA */}
                    <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                      <span className="text-xs font-medium text-gray-400">{post.readTime}</span>
                      <span className="flex items-center gap-2 text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors">
                        Read More
                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Background Decoration */}
                  <div className="absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Team - Enhanced */}
        <Reveal className="mt-16 gsap-rise">
          <div className="rounded-3xl border border-gray-800 bg-gray-950/70 p-8 sm:p-10 lg:p-12 shadow-2xl">
            {/* Header */}
            <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 px-5 py-2">
                <FaUsers className="text-indigo-300 text-xl" />
                <span className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
                  Our Team
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-shimmer mb-4">
                The experts behind every rollout
              </h2>
              <p className="max-w-2xl text-gray-300 text-lg">
                Seasoned professionals with deep expertise in AI automation, enterprise architecture, and product strategy.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-team-grid>
              {team.map((member, idx) => (
                <div
                  key={member.name}
                  data-team-member
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-950/80 p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-900/30"
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  {/* Background Decoration */}
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative">
                    {/* Avatar */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50`} />
                        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-gray-700 transition-all duration-500 group-hover:border-indigo-400 group-hover:scale-105">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="mb-4 text-center">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-indigo-300 font-semibold text-sm">{member.role}</p>
                    </div>

                    {/* Bio */}
                    <p className="mb-5 text-center text-sm leading-relaxed text-gray-300" data-member-bio>
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="mb-5 flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-200 transition-colors duration-300 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Achievement */}
                    <div className="flex items-center justify-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 backdrop-blur-sm">
                      <FaAward className="text-emerald-400 text-sm" />
                      <p className="text-xs font-semibold text-emerald-200">{member.achievement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <p className="mb-4 text-gray-400">
                Want to join our team? We're always looking for talented individuals.
              </p>
              <Link
                to="/contact"
                className="group/cta inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-900/50"
              >
                View Open Positions
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Newsletter - Hero Style */}
        <Reveal className="mt-16 gsap-rise">
          <div data-newsletter className="group relative left-1/2 w-screen -translate-x-1/2 transform overflow-hidden rounded-3xl border border-indigo-600/30 bg-gray-950/90 shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80"
                alt="AI Technology Background"
                className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-gray-900/85 to-indigo-950/80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.15),transparent_50%)]" />
            </div>

            {/* Content */}
            <div className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-4xl">
                {/* Badge */}
                <div className="mb-6 flex items-center justify-center" data-newsletter-badge>
                  <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-indigo-200">
                    <FaEnvelopeOpenText className="text-indigo-300" />
                    Newsletter
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl text-shimmer mb-4">
                  Stay ahead with AI automation
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-200 sm:text-xl">
                  Get monthly briefs on launches, playbooks, real-world results, and exclusive automation insights delivered to your inbox.
                </p>

                {/* Form */}
                <form
                  className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row sm:gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle subscription
                  }}
                >
                  <div className="flex-1">
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email"
                      className="h-14 w-full rounded-xl border-2 border-indigo-300/30 bg-white/95 px-5 text-base text-gray-900 placeholder-gray-500 shadow-lg backdrop-blur-sm transition-all duration-300 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group/btn h-14 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 px-8 text-base font-semibold text-white shadow-xl shadow-indigo-900/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-900/50 active:scale-95"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Subscribe
                      <svg
                        className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </button>
                </form>

                {/* Trust Indicators */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300" data-newsletter-trust>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No spam, unsubscribe anytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Join 10,000+ professionals</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
          </div>
        </Reveal>

        <Reveal className="mt-12 flex flex-col gap-4 rounded-2xl border border-indigo-600/40 bg-indigo-600/10 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">
              Launch automation in weeks, not months.
            </h3>
            <p className="text-indigo-100">
              Book a tailored walkthrough for your industry and stack.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-lg bg-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-400"
            >
              Talk to an expert
            </Link>
            <Link
              to="/case-studies"
              className="rounded-lg border border-indigo-300 px-5 py-2 text-sm font-semibold text-indigo-100 hover:bg-indigo-500/10"
            >
              See success stories
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Industries;

