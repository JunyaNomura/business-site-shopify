import Header from './Header';
import Footer from './Footer';
import type { ReactNode, FC } from 'react';
import NewNewHeader from './NewNewHeader';

type Props = {
  children: ReactNode
}

const Layout: FC <Props> = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <NewNewHeader />
      <main>{ children }</main>
      <Footer />
    </>
  )
}

export default Layout