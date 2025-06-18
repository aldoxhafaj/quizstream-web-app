import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginFormatjs from 'eslint-plugin-formatjs';
import eslintPluginFunctional from 'eslint-plugin-functional';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginSonarjs from 'eslint-plugin-sonarjs';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import { version } from 'react';
import tseslint from 'typescript-eslint';

// eslint-disable-next-line import/no-default-export
export default tseslint.config(
  globalIgnores([
    'node_modules',
    'dist',
    'build',
    'i18nformatter.cjs',
    'i18ncompile.cjs',
    'hero.ts',
  ]),
  {
    ignores: ['dist', '**/README.md'],
    files: ['**/*.{ts,tsx}'],
  },
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@heroui/*', '!@heroui/theme', '!@heroui/system'],
              message: 'Please import components from @quizstream/components.',
            },
            {
              group: ['node_modules/*'],
              message: 'This import must be wrong. Please fix it.',
            },
            {
              group: ['../*'],
              message:
                'Relative imports are forbidden. Please start your path with @quizstream/',
            },
          ],
        },
      ],
    },
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-extra-boolean-cast': 'error',
      'object-shorthand': 'error',
      eqeqeq: 'error',
      'no-empty-pattern': 'error',
      'no-nested-ternary': 'error',
      'prefer-const': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'no-console': 'error',
      'no-debugger': 'warn',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
  },
  {
    plugins: {
      functional: eslintPluginFunctional,
    },
    rules: {
      'functional/prefer-immutable-types': 'off',
      'functional/no-loop-statements': 'error',
      'functional/no-let': 'error',
    },
  },
  {
    extends: [eslintConfigPrettier],
    rules: {
      ...eslintConfigPrettier.rules,
    },
  },
  {
    plugins: {
      import: eslintPluginImport,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.paths.json',
        },
      },
    },
    rules: {
      'import/named': 'off',
      'import/no-named-as-default': 'error',
      'import/no-default-export': 'error',
      'import/first': 'error',
      'import/default': 'off',
      'import/newline-after-import': 'error',
      'import/no-cycle': 'off',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'error',
    },
  },
  {
    plugins: { 'unused-imports': eslintPluginUnusedImports },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    plugins: { 'simple-import-sort': eslintPluginSimpleImportSort },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    plugins: { react: eslintPluginReact },
    settings: {
      react: {
        version,
      },
    },
    rules: {
      'react/prop-types': 'off',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
        },
      ],
      'react/no-unstable-nested-components': [
        'error',
        {
          allowAsProps: true,
        },
      ],
      'react/jsx-boolean-value': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
  {
    plugins: { sonarjs: eslintPluginSonarjs },
    rules: {
      'sonarjs/cognitive-complexity': ['error', 15],
      'sonarjs/max-switch-cases': ['error', 10],
      'sonarjs/no-duplicate-string': ['error', { threshold: 3 }],
      'sonarjs/no-all-duplicated-branches': 'error',
      'sonarjs/no-collapsible-if': 'error',
      'sonarjs/no-empty-collection': 'error',
      'sonarjs/no-extra-arguments': 'error',
      'sonarjs/no-gratuitous-expressions': 'error',
      'sonarjs/no-identical-conditions': 'error',
      'sonarjs/no-identical-expressions': 'error',
      'sonarjs/no-identical-functions': 'error',
      'sonarjs/no-inverted-boolean-check': 'error',
      'sonarjs/no-nested-switch': 'error',
      'sonarjs/no-nested-template-literals': 'error',
      'sonarjs/no-redundant-boolean': 'error',
      'sonarjs/no-unused-collection': 'error',
      'sonarjs/no-use-of-empty-return-value': 'error',
      'sonarjs/no-useless-catch': 'error',
      'sonarjs/non-existent-operator': 'error',
      'sonarjs/prefer-object-literal': 'error',
      'sonarjs/prefer-single-boolean-return': 'error',
    },
  },
  {
    plugins: {
      formatjs: eslintPluginFormatjs,
    },
    rules: {
      'formatjs/no-offset': 'error',
      'formatjs/enforce-default-message': ['error', 'literal'],
      'formatjs/no-missing-icu-plural-one-placeholders': 'error',
      'formatjs/no-emoji': ['error', { versionAbove: '12.0' }],
      'formatjs/enforce-plural-rules': [
        2,
        {
          one: true,
          other: true,
          zero: false,
        },
      ],
      'formatjs/no-literal-string-in-object': [
        'error',
        {
          // The object properties to check for untranslated literal strings
          include: ['label', 'title'],
        },
      ],
      'formatjs/no-multiple-whitespaces': 'error',
      'formatjs/no-multiple-plurals': 'error',
      'formatjs/enforce-id': 'error',
      'formatjs/no-invalid-icu': 'error',
      'formatjs/no-complex-selectors': [
        'error',
        {
          limit: 3,
        },
      ],
      'formatjs/prefer-pound-in-plural': 'error',
    },
  },
);
