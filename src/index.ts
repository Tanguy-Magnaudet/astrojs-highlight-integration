
import type { AstroIntegration } from 'astro';
import { buildScript, type Options } from './client';


export default function createPlugin(options: Options): AstroIntegration {
  return {
    name: '@highlight-run/astro-integration',
    hooks: {
      'astro:config:setup': ({ injectScript }) => {
        const script = buildScript(options);
        injectScript('page', script);
      }
    }
  };
}