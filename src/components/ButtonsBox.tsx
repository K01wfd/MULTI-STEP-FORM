import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
function ButtonsBox({ children }: Props) {
  return <footer>{children}</footer>;
}

export default ButtonsBox;
