import { useState, useCallback } from 'react';
import { GameState, Position } from './types';
import { GAME_CONFIG } from '../../Config';

const createInitialBoard = (): boolean[][] => {
  const board: boolean[][] = [];
  for (let i = 0; i < GAME_CONFIG.BOARD_SIZE; i++) {
    board[i] = [];
    for (let j = 0; j < GAME_CONFIG.BOARD_SIZE; j++) {
      board[i][j] = Math.random() > 0.5;
    }
  }
  return board;
};

const checkWin = (board: boolean[][]): boolean => {
  return board.every(row => row.every(cell => !cell));
};

const toggleCell = (board: boolean[][], row: number, col: number): boolean[][] => {
  const newBoard = board.map(row => [...row]);

  if (row >= 0 && row < GAME_CONFIG.BOARD_SIZE && col >= 0 && col < GAME_CONFIG.BOARD_SIZE) {
    newBoard[row][col] = !newBoard[row][col];
  }

  return newBoard;
};

const toggleLights = (board: boolean[][], position: Position): boolean[][] => {
  let newBoard = board;

  newBoard = toggleCell(newBoard, position.row, position.col);
  newBoard = toggleCell(newBoard, position.row - 1, position.col);
  newBoard = toggleCell(newBoard, position.row + 1, position.col);
  newBoard = toggleCell(newBoard, position.row, position.col - 1);
  newBoard = toggleCell(newBoard, position.row, position.col + 1);

  return newBoard;
};

export const useLightsOut = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const initialBoard = createInitialBoard();
    return {
      board: initialBoard,
      moves: 0,
      isWon: checkWin(initialBoard)
    };
  });

  const [initialState, setInitialState] = useState<boolean[][]>(() => gameState.board.map(row => [...row]));

  const handleCellClick = useCallback((position: Position) => {
    if (gameState.isWon) return;

    setGameState(prevState => {
      const newBoard = toggleLights(prevState.board, position);
      const newMoves = prevState.moves + 1;
      const isWon = checkWin(newBoard);

      if (isWon) {
        setTimeout(() => {
          alert(`クリアしました！クリック回数: ${newMoves}`);
        }, GAME_CONFIG.ANIMATION_DURATION);
      }

      return {
        board: newBoard,
        moves: newMoves,
        isWon
      };
    });
  }, [gameState.isWon]);

  const resetGame = useCallback(() => {
    setGameState({
      board: initialState.map(row => [...row]),
      moves: 0,
      isWon: checkWin(initialState)
    });
  }, [initialState]);

  const newGame = useCallback(() => {
    const newBoard = createInitialBoard();
    setInitialState(newBoard.map(row => [...row]));
    setGameState({
      board: newBoard,
      moves: 0,
      isWon: checkWin(newBoard)
    });
  }, []);

  return {
    gameState,
    handleCellClick,
    resetGame,
    newGame
  };
};