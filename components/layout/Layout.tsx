import { ReactNode } from 'react';
import { Footer, Hd, Header } from 'components/layout';

interface Props {
  children: ReactNode;
  tit?: string;
}

const Layout = ({ children, tit }: Props) => (
  <>
    <Hd tit={tit} />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
