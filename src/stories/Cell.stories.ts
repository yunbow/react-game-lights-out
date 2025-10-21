import type { Meta, StoryObj } from '@storybook/react';
import { Cell } from '../features/lights-out/components/Cell';

const meta: Meta<typeof Cell> = {
  title: 'LightsOut/Cell',
  component: Cell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLit: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {
  args: {
    isLit: false,
    onClick: () => console.log('Cell clicked'),
  },
};

export const On: Story = {
  args: {
    isLit: true,
    onClick: () => console.log('Cell clicked'),
  },
};