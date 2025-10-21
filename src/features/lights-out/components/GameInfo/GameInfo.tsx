import { Text } from '../../../../components/Text';
import styles from './GameInfo.module.css';

interface GameInfoProps {
  moves: number;
}

export const GameInfo = ({ moves }: GameInfoProps) => {
  return (
    <div className={styles.gameInfo}>
      <Text variant="p">すべてのライトを消すとクリアです</Text>
      <Text variant="p">
        クリック回数: <Text variant="span">{moves}</Text>
      </Text>
    </div>
  );
};