import React from 'react'

import Navbar from './Navbar/Navbar'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {

  
  return (
    <div>
        <Navbar /> 
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout