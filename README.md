# ⚡ DevStack Builder

A modern, responsive web application designed for developers to discover, filter, and assemble their ideal software development tech stacks with real-time feedback and persistent local storage.

---

## 📖 Description

**DevStack Builder** helps developers curate personalized toolsets across various software engineering categories (Frontend, Backend, Database, DevOps, and Tools). Users can explore technology cards, view difficulty ratings and badges, and add selected tools to their stack in real time. The app enforces duplicate prevention, displays interactive notifications, and saves the user's stack automatically to local storage so items remain intact across page reloads.

---

## 🛠️ Technologies Used

- **React 18** (Functional components, custom hooks)
- **TypeScript** (Strict type definitions and interface contracts)
- **Vite** (Next-generation frontend toolchain)
- **Tailwind CSS & DaisyUI** (Utility-first responsive styling with custom gradient branding)
- **Lucide React** (Modern, clean UI icon set)
- **React-Toastify** (Real-time toast notifications for user interactions)
- **JSON & Async Fetch API** (Asynchronous dataset loading with simulated loading states)

---

## ✨ Key Features

1. **Interactive Tech Catalog & Smart Filtering**  
   Responsive 3-column grid displaying technology cards with icons, badges, descriptions, difficulty levels, and star ratings. Buttons automatically reflect when an item has been added.

2. **Real-time Stack Management & Local Storage Persistence**  
   Sidebar stack panel displaying selected tools with individual item removal and "Remove All" capabilities. The user's stack is automatically synchronized with `localStorage` so items persist across page refreshes.

3. **User Experience & Custom Branding System**  
   Built with a unified gradient brand theme (orange → pink → violet), smooth sticky navbar, mobile hamburger drawer, simulated loading spinner, error fallback boundaries, and `react-toastify` alerts for all user actions.

---

## ❓ React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like markup directly inside JavaScript code. It is used in React because it makes rendering logic and UI structures intuitive, readable, and type-safe. Under the hood, JSX gets transformed into standard `React.createElement()` JavaScript calls.

---

### 2. What is the difference between props and state?
**Answer:**  
- **Props (Properties):** Read-only data passed from a parent component down to a child component. They are immutable from the child's perspective.
- **State:** Internal data created and managed within a component. Unlike props, state is mutable (via setter functions) and causes the component to re-render whenever it updates.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
`useState` is a React hook that enables functional components to maintain and update internal state across re-renders.  
In this project, `useState` was used in `App.tsx` to manage:
- `technologies`: Array of fetched tech items.
- `selectedStack`: Array of user-selected technologies (initialized lazily from `localStorage`).
- `loading`: Boolean flag tracking asynchronous dataset loading status.
- `error`: String message capturing fetch errors.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
`useEffect` allows functional components to execute side effects (such as data fetching, manual DOM updates, or event listeners) after rendering.  
It was needed to fetch technology data asynchronously from `/technologies.json` when the component first mounts (using an empty dependency array `[]`), and also to automatically persist `selectedStack` to browser `localStorage` whenever the stack state changes.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
The `key` prop provides React with a unique identifier for each list item. This allows React's diffing algorithm to efficiently identify which items have changed, been added, or removed during re-renders, preventing unnecessary DOM re-creations and preserving internal component state.

---

### 6. What is conditional rendering? Show one place you used it in this project.
**Answer:**  
Conditional rendering means displaying different UI components or elements based on specific conditions or state values.  
One place it was used is in `YourStack.tsx`, where an empty state message is shown if `selectedStack.length === 0`, whereas a list of selected technology cards is rendered if `selectedStack.length > 0`:

```tsx
{selectedStack.length === 0 ? (
  <div className="empty-state">No technology added yet.</div>
) : (
  <div className="stack-list">
    {selectedStack.map((tech) => (
      <StackItem key={tech.id} technology={tech} />
    ))}
  </div>
)}
```

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child:** Data is passed down via `props` (e.g., `<TechnologyCard technology={tech} />`).
- **Child to Parent:** The parent passes a callback function as a prop to the child component (e.g., `onAddToStack={handleAddToStack}`). When an action occurs inside the child (such as a button click), the child invokes that callback function, passing relevant parameters back up to the parent.
