import React from 'react'
import { Navbar ,Sidebar } from '../index'


const MainLayoutAuth = (Component) => function HOC() {

  
    return (
      <div class="page-wrapper">
             
             <Sidebar />
        <div class="page-content">
             <Navbar />
            <Component />
        </div>
        </div>

  
    )
  }
  
  export default MainLayoutAuth