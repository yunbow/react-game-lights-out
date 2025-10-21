import styles from './Cell.module.css';

interface CellProps {
  isLit: boolean;
  onClick: () => void;
}

export const Cell = ({ isLit, onClick }: CellProps) => {
  return (
    <div
      className={`${styles.cell} ${isLit ? styles.lit : ''}`}
      onClick={onClick}
    />
  );
};