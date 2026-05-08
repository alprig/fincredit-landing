# FinCredit Landing — Project Context

## Что это
FinCredit Landing — маркетинговая страница для FinCredit. Тёмная тема, премиальный дизайн. Цель: конверсия в "Apply Now" и "Calculate Your Loan".

## Репозиторий
https://github.com/alprig/fincredit-landing

## Стек
- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS + Framer Motion
- **Deploy:** Vercel
- **Без backend**

## Архитектура компонентов
```
app/
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx           — Fast financing without the bank bureaucracy
│   ├── Stats.tsx          — 50k+ clients, €120M, 7 min
│   ├── WhyUs.tsx          — Why thousands choose FinCredit (6 cards)
│   ├── Calculator.tsx     — Calculate your loan (slider + pie chart)
│   ├── HowItWorks.tsx     — Three simple steps
│   ├── Testimonials.tsx   — Trusted by thousands
│   ├── MobileApp.tsx      — Your finances in your pocket
│   ├── FAQ.tsx            — Frequently asked questions
│   └── CTA.tsx            — Your financial freedom starts today
└── ui/
    ├── Button.tsx
    ├── Badge.tsx
    ├── SectionHeader.tsx
    └── Card.tsx

lib/
└── utils.ts
```

## Design System (из Pencil)
```
Цвета:
  Background:   #0a0e1a
  Surface:      #111827
  Accent:       #6366f1  (indigo/purple)
  Text:         #ffffff
  Muted:        #6b7280

Шрифты: Inter (system-ui), bold display

CTA кнопки:
  Primary:   bg-indigo-600 hover:bg-indigo-700 rounded-full
  Secondary: border border-gray-600 text-white rounded-full
```

## Роли агентов
- **Я (Claude)** — оркестратор: создаю Issues, ревьюю PR, принимаю решения. Код НЕ пишу.
- **GLM** — пишет сложные секции: Hero, Calculator, MobileApp
- **MiniMax** — пишет UI секции: Stats, WhyUs, HowItWorks, Testimonials, FAQ, CTA, Footer, Header

## Workflow
1. Я создаю GitHub Issue (Task)
2. Агент берёт задачу, пишет код в worktree ветке
3. Открывает PR, линкует к Issue
4. Я ревьюю → галочка в Issue → merge → следующий Task

## Команды
```bash
npm run dev        # localhost:3000
npm run typecheck  # npx tsc --noEmit
npm run build      # Production build
npm run lint       # ESLint
```

## PRD
Полный PRD: `tasks/01-prd-fincredit-landing.md`

## Текущий статус
См. `STATUS.md`

---

## Как работает сессия

**Я — оркестратор.** Спавню агентов через Agent tool, они пишут код автономно в изолированных ветках, открывают PR.

### Команды
- `спринт` — читаю Issues, спавню агентов параллельно
- `ревью` — ревьюю открытые PR
- `статус` — показываю что сделано / в работе / заблокировано

### Правила агентов
- Работает только в своих файлах (своя секция)
- Запускает `npm run typecheck` после каждого изменения
- Открывает PR с `Closes #N` в описании
- Не трогает чужие файлы
