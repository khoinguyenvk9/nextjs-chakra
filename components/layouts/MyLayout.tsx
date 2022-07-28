import React, { FC, ReactNode } from 'react'
import Footer from './Footer'
import Head from './MyHead'
import Header from './Header'


const MyLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head />
      <div className="main-container">
        <Header/>
        <main id="content" role="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyLayout
