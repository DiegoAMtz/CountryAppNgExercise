import type {Meta, StoryObj} from '@storybook/angular';
import {FooterCustomComponent} from '../app/shared/components/footer-custom/footer-custom.component';

const meta: Meta<FooterCustomComponent> = {
  title: 'Example/FooterCustom',
  component: FooterCustomComponent,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<FooterCustomComponent>;

export const Footer: Story = {};
