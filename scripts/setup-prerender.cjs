const fs = require('fs');
const path = require('path');

// Ensure node_modules/vite-plugin-prerender exists
const pluginDir = path.resolve(__dirname, '../node_modules/vite-plugin-prerender');
if (!fs.existsSync(pluginDir)) {
  fs.mkdirSync(pluginDir, { recursive: true });
}
const distDir = path.join(pluginDir, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Generate CJS implementation
const cjsContent = `'use strict';
const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');

function vitePrerender(options) {
  options = options || {};
  let config;

  return {
    name: 'vite:prerender',
    apply: 'build',
    enforce: 'post',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    async closeBundle() {
      const outDir = (config && config.build && config.build.outDir) || 'dist';
      const rootDir = (config && config.root) || process.cwd();
      const staticDir = options.staticDir || path.resolve(rootDir, outDir);
      const indexPath = options.indexPath || path.join(staticDir, 'index.html');

      if (!fs.existsSync(indexPath)) {
        console.warn('[vite-plugin-prerender] index.html not found at ' + indexPath);
        return;
      }

      console.log('\\x1b[36m[vite-plugin-prerender]\\x1b[0m Prerendering routes via React SSR...');

      const cacheDir = path.resolve(rootDir, 'node_modules/.cache/prerender');
      fs.mkdirSync(cacheDir, { recursive: true });
      const bundlePath = path.join(cacheDir, 'app-ssr.cjs');

      try {
        esbuild.buildSync({
          entryPoints: [path.resolve(rootDir, 'src/App.tsx')],
          bundle: true,
          format: 'cjs',
          platform: 'node',
          packages: 'external',
          outfile: bundlePath,
          loader: {
            '.svg': 'text',
            '.png': 'text',
            '.webp': 'text',
            '.jpg': 'text',
            '.jpeg': 'text',
            '.mp4': 'text',
          },
        });
      } catch (err) {
        console.error('[vite-plugin-prerender] Failed to compile App for SSR:', err);
        return;
      }

      delete require.cache[require.resolve(bundlePath)];
      const React = require('react');
      const ReactDOMServer = require('react-dom/server');
      const App = require(bundlePath).default;

      const baseHtml = fs.readFileSync(indexPath, 'utf8');
      const routes = options.routes && options.routes.length > 0 ? options.routes : ['/'];

      for (const route of routes) {
        let initialPage = 'home';
        const cleanRoute = route.replace(/^\\/|\\/$/g, '');
        if (cleanRoute === 'bounce-houses') initialPage = 'bounce-houses';
        else if (cleanRoute === 'movie-screens' || cleanRoute === 'movie-screen') initialPage = 'movie-screen';
        else if (cleanRoute === 'popcorn' || cleanRoute === 'popcorn-cart' || cleanRoute === 'popcorn-machines' || cleanRoute === 'cotton-candy') initialPage = 'popcorn-cart';
        else if (cleanRoute === 'contact' || cleanRoute === 'booking') initialPage = 'contact';

        let renderedApp = '';
        try {
          renderedApp = ReactDOMServer.renderToString(React.createElement(App, { initialPage }));
        } catch (err) {
          console.error('[vite-plugin-prerender] Error rendering route ' + route + ':', err);
          continue;
        }

        let pageHtml = baseHtml;
        if (pageHtml.includes('<div id="root"></div>')) {
          pageHtml = pageHtml.replace('<div id="root"></div>', '<div id="root">' + renderedApp + '</div>');
        } else {
          pageHtml = pageHtml.replace(/(<div\\s+id=["']root["'][^>]*>)([\\s\\S]*?)(<\\/div>)/i, '$1' + renderedApp + '$3');
        }

        let destPath = indexPath;
        if (cleanRoute && cleanRoute !== '') {
          destPath = path.join(staticDir, cleanRoute, 'index.html');
        }

        if (typeof options.postProcess === 'function') {
          const res = options.postProcess({
            route,
            originalRoute: route,
            html: pageHtml,
            outputPath: destPath
          });
          if (res && typeof res.html === 'string') {
            pageHtml = res.html;
          }
        }

        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.writeFileSync(destPath, pageHtml, 'utf8');

        console.log(\`\\x1b[36m[vite-plugin-prerender]\\x1b[0m Rendered route: \${route} -> \${path.relative(rootDir, destPath)} (\${(pageHtml.length / 1024).toFixed(1)} kB)\`);
      }

      console.log('\\x1b[32m[vite-plugin-prerender]\\x1b[0m All routes prerendered successfully!');
    }
  };
}

vitePrerender.PuppeteerRenderer = class PuppeteerRenderer {};
vitePrerender.default = vitePrerender;
module.exports = vitePrerender;
`;

// Generate ESM implementation
const esmContent = `import path from 'path';
import fs from 'fs';
import esbuild from 'esbuild';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default function vitePrerender(options) {
  options = options || {};
  let config;

  return {
    name: 'vite:prerender',
    apply: 'build',
    enforce: 'post',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    async closeBundle() {
      const outDir = (config && config.build && config.build.outDir) || 'dist';
      const rootDir = (config && config.root) || process.cwd();
      const staticDir = options.staticDir || path.resolve(rootDir, outDir);
      const indexPath = options.indexPath || path.join(staticDir, 'index.html');

      if (!fs.existsSync(indexPath)) {
        console.warn('[vite-plugin-prerender] index.html not found at ' + indexPath);
        return;
      }

      console.log('\\x1b[36m[vite-plugin-prerender]\\x1b[0m Prerendering routes via React SSR...');

      const cacheDir = path.resolve(rootDir, 'node_modules/.cache/prerender');
      fs.mkdirSync(cacheDir, { recursive: true });
      const bundlePath = path.join(cacheDir, 'app-ssr.cjs');

      try {
        esbuild.buildSync({
          entryPoints: [path.resolve(rootDir, 'src/App.tsx')],
          bundle: true,
          format: 'cjs',
          platform: 'node',
          packages: 'external',
          outfile: bundlePath,
          loader: {
            '.svg': 'text',
            '.png': 'text',
            '.webp': 'text',
            '.jpg': 'text',
            '.jpeg': 'text',
            '.mp4': 'text',
          },
        });
      } catch (err) {
        console.error('[vite-plugin-prerender] Failed to compile App for SSR:', err);
        return;
      }

      delete require.cache[require.resolve(bundlePath)];
      const App = require(bundlePath).default;

      const baseHtml = fs.readFileSync(indexPath, 'utf8');
      const routes = options.routes && options.routes.length > 0 ? options.routes : ['/'];

      for (const route of routes) {
        let initialPage = 'home';
        const cleanRoute = route.replace(/^\\/|\\/$/g, '');
        if (cleanRoute === 'bounce-houses') initialPage = 'bounce-houses';
        else if (cleanRoute === 'movie-screens' || cleanRoute === 'movie-screen') initialPage = 'movie-screen';
        else if (cleanRoute === 'popcorn' || cleanRoute === 'popcorn-cart' || cleanRoute === 'popcorn-machines' || cleanRoute === 'cotton-candy') initialPage = 'popcorn-cart';
        else if (cleanRoute === 'contact' || cleanRoute === 'booking') initialPage = 'contact';

        let renderedApp = '';
        try {
          renderedApp = ReactDOMServer.renderToString(React.createElement(App, { initialPage }));
        } catch (err) {
          console.error('[vite-plugin-prerender] Error rendering route ' + route + ':', err);
          continue;
        }

        let pageHtml = baseHtml;
        if (pageHtml.includes('<div id="root"></div>')) {
          pageHtml = pageHtml.replace('<div id="root"></div>', '<div id="root">' + renderedApp + '</div>');
        } else {
          pageHtml = pageHtml.replace(/(<div\\s+id=["']root["'][^>]*>)([\\s\\S]*?)(<\\/div>)/i, '$1' + renderedApp + '$3');
        }

        let destPath = indexPath;
        if (cleanRoute && cleanRoute !== '') {
          destPath = path.join(staticDir, cleanRoute, 'index.html');
        }

        if (typeof options.postProcess === 'function') {
          const res = options.postProcess({
            route,
            originalRoute: route,
            html: pageHtml,
            outputPath: destPath
          });
          if (res && typeof res.html === 'string') {
            pageHtml = res.html;
          }
        }

        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.writeFileSync(destPath, pageHtml, 'utf8');

        console.log(\`\\x1b[36m[vite-plugin-prerender]\\x1b[0m Rendered route: \${route} -> \${path.relative(rootDir, destPath)} (\${(pageHtml.length / 1024).toFixed(1)} kB)\`);
      }

      console.log('\\x1b[32m[vite-plugin-prerender]\\x1b[0m All routes prerendered successfully!');
    }
  };
}

vitePrerender.PuppeteerRenderer = class PuppeteerRenderer {};
`;

// Types definition
const dtsContent = `import { Plugin } from 'vite';

export interface VitePluginPrerenderOptions {
  staticDir?: string;
  outputDir?: string;
  indexPath?: string;
  routes: Array<string>;
  postProcess?: (renderedRoute: {
    route: string;
    originalRoute: string;
    html: string;
    outputPath: string;
  }) => any;
  postProcessHtml?: (renderedRoute: any) => any;
  minify?: Record<string, any>;
  server?: Record<string, any>;
  renderer?: any;
}

export default function vitePrerender(options: VitePluginPrerenderOptions): Plugin;
`;

fs.writeFileSync(path.join(distDir, 'index.cjs'), cjsContent, 'utf8');
fs.writeFileSync(path.join(distDir, 'index.mjs'), esmContent, 'utf8');
fs.writeFileSync(path.join(distDir, 'index.d.ts'), dtsContent, 'utf8');

console.log('[setup-prerender] Installed React SSR engine into vite-plugin-prerender successfully.');
