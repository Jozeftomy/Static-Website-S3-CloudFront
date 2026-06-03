export const postsData = [
  {
    id: "getting-started-with-react-19",
    title: "Getting Started with React 19: The New Features and Compiler",
    excerpt: "Explore the new features of React 19, including the revolutionary React Compiler, Server Components, Action hooks, and asset loading improvements.",
    category: "Technology",
    tags: ["React", "JavaScript", "Frontend", "Vite"],
    date: "June 03, 2026",
    readTime: "6 min read",
    coverImage: "/images/post_tech.png",
    author: {
      name: "Joseph Tomy",
      role: "Lead Frontend Engineer",
      avatar: "/images/about_author.png"
    },
    featured: true,
    content: `
      <p class="lead">React 19 is officially here, and it represents one of the most substantial leaps forward in the history of the library. With the introduction of the automated React Compiler and refined Hooks, frontend development is changing forever.</p>
      
      <h3>The React Compiler (React Forget)</h3>
      <p>For years, React developers had to manually manage memoization using <code>useMemo</code> and <code>useCallback</code> to prevent unnecessary re-renders. This added cognitive load and often resulted in cluttered codebases.</p>
      <p>React 19 introduces the **React Compiler**, an automated tool that compiles your code to optimize renders behind the scenes. It automatically analyzes your component tree and memoizes values and functions when safe, completely eliminating the need for boilerplate memoization code.</p>

      <blockquote>
        "The React Compiler is a game-changer. It shifts the burden of rendering optimization from developer discipline to the framework itself."
      </blockquote>

      <h3>Actions: Simplifying Form Management</h3>
      <p>Handling form submissions, loading states, and error handling has always required considerable state tracking. React 19 introduces **Actions**, which allows you to pass async functions directly to HTML elements:</p>
      
      <pre><code>// In React 19, you can write:
&lt;form action={async (formData) => {
  const result = await updateProfile(formData);
  if (result.error) {
    showError(result.error);
  }
}}&gt;
  &lt;input name="username" /&gt;
  &lt;button type="submit"&gt;Update&lt;/button&gt;
&lt;/form&gt;</code></pre>

      <p>Along with actions, two new hooks make state synchronization seamless:</p>
      <ul>
        <li><strong>useActionState:</strong> Handles async states, loading indicators, and error tracking automatically.</li>
        <li><strong>useFormStatus:</strong> Lets child components access their parent form's submission state without prop drilling.</li>
      </ul>

      <h3>Summary</h3>
      <p>React 19 focuses on removing developer friction. By automating memoization, simplifying async operations via Actions, and refining resource loading, the React team has provided a solid foundation for the next decade of web development.</p>
    `
  },
  {
    id: "mastering-minimal-web-design",
    title: "Mastering Minimal Web Design: Glassmorphism and Neon Glows",
    excerpt: "Learn how to craft high-end user interfaces using modern CSS. We break down the mathematics of backdrop blur, subtle borders, and neon box-shadows.",
    category: "Design",
    tags: ["CSS", "Web Design", "UI/UX", "Aesthetics"],
    date: "May 28, 2026",
    readTime: "4 min read",
    coverImage: "/images/post_design.png",
    author: {
      name: "Joseph Tomy",
      role: "Lead UI/UX Designer",
      avatar: "/images/about_author.png"
    },
    featured: false,
    content: `
      <p class="lead">Web design trends come and go, but the combination of sleek minimalism, glassmorphism, and subtle glowing accents has solidified its position in premium, high-end digital applications.</p>
      
      <h3>The Principles of Glassmorphism</h3>
      <p>Glassmorphism relies on the illusion of transparency, frosted glass textures, and floating layers. Creating this effect in CSS is surprisingly simple, but mastering the details is key to a premium feel:</p>

      <pre><code>.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}</code></pre>

      <p>To keep the design clean, avoid over-blurring. A blur radius between <code>10px</code> and <code>20px</code> usually yields the most realistic and visually pleasing results.</p>

      <h3>Layering with Light and Shadows</h3>
      <p>Without depth, glass cards blend into the background. To prevent this, apply multiple shadows: a dark shadow to simulate elevation and a subtle, color-matched glow to create an active/hover state.</p>

      <blockquote>
        "Minimalism isn't the lack of something; it's the perfect amount of something. In UI, small details like a 1px border make all the difference."
      </blockquote>

      <h3>Best Practices</h3>
      <ul>
        <li><strong>Ensure high contrast:</strong> Always verify that text is legible on top of glassy cards across all possible background variations.</li>
        <li><strong>Use HSL colors:</strong> It's easier to adjust saturation and lightness dynamically using CSS variables when working with HSL colors.</li>
        <li><strong>Performant animations:</strong> Keep transitions limited to hardware-accelerated properties like <code>transform</code> and <code>opacity</code>.</li>
      </ul>
    `
  },
  {
    id: "boost-frontend-productivity",
    title: "Boosting Frontend Development Productivity: A Modern Setup",
    excerpt: "Uncover the developer setups, key bindings, CLI utilities, and habits that can double your coding speed and keep you in the zone.",
    category: "Productivity",
    tags: ["Productivity", "Workspace", "Tooling", "Workflow"],
    date: "May 15, 2026",
    readTime: "5 min read",
    coverImage: "/images/post_productivity.png",
    author: {
      name: "Joseph Tomy",
      role: "Creator & Writer",
      avatar: "/images/about_author.png"
    },
    featured: false,
    content: `
      <p class="lead">Coding speed is not just about typing faster; it's about reducing friction, automating repetitive tasks, and staying in a state of flow. Here is how to configure your system for peak output.</p>
      
      <h3>Embrace Vite for Development</h3>
      <p>If you're still using legacy configurations, you're losing hours to dev server starts and updates. Vite leverages ES modules and native browser compiling to deliver near-instant Hot Module Replacement (HMR).</p>

      <h3>Custom CLI Shortcuts</h3>
      <p>Writing out long terminal commands repeatedly breaks focus. Creating smart aliases in your shell profile (e.g. <code>.zshrc</code> or <code>.bashrc</code>) can save hours over the course of a project:</p>

      <pre><code># ZSH Shortcuts
alias ni="npm install"
alias nr="npm run"
alias nrd="npm run dev"
alias nrb="npm run build"
alias gp="git push origin"
alias gc="git commit -m"</code></pre>

      <h3>Maintaining Visual Harmony</h3>
      <p>A cluttered workspace leads to a cluttered mind. Invest in a high-quality desk setup, utilize ergonomic accessories, and ensure your coding environment uses eye-friendly color themes (like deep navy/slate over pure black or light white).</p>

      <blockquote>
        "The best productivity tool is a clear mind. Automate the boring parts of coding so your brain can focus on solving architecture problems."
      </blockquote>
    `
  }
];

export const categories = ["All", "Technology", "Design", "Productivity"];
