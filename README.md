# Next.js Demo for Class

This repository is a **Next.js** demo showcasing a few features such as **Bootstrap** integration, **CSS Modules**, and the use of the **cowsay** library for rendering a fun text output. Below are the details of the project structure and the features implemented.

## Demo Features

### 1. **Bootstrap Integration**
   - Bootstrap is used for styling throughout the app.
   - To integrate Bootstrap, it's imported globally in both the `about` and `home` pages.
   ```js
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

### 2. **CSS Modules**
   - CSS Modules allow scoped and modular CSS. In the `About` page, CSS is imported from the file `Box.module.css`.
   ```js
   import styles from '@/styles/Box.module.css';
   ```
   - This ensures that styles in `Box.module.css` only affect the elements in the `About` page, avoiding conflicts with other components.

### 3. **Cowsay Library**
   - The `cowsay` library is used to display a fun message in the console and on the page in the `About` page.
   ```js
   import { say } from 'cowsay';
   ```
   - In this demo, it displays "grazing in the browser" in the form of a text cow.
   ```js
   let cowWords = say({ text: 'grazing in the browser' });
   ```

---

## Project Structure

```
├── src/
│   ├── pages/
│   │   ├── about/
│   │   │   └── index.js      # About page with cowsay demo
│   │   └── index.js          # Home page
│   ├── styles/
│   │   └── Box.module.css     # CSS Module for About page
└── public/
    └── splash-img.png         # Image used on the Home page
```

### Pages

#### **Home Page** (`src/pages/index.js`)
- The homepage introduces **Jupiter Joe's**, using Bootstrap classes for layout and styling.
- It displays a header, an image (`splash-img.png`), and a centered description.

```js
export default function HomePage() {
  return (
    <div className="container">
      <h1>Jupiter Joe&rsquo;s</h1>
      <img src="splash-img.png" alt="jupiter joes" />
      <p className="text-center">
        The tastiest fries on Jupiter.
      </p>
    </div>
  );
}
```

#### **About Page** (`src/pages/about/index.js`)
- This page demonstrates the use of **CSS Modules** to style the `cowField` where the Cowsay output is displayed.
- The page also uses a button styled with Bootstrap and a custom `my-box` class defined in `src/styles/boxy.css` and imported globally in `src/pages/_app.js`.
- The **cowsay** library is used to generate and display a fun cow-shaped text output.
  
```js
export default function About() {
  let cowWords = say({ text: 'grazing in the browser' });
  console.log(cowWords);

  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="my-box"></div>
      <button className="btn btn-info">Click here</button>
      <pre className={styles.cowField}>
        {cowWords}
      </pre>
    </div>
  );
}
```

### **CSS Module** (`Box.module.css`)
- The `Box.module.css` file contains the scoped styles used on the About page, ensuring no style leakage to other parts of the app.

```css
.cowField {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  font-family: monospace;
}
```

---

## Running the Project

### Installation

1. Clone this repository:
   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project

To run the Next.js development server:
```bash
npm run dev
```

Then, visit `http://localhost:3000` in your browser to view the homepage, and navigate to `/about` to view the **About** page with the **Cowsay** demo.

---

## Key Concepts Demonstrated

- **Next.js Page Routing**: Each page is stored under the `src/pages` directory, and the URL path is automatically routed based on the file structure.
- **Bootstrap**: Bootstrap is integrated into the project for responsive and convenient styling.
- **CSS Modules**: Scoped styles using CSS Modules ensure modular, reusable, and non-conflicting styles.
- **Cowsay**: A fun demonstration of how to use third-party libraries like `cowsay` in Next.js projects.

Feel free to explore and modify the project!
