import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '新しいゲーム',
    variant: 'primary',
    onClick: () => console.log('Primary button clicked'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'リセット',
    variant: 'secondary',
    onClick: () => console.log('Secondary button clicked'),
  },
};

export const Disabled: Story = {
  args: {
    children: '無効ボタン',
    variant: 'primary',
    disabled: true,
    onClick: () => console.log('Disabled button clicked'),
  },
};