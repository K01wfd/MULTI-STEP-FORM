import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
function FormsContent({ children }: Props) {
  return <main>{children}</main>;
}

export default FormsContent;
