import { Text } from '../../../components/Text';
import { GameBoard } from '../components/GameBoard';
import { GameControls } from '../components/GameControls';
import { GameInfo } from '../components/GameInfo';
import { useLightsOut } from '../useLightsOut';
import styles from './LightsOutGame.module.css';

export const LightsOutGame = () => {
  const { gameState, handleCellClick, resetGame, newGame } = useLightsOut();

  return (
    <div className={styles.container}>
      <Text variant="h1">ライツアウト</Text>
      <GameInfo moves={gameState.moves} />
      <GameBoard board={gameState.board} onCellClick={handleCellClick} />
      <GameControls onReset={resetGame} onNewGame={newGame} />
    </div>
  );
};