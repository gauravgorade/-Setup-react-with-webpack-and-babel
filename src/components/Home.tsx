import React, { FC } from "react";


const Home: FC = () => {
  return (
    <div className="home" style={{fontSize: "18px", padding: "10px"}}>
      <h1>React Webpack Configuration</h1>
      <h2>This repository showcases a configured setup for a React project using Webpack, tailored for development and production environments. Key features include:</h2>
      <br />
      <ul >
        <li><strong>Webpack Configuration</strong>: Separate configurations for development (<code>webpack.dev.js</code>) and production (<code>webpack.prod.js</code>) environments.</li>
        <li ><strong>Environment Variables</strong>: Utilization of <code>dotenv-webpack</code> for managing environment-specific variables (<code>dev.env</code> and <code>prod.env</code>).</li>
        <li ><strong>CSS and Font Handling</strong>: Configuration for handling CSS stylesheets and font files using loaders and plugins like <code>mini-css-extract-plugin</code> and <code>file-loader</code>.</li>
        <li ><strong>HTML Templating</strong>: Integration of <code>html-webpack-plugin</code> for automatic HTML generation from a template.</li>
        <li ><strong>Chunk Optimization</strong>: Utilization of Webpack's <code>splitChunks</code> to optimize and separate vendor libraries.</li>
        <li ><strong>Node.js Configuration</strong>: Custom configuration for Node.js to handle file system (<code>fs</code>) operations.</li>
      </ul>
      <br />
      <h2>Usage</h2>
      <ul >
        <li ><code>npm start</code>: Start development server with hot reloading.</li>
        <br />
        <li ><code>npm run build</code>: Build the project for production.</li>
      </ul>

    </div>
  );
}


export default Home;
