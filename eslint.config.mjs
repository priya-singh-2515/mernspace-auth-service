// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import ts from 'typescript';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
      ignores: ['node_modules', 'dist','eslint.config.mjs'],
  },
  {
  
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
        'no-console': 'off',
    },
  },
);