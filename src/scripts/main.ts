// All page interactions. Each init is independent and safe if its section is missing.
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function initTheme() {
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const root = document.documentElement;
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('theme', next);
    }),
  );
}

function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const bar = document.querySelector<HTMLElement>('.scroll-progress');
  const onScroll = () => {
    nav?.classList.toggle('is-scrolled', scrollY > 8);
    const max = document.documentElement.scrollHeight - innerHeight;
    bar?.style.setProperty('--p', String(max > 0 ? scrollY / max : 0));
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;
  const set = (open: boolean) => { menu.hidden = !open; toggle.setAttribute('aria-expanded', String(open)); };
  toggle.addEventListener('click', () => set(menu.hidden));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
  addEventListener('keydown', (e) => e.key === 'Escape' && set(false));
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-visible')); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
  els.forEach((el) => io.observe(el));
}

function initCountUp() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.count); const dec = Number(el.dataset.decimals || 0);
    if (reduceMotion || target === 0) return;
    const start = performance.now(); const dur = 1400;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1); const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = (target * eased).toLocaleString(undefined, { minimumFractionDigits: dec, maximumFractionDigits: dec });
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { run(e.target as HTMLElement); io.unobserve(e.target); }
  }), { threshold: 0.6 });
  els.forEach((el) => io.observe(el));
}

function initTabs() {
  document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root) => {
    const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
    const select = (i: number) => tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')!)!.hidden = !on;
      if (on) t.focus({ preventScroll: true });
    });
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') select((i + 1) % tabs.length);
        if (e.key === 'ArrowLeft') select((i - 1 + tabs.length) % tabs.length);
      });
    });
  });
}

function initCopy() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) =>
    btn.addEventListener('click', async () => {
      const code = btn.parentElement?.querySelector('code')?.textContent ?? '';
      const label = btn.querySelector('span');
      try { await navigator.clipboard.writeText(code); if (label) label.textContent = 'Copied'; }
      catch { if (label) label.textContent = 'Press Ctrl+C'; }
      setTimeout(() => label && (label.textContent = 'Copy'), 1800);
    }),
  );
}

// Live GitHub star count, cached for 1 hour in localStorage.
async function initStars() {
  const el = document.querySelector<HTMLElement>('[data-stars]');
  const repo = el?.dataset.stars; if (!el || !repo) return;
  const key = `stars:${repo}`; const label = el.querySelector('span:last-child')!;
  const fmt = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(n));
  try {
    const cached = JSON.parse(localStorage.getItem(key) || 'null');
    if (cached && Date.now() - cached.t < 3600_000) { label.textContent = fmt(cached.n); return; }
    const res = await fetch(`https://api.github.com/repos/${repo}`);
    if (!res.ok) return;
    const n = (await res.json()).stargazers_count as number;
    localStorage.setItem(key, JSON.stringify({ n, t: Date.now() }));
    label.textContent = fmt(n);
  } catch { /* offline: keep "Star" */ }
}

initTheme(); initNav(); initReveal(); initCountUp(); initTabs(); initCopy(); initStars();
