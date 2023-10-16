import { ReactNode } from 'react';
import styles from '../styles/grid.module.css';
interface Props {
  children: ReactNode;
}
function MainLayout({ children }: Props) {
  return <div className={styles.mainGrid}>{children}</div>;
}

export default MainLayout;
