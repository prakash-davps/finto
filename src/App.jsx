import React from 'react'

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Finto — Starter App</h1>
        <p>This is a minimal Vite + React starter scaffold. Deploys to GitHub Pages automatically.</p>
      </header>

      <main>
        <section className="card">
          <h2>Welcome</h2>
          <p>Use this project as the basis for your app. Edit <code>src/App.jsx</code> to get started.</p>
        </section>

        <section className="card">
          <h2>Next steps</h2>
          <ol>
            <li>Create a GitHub repo and push these files.</li>
            <li>GitHub Actions will build and deploy to GitHub Pages.</li>
          </ol>
        </section>
      </main>

      <footer>Made for you — free deployment ready.</footer>
    </div>
  )
}
