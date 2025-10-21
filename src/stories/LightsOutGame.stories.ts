import type { Meta, StoryObj } from '@storybook/react';
import { LightsOutGame } from '../features/lights-out/LightsOutGame';

const meta: Meta<typeof LightsOutGame> = {
  title: 'LightsOut/LightsOutGame',
  component: LightsOutGame,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};