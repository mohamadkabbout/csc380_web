# React Project - Replacing Bootstrap with Tailwind CSS

This project is a React application where Bootstrap was removed and replaced with Tailwind CSS for styling.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Git and GitHub

---

## Why We Use Tailwind CSS

Tailwind CSS is used because it gives more control over the design of the website.

Unlike Bootstrap, which gives ready-made components like `btn`, `card`, and `navbar`, Tailwind gives small utility classes that allow us to build our own design directly inside React components.

For example, in Bootstrap we write:

```tsx
<button className="btn btn-primary">
  Login
</button>
```

In Tailwind CSS we write:

```tsx
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
  Login
</button>
```

This makes the design more flexible and easier to customize.

### Benefits of Tailwind CSS

- Gives full control over the design
- Makes styling faster using ready utility classes
- Reduces the need for separate CSS or SCSS files
- Works well with React components
- Helps create responsive designs easily
- Makes the project cleaner and more modern

---

## What We Did in This Project

The main goal was to remove Bootstrap and replace it with Tailwind CSS.

We followed these steps:

1. Removed Bootstrap from the project
2. Removed Bootstrap imports
3. Installed Tailwind CSS
4. Configured Tailwind with Vite
5. Added Tailwind to the main CSS file
6. Replaced Bootstrap classes with Tailwind classes
7. Removed the old SCSS file from the login page
8. Tested the project
9. Committed each step using Git

---

## Step 1: Remove Bootstrap

Bootstrap was removed using this command:

```bash
npm uninstall bootstrap
```

After that, we committed the change:

```bash
git add package.json package-lock.json
git commit -m "Remove Bootstrap dependency"
```

---

## Step 2: Remove Bootstrap Imports

We removed Bootstrap imports from files such as:

```text
src/main.tsx
src/App.tsx
src/components/features/auth/login/login.tsx
```

Removed imports like:

```tsx
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```

Then we committed the change:

```bash
git add .
git commit -m "Remove Bootstrap imports"
```

---

## Step 3: Install Tailwind CSS

Tailwind CSS was installed using:

```bash
npm install tailwindcss @tailwindcss/vite
```

Then we committed the change:

```bash
git add package.json package-lock.json
git commit -m "Install Tailwind CSS"
```

---

## Step 4: Configure Tailwind with Vite

Tailwind was added to the Vite configuration file.

File:

```text
vite.config.ts
```

Configuration:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

Then we committed the change:

```bash
git add vite.config.ts
git commit -m "Configure Tailwind with Vite"
```

---

## Step 5: Add Tailwind CSS Import

Tailwind was imported inside:

```text
src/index.css
```

Using:

```css
@import "tailwindcss";
```

Also, `index.css` should be imported inside:

```text
src/main.tsx
```

Like this:

```tsx
import './index.css'
```

Then we committed the change:

```bash
git add src/index.css src/main.tsx
git commit -m "Add Tailwind CSS import"
```

---

## Step 6: Replace Bootstrap Classes with Tailwind Classes

We replaced Bootstrap classes with Tailwind utility classes.

Examples:

### Bootstrap container

```tsx
<div className="container">
```

Tailwind version:

```tsx
<div className="max-w-7xl mx-auto px-4">
```

### Bootstrap button

```tsx
<button className="btn btn-primary">
```

Tailwind version:

```tsx
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
```

### Bootstrap card

```tsx
<div className="card">
```

Tailwind version:

```tsx
<div className="rounded-xl bg-white p-6 shadow-md">
```

Then we committed the change:

```bash
git add src
git commit -m "Replace Bootstrap classes with Tailwind utilities"
```

---

## Step 7: Update Login Page

The login page was updated from Bootstrap/SCSS styling to Tailwind CSS.

Old files:

```text
src/components/features/auth/login/login.tsx
src/components/features/auth/login/login.scss
```

The SCSS import was removed from `login.tsx`:

```tsx
import './login.scss'
```

Then the `login.scss` file was removed because Tailwind classes are now used directly inside the React component.

Example Tailwind login button:

```tsx
<button className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">
  Login
</button>
```

Then we committed the change:

```bash
git add .
git commit -m "Replace login styling with Tailwind"
```

---

## Step 8: Test the Project

To run the project:

```bash
npm run dev
```

To check if the project builds correctly:

```bash
npm run build
```

If everything works, we commit the final result:

```bash
git add .
git commit -m "Verify Tailwind migration"
```

---

## Step 9: Push to GitHub

After all commits are done, the project can be pushed to GitHub:

```bash
git push
```

---

## Project Structure

```text
src/
  components/
    features/
      auth/
        login/
          login.tsx
          login.scss
  index.css
  main.tsx
vite.config.ts
package.json
README.md
```

---

## Final Result

Bootstrap was removed from the project and Tailwind CSS was added.

The project now uses Tailwind utility classes for styling React components. This makes the design more flexible, modern, and easier to customize.

