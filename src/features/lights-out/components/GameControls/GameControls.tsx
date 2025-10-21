import { Button } from '../../../../components/Button';
import styles from './GameControls.module.css';

interface GameControlsProps {
  onReset: () => void;
  onNewGame: () => void;
}

export const GameControls = ({ onReset, onNewGame }: GameControlsProps) => {
  return (
    <div className={styles.controls}>
      <Button variant="secondary" onClick={onReset}>
        リセット
      </Button>
      <Button variant="primary" onClick={onNewGame}>
        新しいゲーム
      </Button>
    </div>
  );
};