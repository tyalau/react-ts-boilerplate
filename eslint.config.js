import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'coverage'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, react.configs.flat.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'array-callback-return': 'error',
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      'dot-notation': 'error',
      indent: 0,
      'max-len': [
        'error',
        {
          code: 130,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'multiline-ternary': 0,
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-else-return': [
        'error',
        {
          allowElseIf: false,
        },
      ],
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-negated-condition': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-undef': 0,
      'no-undef-init': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'object-shorthand': 'error',
      'operator-linebreak': 0,
      'space-in-parens': 0,
      'prefer-arrow-callback': 'error',
      'prefer-destructuring': [
        'error',
        {
          object: true,
        },
      ],
      'prefer-regex-literals': 'error',
      'prefer-template': 'error',
      'quote-props': ['error', 'as-needed'],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],

      'react/button-has-type': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/no-array-index-key': 'error',
      'react/react-in-jsx-scope': 0,
      'react/self-closing-comp': 'error',
      'react/state-in-constructor': 'error',
    },
  }
)
