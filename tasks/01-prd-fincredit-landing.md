# PRD: FinCredit Landing Page

## Introduction

FinCredit Landing — маркетинговая посадочная страница для FinCredit. Тёмная тема, премиальный дизайн. Один экран, 10 секций. Дизайн из Pencil (`pencil-new.pen`, frame `uDzvY`).

**Цель:** конверсия посетителя в клиента через "Apply Now" / "Calculate Your Loan".

## Design Reference (Pencil node IDs)
| Секция | Node ID | Высота |
|--------|---------|--------|
| Hero | G6LRCI | 900px |
| Stats | s0sNzB | 457px |
| WhyUs | bD7gN | 739px |
| Calculator | X6bOv | 785px |
| HowItWorks | QAOBd | 619px |
| Testimonials | P85BR | 730px |
| MobileApp | xSQL1 | 1153px |
| FAQ | uNFxQ | 1140px |
| CTA | ugiTu | 608px |
| Footer | SLCZu | 361px |

## Design System

### Цвета
- Background: `#0a0e1a` (основной тёмно-синий фон)
- Surface card: `#111827`
- Accent: `#6366f1` (indigo) — кнопки, highlights
- Text primary: `#ffffff`
- Text muted: `#6b7280`
- Border: `rgba(255,255,255,0.08)`

### Кнопки
- Primary: `bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-3`
- Secondary: `border border-gray-600 text-white rounded-full px-6 py-3 hover:bg-white/5`

### Анимации
- Framer Motion: `whileInView` с `once: true`
- Секции: fade-in + slide-up (y: 24, opacity: 0 → 1)
- Stagger для карточек: 0.08s между элементами

## User Stories

### US-001: Foundation
**Секция:** Инфраструктура
**Компоненты:**
- `lib/utils.ts` — cn() helper
- `app/globals.css` — CSS variables, reset, base styles
- `app/layout.tsx` — metadata, fonts (Inter)
- `app/page.tsx` — сборка всех секций
- `components/ui/Button.tsx` — Primary + Secondary варианты
- `components/ui/Badge.tsx` — статус-бейджи
- `components/ui/SectionHeader.tsx` — eyebrow + headline + subheadline
- `components/ui/Card.tsx` — тёмная карточка с border

**Acceptance Criteria:**
- [ ] `npm run typecheck` проходит без ошибок
- [ ] globals.css содержит CSS-переменные для цветов
- [ ] Button работает с variant="primary" и variant="secondary"
- [ ] Страница рендерится без ошибок

### US-002: Header + Footer
**Секция:** Layout
**Компоненты:** `components/layout/Header.tsx`, `components/layout/Footer.tsx`

**Header (из дизайна):**
- Logo: "FinCredit" текст слева
- Nav: Products, Solutions, Pricing, About
- Buttons: "Sign In" (ghost) + "Get Started" (primary, rounded-full, bg-indigo-600)
- Fixed, bg прозрачный → blur при скролле

**Footer (из дизайна):**
- Слева: FinCredit логотип + описание + соц. иконки
- Справа: 3 колонки — Product, Company, Legal
- Низ: copyright + "Licenced and regulated by the European Central Bank"

**Acceptance Criteria:**
- [ ] Header fixed, sticky с blur при скролле
- [ ] Все nav ссылки кликабельны (href="#")
- [ ] Footer 4-колоночный на desktop, стек на mobile
- [ ] `npm run typecheck` проходит

### US-003: Hero
**Секция:** `components/sections/Hero.tsx`
**Дизайн:** Тёмный фон #0a0e1a, крупный заголовок по центру

**Контент:**
- Headline: "Fast financing without the bank bureaucracy" (2 строки)
- Sub: "Get instant approval with flexible terms. AI-powered scoring, transparent rates, and funds in your account within minutes."
- Кнопки: "Apply Now" (indigo, rounded-full) + "Calculate Your Loan" (ghost)
- Карточки Dashboard (Account Overview €24,850, chart) + FinCredit card (VISA ••••4821, €15,000)

**Acceptance Criteria:**
- [ ] Минимум 100vh высота
- [ ] Responsive (mobile-first)
- [ ] Анимация fade-in на заголовке
- [ ] Floating карточки видны на desktop
- [ ] `npm run typecheck` проходит

### US-004: Calculator
**Секция:** `components/sections/Calculator.tsx`
**Дизайн:** Тёмная карточка, слайдеры слева, результат справа

**Контент:**
- Headline: "Calculate your loan"
- Sub: "See exactly what you'll pay — no surprises, no hidden charges."
- Слайдер: Loan Amount (€1,000–€50,000, default €15,000)
- Кнопки срока: 6m, 12m, 24m, 36m, 48m, 60m (default 24m)
- Результат: Monthly Payment €654/mo, круговая диаграмма (Principal 94.3% / Interest)
- Breakdown: Principal Amount, Interest Rate (3%), Total Interest, Total Repayment
- CTA: "Apply for This Loan →"

**Acceptance Criteria:**
- [ ] Слайдер интерактивный, значения обновляются
- [ ] Круговая диаграмма перерисовывается при изменении
- [ ] Расчёт корректный (аннуитетный платёж)
- [ ] Responsive
- [ ] `npm run typecheck` проходит

### US-005: MobileApp
**Секция:** `components/sections/MobileApp.tsx`
**Дизайн:** Два мокапа телефона в центре, фичи снизу

**Контент:**
- Eyebrow: "MOBILE APP"
- Headline: "Your finances in your pocket"
- Sub: "Manage loans, track payments, and monitor your credit score — all from our beautifully designed mobile app."
- Телефон 1: Dashboard (€24,850, Recent Transactions)
- Телефон 2: My Loan (€8,420, Credit Score 780 Excellent)
- Фичи: Biometric Login, Smart Notifications, Real-time Analytics, Secure Transfers
- CTA: App Store + Google Play кнопки

**Acceptance Criteria:**
- [ ] Два телефона рядом (desktop) / стек (mobile)
- [ ] Анимация появления телефонов
- [ ] App Store / Google Play кнопки
- [ ] `npm run typecheck` проходит

### US-006: Stats
**Секция:** `components/sections/Stats.tsx`
**Дизайн:** Тёмная полоса, 3 цифры + Trust logos

**Контент:**
- 50,000+ Approved Clients
- €120M Total Financed
- 7 min Average Approval Time
- Trusted by: VISA, Mastercard, SWIFT, BCE, TrustPilot, ISO 27001
- Бейджи: Bank-grade encryption, 256-bit SSL, PCI DSS Compliant, EU Licensed

**Acceptance Criteria:**
- [ ] 3 стата выровнены по центру с разделителями
- [ ] Лого партнёров
- [ ] Responsive
- [ ] `npm run typecheck` проходит

### US-007: WhyUs
**Секция:** `components/sections/WhyUs.tsx`
**Дизайн:** 6 карточек 2×3 на тёмном фоне

**Контент:**
- Eyebrow: "WHY FINCREDIT"
- Headline: "Why thousands choose FinCredit"
- Sub: "Discover the advantages that set us apart from traditional lenders."
- Карточки:
  1. Instant Approval — AI-powered in minutes
  2. No Hidden Fees — transparent pricing
  3. Flexible Repayment — 2 to 60 months
  4. 100% Online — from anywhere
  5. AI-Powered Scoring — beyond traditional credit
  6. Bank-Grade Security — military encryption

**Acceptance Criteria:**
- [ ] 3 колонки на desktop, 2 на tablet, 1 на mobile
- [ ] Stagger анимация карточек
- [ ] `npm run typecheck` проходит

### US-008: HowItWorks
**Секция:** `components/sections/HowItWorks.tsx`
**Дизайн:** 3 шага в ряд с иконками и номерами

**Контент:**
- Eyebrow: "HOW IT WORKS"
- Headline: "Three simple steps"
- Sub: "From application to funds in your account — fast, simple, secure."
- Шаг 01: Fill Your Application — "Complete our simple online form in under 2 minutes."
- Шаг 02: AI Verification — "Our algorithms verify and approve your application instantly."
- Шаг 03: Receive Your Funds — "Money transferred directly to your bank account within hours."

**Acceptance Criteria:**
- [ ] 3 шага в ряд с линиями-соединителями
- [ ] Номера 01/02/03 крупные и акцентные
- [ ] `npm run typecheck` проходит

### US-009: Testimonials
**Секция:** `components/sections/Testimonials.tsx`
**Дизайн:** 3 карточки с отзывами, звёзды, аватары

**Контент:**
- Eyebrow: "WHAT OUR CLIENTS SAY"
- Headline: "Trusted by thousands of professionals"
- Sub: "Real stories from real people who transformed their financial lives with FinCredit."
- Testimonial 1: Maria Kowalski — "FinCredit approved my loan in under 15 minutes..." ★★★★★
- Testimonial 2: Alex Thompson — "As an entrepreneur I needed capital for my startup..." ★★★★★
- Testimonial 3: Sophie Laurent — "I was skeptical about online lending, but FinCredit changed my mind completely..." ★★★★★
- Соц. доказательство: 4.9/5 on TrustPilot, 2,400+ reviews, NPS 76

**Acceptance Criteria:**
- [ ] 3 карточки горизонтально (desktop)
- [ ] Звёзды отрендерены
- [ ] Соц. доказательство снизу
- [ ] `npm run typecheck` проходит

### US-010: FAQ
**Секция:** `components/sections/FAQ.tsx`
**Дизайн:** Accordion, тёмный фон, 5 вопросов

**Контент:**
- Headline: "Frequently asked questions"
- Sub: "Everything you need to know about FinCredit. Can't find what you're looking for? Contact our support team."
- Q1: What are the eligibility requirements?
- Q2: How fast can I receive my funds?
- Q3: What interest rates do you offer? (3–18% APR)
- Q4: Is my data secure? (AES-256, PCI DSS Level 1, ISO 27001)
- Q5: Can I repay my loan early? (yes, no penalty)
- Q6: What documents do I need to apply?

**Acceptance Criteria:**
- [ ] Accordion expand/collapse с анимацией
- [ ] Один открытый элемент за раз (или toggle)
- [ ] `npm run typecheck` проходит

### US-011: CTA
**Секция:** `components/sections/CTA.tsx`
**Дизайн:** Тёмный фон, большой заголовок по центру, 2 кнопки

**Контент:**
- Badge: "Start your journey today"
- Headline: "Your financial freedom starts today."
- Sub: "Join 50,000+ professionals who chose smarter financing. Apply in minutes, get approved instantly, and take control of your financial future."
- CTA: "Apply Now — It's Free" (indigo) + "Talk to an Expert" (ghost)
- Checklist: No credit checks to apply, Cancel anytime, No hidden fees

**Acceptance Criteria:**
- [ ] Центрированный layout
- [ ] 2 кнопки в ряд
- [ ] Checklist с иконками ✓
- [ ] `npm run typecheck` проходит
