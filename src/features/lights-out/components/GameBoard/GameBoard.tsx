import { Cell } from '../Cell';
import { Position } from '../../types';
import styles from './GameBoard.module.css';

interface GameBoardProps {
  board: boolean[][];
  onCellClick: (position: Position) => void;
}

export const GameBoard = ({ board, onCellClick }: GameBoardProps) => {
  return (
    <div className={styles.gameBoard}>
      {board.map((row, rowIndex) =>
        row.map((isLit, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            isLit={isLit}
            onClick={() => onCellClick({ row: rowIndex, col: colIndex })}
          />
        ))
      )}
    </div>
  );
};