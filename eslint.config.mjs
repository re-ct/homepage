import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from '@eslint-react/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { '@eslint-react': pluginReact },
    settings: pluginReact.configs['recommended-typescript'].settings,
    // Preserve the React checks used before the ESLint 10 migration.
    rules: {
      '@eslint-react/no-missing-component-display-name': 'error',
      '@eslint-react/no-missing-context-display-name': 'error',
      '@eslint-react/no-missing-key': 'error',
      '@eslint-react/jsx-no-comment-textnodes': 'error',
      '@eslint-react/dom-no-unsafe-target-blank': 'error',
      '@eslint-react/jsx-no-children-prop': 'error',
      '@eslint-react/dom-no-dangerously-set-innerhtml-with-children': 'error',
      '@eslint-react/no-component-will-mount': 'error',
      '@eslint-react/no-component-will-receive-props': 'error',
      '@eslint-react/no-component-will-update': 'error',
      '@eslint-react/no-direct-mutation-state': 'error',
      '@eslint-react/dom-no-find-dom-node': 'error',
      '@eslint-react/dom-no-hydrate': 'error',
      '@eslint-react/dom-no-render': 'error',
      '@eslint-react/dom-no-render-return-value': 'error',
      '@eslint-react/dom-no-unknown-property': 'error',
    },
  },
];
