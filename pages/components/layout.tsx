import Footer from './Footer';
import type { ReactNode, FC } from 'react';
import Header from './Header';

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{ children }</main>
      <Footer />
    </>
  )
}

export default Layout
