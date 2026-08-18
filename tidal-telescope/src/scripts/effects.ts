const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function initScrollProgress() {
  const bar = document.querySelector<HTMLElement>(".scroll-progress");
  if (!bar) return;

  const update = () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = height > 0 ? `${(scrollTop / height) * 100}%` : "0%";
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initReveal() {
  const elements = document.querySelectorAll<HTMLElement>(".reveal");
  if (!elements.length) return;

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  elements.forEach((el) => observer.observe(el));
}

function initNavHighlight() {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const links = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");
  if (!sections.length || !links.length) return;

  const linkMap = new Map<string, HTMLAnchorElement>();
  links.forEach((link) => {
    const id = link.getAttribute("href")?.replace("#", "");
    if (id) linkMap.set(id, link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((l) => l.classList.remove("is-active"));
        linkMap.get(id)?.classList.add("is-active");
      });
    },
    { threshold: 0.35, rootMargin: "-20% 0px -55% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

function initTerminalTypewriter() {
  const output = document.querySelector<HTMLElement>(".terminal-output");
  if (!output || prefersReducedMotion) return;

  const fullText = output.dataset.copy ?? output.textContent ?? "";
  output.textContent = "";
  output.classList.add("is-typing");

  let i = 0;
  const tick = () => {
    if (i < fullText.length) {
      output.textContent += fullText[i];
      i += 1;
      setTimeout(tick, 12 + Math.random() * 18);
    } else {
      output.classList.remove("is-typing");
    }
  };

  setTimeout(tick, 600);
}

function initTerminalCopy() {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".terminal-copy");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    const label = button.querySelector<HTMLElement>(".terminal-copy-label");
    const defaultLabel = label?.textContent ?? "copy";

    button.addEventListener("click", async () => {
      const output = document.querySelector<HTMLElement>(".terminal-output");
      const text =
        button.dataset.copy ??
        output?.dataset.copy ??
        output?.textContent ??
        "";

      try {
        await navigator.clipboard.writeText(text);
        button.classList.add("is-copied");
        if (label) label.textContent = "copied!";
        setTimeout(() => {
          button.classList.remove("is-copied");
          if (label) label.textContent = defaultLabel;
        }, 2000);
      } catch {
        if (label) label.textContent = "failed";
        setTimeout(() => {
          if (label) label.textContent = defaultLabel;
        }, 2000);
      }
    });
  });
}

function initOrbParallax() {
  if (prefersReducedMotion) return;

  const orbs = document.querySelectorAll<HTMLElement>(".glow-orb");
  if (!orbs.length) return;

  window.addEventListener(
    "mousemove",
    (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      orbs.forEach((orb, index) => {
        const strength = index === 0 ? 18 : 12;
        orb.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
    },
    { passive: true },
  );
}

function initNavScroll() {
  const nav = document.querySelector<HTMLElement>(".nav");
  if (!nav) return;

  const toggle = () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", toggle, { passive: true });
  toggle();
}

initScrollProgress();
initReveal();
initNavHighlight();
initTerminalTypewriter();
initTerminalCopy();
initOrbParallax();
initNavScroll();
