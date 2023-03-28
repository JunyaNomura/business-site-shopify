import Footer from './Footer';
import type { ReactNode, FC } from 'react';
import Header from './Header';

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>{ children }</main>
      <Footer />
    </div>
  )
}

export default Layout
