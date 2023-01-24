import '../src/main.css';
import { StorybookMeta } from '../src/components/components.config';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    hideNoControlsWarning: true,
  },
  docs: {
    source: {
      state: 'open',
    },
  },
  options: {
    storySort: {
      order: Object.values(StorybookMeta),
    },
  },
};
