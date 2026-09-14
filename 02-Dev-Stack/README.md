# 🚀 Dev Stack

A simple and interactive React application where users can explore different technologies and build their own developer stack. Users can add technologies, remove individual technologies, or remove the entire stack.

## 🌐 Live Demo

[**Visit Dev Stack →**](https://02-dev-stack-iota.vercel.app/)

## 🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* React Toastify
* Vite
* JSON
* Git & GitHub

## ✨ Features

### 1. Explore Technologies

Users can view different technologies with their name, description, category, difficulty level, rating, badge, and icon.

### 2. Build Your Stack

Users can add technologies to their personal stack. Duplicate technologies cannot be added.

### 3. Manage Your Stack

Users can remove individual technologies or remove all selected technologies at once. Toast notifications are shown for different actions.

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── TechnologyCard.tsx
│   └── Technologies.tsx
│
├── App.tsx
├── main.tsx
└── ...

public/
└── data.json
```

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store and manage data inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component.

I used `useState` to store the technologies, selected stack, and loading status.

```tsx
const [stack, setStack] = useState<SelectedTechnology[]>([]);
```

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code when a component loads or when specific data changes.

I used `useEffect` to fetch the technology data from `data.json` when the Technologies component loads.

```tsx
useEffect(() => {
  loadTechnologies();
}, []);
```

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list. It helps React know which item was added, removed, or changed.

In this project:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    ...
  />
))}
```

Here, `technology.id` is used as the unique key.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it to show an empty stack message when no technology has been selected.

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    ...
  </div>
)}
```

If the stack is empty, the empty message is shown. Otherwise, the selected technologies are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using **props**.

In this project, `Technologies` passes information to `TechnologyCard`:

```tsx
<TechnologyCard
  name={technology.name}
  category={technology.category}
  icon={technology.icon}
/>
```

The child can send something back by calling a function passed from the parent as a prop.

For example:

```tsx
onAdd={() =>
  addToStack(
    technology.name,
    technology.category,
    technology.icon
  )
}
```

The `TechnologyCard` calls `onAdd` when the user clicks the **Add to Stack** button.

---

## Author

**Tanvir Rahman Anik**
