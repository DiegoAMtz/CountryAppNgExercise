import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import '../src/styles.css';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
      cupcake: 'cupcake',
      sunset: 'sunset',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
];

export default preview;
