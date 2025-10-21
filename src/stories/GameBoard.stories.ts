import type { Meta, StoryObj } from '@storybook/react';
import { GameBoard } from '../features/lights-out/components/GameBoard';

const meta: Meta<typeof GameBoard> = {
  title: 'LightsOut/GameBoard',
  component: GameBoard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleBoard = [
  [true, false, true, false, true],
  [false, true, false, true, false],
  [true, false, true, false, true],
  [false, true, false, true, false],
  [true, false, true, false, true],
];

export const Default: Story = {
  args: {
    board: sampleBoard,
    onCellClick: (position) => console.log('Cell clicked at:', position),
  },
};

export const AllLit: Story = {
  args: {
    board: Array(5).fill(null).map(() => Array(5).fill(true)),
    onCellClick: (position) => console.log('Cell clicked at:', position),
  },
};

export const AllOff: Story = {
  args: {
    board: Array(5).fill(null).map(() => Array(5).fill(false)),
    onCellClick: (position) => console.log('Cell clicked at:', position),
  },
};