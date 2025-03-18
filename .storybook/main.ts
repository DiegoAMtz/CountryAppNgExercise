import type {StorybookConfig} from '@storybook/angular';
import postCss from "postcss";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    // Often used for tailwind
    ({
      name: '@storybook/addon-styling-webpack',

      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {importLoaders: 1}
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: 'postcss-loader',
                options: {implementation: postCss}
              }
            ],
          }
        ]
      }
    }),
    "@storybook/addon-themes"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  }
};
export default config;
